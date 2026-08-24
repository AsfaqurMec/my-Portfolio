import { useState, useEffect } from 'react';
import { 
  FaPlus, 
  FaEdit, 
  FaTrash, 
  FaEye, 
  FaUpload, 
  FaGripVertical, 
  FaArrowUp, 
  FaArrowDown, 
  FaTimes, 
  FaCheckCircle,
  FaLightbulb,
  FaListUl,
  FaCode
} from 'react-icons/fa';
import { projectService } from '../../services/projectService';
import { cleanArray, cleanTag, sortProjects } from '../../utils/cleanTags';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [loading, setLoading] = useState(false);
  const [savingOrder, setSavingOrder] = useState(false);
  const [orderMessage, setOrderMessage] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    description: '',
    features: [],
    challenges: [],
    link: '',
    technologies: [],
    category: 'Full Stack',
    featured: false,
    order: 0
  });

  // Dedicated inputs for single items
  const [techInput, setTechInput] = useState('');
  const [featureInput, setFeatureInput] = useState('');
  const [challengeInput, setChallengeInput] = useState('');

  const [thumbnail, setThumbnail] = useState(null);
  const [images, setImages] = useState([]);

  // Drag & drop state
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await projectService.getAllProjects();
      const projectList = Array.isArray(data) ? data : [];
      setProjects(sortProjects(projectList));
    } catch (error) {
      // console.error('Error fetching projects:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // --- Tech tag handlers ---
  const handleAddTech = (e) => {
    if (e) e.preventDefault();
    if (!techInput.trim()) return;

    // Support comma-separated input or single entry
    const newItems = techInput
      .split(',')
      .map(cleanTag)
      .filter(t => t.length > 0 && !formData.technologies.includes(t));

    if (newItems.length > 0) {
      setFormData(prev => ({
        ...prev,
        technologies: [...prev.technologies, ...newItems]
      }));
    }
    setTechInput('');
  };

  const handleTechKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      handleAddTech();
    }
  };

  const handleRemoveTech = (indexToRemove) => {
    setFormData(prev => ({
      ...prev,
      technologies: prev.technologies.filter((_, i) => i !== indexToRemove)
    }));
  };

  // --- Features handlers ---
  const handleAddFeature = (e) => {
    if (e) e.preventDefault();
    if (!featureInput.trim()) return;

    const newFeatures = featureInput
      .split(/\r?\n/)
      .map(cleanTag)
      .filter(f => f.length > 0);

    if (newFeatures.length > 0) {
      setFormData(prev => ({
        ...prev,
        features: [...prev.features, ...newFeatures]
      }));
    }
    setFeatureInput('');
  };

  const handleFeatureKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAddFeature();
    }
  };

  const handleRemoveFeature = (indexToRemove) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== indexToRemove)
    }));
  };

  const handleMoveFeature = (index, direction) => {
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= formData.features.length) return;
    const newFeatures = [...formData.features];
    const [moved] = newFeatures.splice(index, 1);
    newFeatures.splice(targetIndex, 0, moved);
    setFormData(prev => ({ ...prev, features: newFeatures }));
  };

  // --- Challenges & Learn handlers ---
  const handleAddChallenge = (e) => {
    if (e) e.preventDefault();
    if (!challengeInput.trim()) return;

    const newChallenges = challengeInput
      .split(/\r?\n/)
      .map(cleanTag)
      .filter(c => c.length > 0);

    if (newChallenges.length > 0) {
      setFormData(prev => ({
        ...prev,
        challenges: [...prev.challenges, ...newChallenges]
      }));
    }
    setChallengeInput('');
  };

  const handleChallengeKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAddChallenge();
    }
  };

  const handleRemoveChallenge = (indexToRemove) => {
    setFormData(prev => ({
      ...prev,
      challenges: prev.challenges.filter((_, i) => i !== indexToRemove)
    }));
  };

  const handleMoveChallenge = (index, direction) => {
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= formData.challenges.length) return;
    const newChallenges = [...formData.challenges];
    const [moved] = newChallenges.splice(index, 1);
    newChallenges.splice(targetIndex, 0, moved);
    setFormData(prev => ({ ...prev, challenges: newChallenges }));
  };

  const handleThumbnailChange = (e) => {
    setThumbnail(e.target.files[0]);
  };

  const handleImagesChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Flush any pending inputs before submitting
      let finalTechnologies = [...formData.technologies];
      if (techInput.trim()) {
        const extraTechs = techInput.split(',').map(cleanTag).filter(Boolean);
        finalTechnologies = [...new Set([...finalTechnologies, ...extraTechs])];
      }

      let finalFeatures = [...formData.features];
      if (featureInput.trim()) {
        const extraFeatures = featureInput.split(/\r?\n/).map(cleanTag).filter(Boolean);
        finalFeatures = [...finalFeatures, ...extraFeatures];
      }

      let finalChallenges = [...formData.challenges];
      if (challengeInput.trim()) {
        const extraChallenges = challengeInput.split(/\r?\n/).map(cleanTag).filter(Boolean);
        finalChallenges = [...finalChallenges, ...extraChallenges];
      }

      const projectData = {
        ...formData,
        technologies: finalTechnologies,
        features: finalFeatures,
        challenges: finalChallenges,
        thumbnail: thumbnail,
        images: images
      };

      if (editingProject) {
        await projectService.updateProject(editingProject._id, projectData);
      } else {
        await projectService.createProject(projectData);
      }

      resetForm();
      await fetchProjects();
    } catch (error) {
      const serverMessage = error?.response?.data?.message || error?.response?.data?.error;
      alert(serverMessage || 'Error saving project. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData({
      title: project.title || '',
      type: project.type || '',
      description: project.description || '',
      features: cleanArray(project.features),
      challenges: cleanArray(project.challenges),
      link: project.link || '',
      technologies: cleanArray(project.technologies),
      category: project.category || 'Full Stack',
      featured: project.featured || false,
      order: project.order !== undefined ? Number(project.order) : 0
    });
    setTechInput('');
    setFeatureInput('');
    setChallengeInput('');
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await projectService.deleteProject(id);
        fetchProjects();
      } catch (error) {
        alert('Error deleting project. Please try again.');
      }
    }
  };

  const resetForm = () => {
    setShowForm(false);
    setEditingProject(null);
    setFormData({
      title: '',
      type: '',
      description: '',
      features: [],
      challenges: [],
      link: '',
      technologies: [],
      category: 'Full Stack',
      featured: false,
      order: 0
    });
    setTechInput('');
    setFeatureInput('');
    setChallengeInput('');
    setThumbnail(null);
    setImages([]);
  };

  // --- Drag and Drop Reordering Handlers ---
  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (dragOverIndex !== index) {
      setDragOverIndex(index);
    }
  };

  const handleDragLeave = () => {
    // optional reset if needed
  };

  const handleDrop = async (e, targetIndex) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === targetIndex) {
      setDraggedIndex(null);
      setDragOverIndex(null);
      return;
    }

    const updatedProjects = [...projects];
    const [draggedProject] = updatedProjects.splice(draggedIndex, 1);
    updatedProjects.splice(targetIndex, 0, draggedProject);

    // Update local order numbers
    const reordered = updatedProjects.map((p, idx) => ({ ...p, order: idx }));
    setProjects(reordered);
    setDraggedIndex(null);
    setDragOverIndex(null);

    await persistOrder(reordered);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleMoveProject = async (index, direction) => {
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= projects.length) return;

    const updatedProjects = [...projects];
    const [movedProject] = updatedProjects.splice(index, 1);
    updatedProjects.splice(targetIndex, 0, movedProject);

    const reordered = updatedProjects.map((p, idx) => ({ ...p, order: idx }));
    setProjects(reordered);

    await persistOrder(reordered);
  };

  const persistOrder = async (updatedList) => {
    try {
      setSavingOrder(true);
      const projectIds = updatedList.map(p => p._id);
      await projectService.reorderProjects(projectIds);
      setOrderMessage('Project order saved successfully!');
      setTimeout(() => setOrderMessage(''), 3000);
    } catch (err) {
      // console.error('Failed to save project order:', err);
      setOrderMessage('Failed to persist order. Reverting...');
      fetchProjects();
    } finally {
      setSavingOrder(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-stone-100">Projects</h2>
          <p className="text-stone-400 text-sm mt-1">
            Add, edit, or drag & drop to reorder portfolio projects
          </p>
        </div>
        <div className="flex items-center gap-3">
          {orderMessage && (
            <span className="text-xs text-emerald-400 font-medium flex items-center gap-1.5 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1.5 rounded-lg animate-fade-in">
              <FaCheckCircle /> {orderMessage}
            </span>
          )}
          {savingOrder && (
            <span className="text-xs text-sky-400 animate-pulse">Saving order...</span>
          )}
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 font-medium transition-colors shadow-lg shadow-sky-500/20"
          >
            <FaPlus /> Add New Project
          </button>
        </div>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="card-light p-6 sm:p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-stone-700/80 shadow-2xl">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-stone-700/60">
              <h2 className="text-xl font-bold text-stone-100 flex items-center gap-2">
                {editingProject ? <FaEdit className="text-sky-400" /> : <FaPlus className="text-sky-400" />}
                {editingProject ? 'Edit Project' : 'Add New Project'}
              </h2>
              <button
                onClick={resetForm}
                className="text-stone-400 hover:text-stone-100 text-2xl leading-none transition-colors p-1"
                aria-label="Close"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Title & Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-1.5">Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Project Name"
                    required
                    className="w-full px-3.5 py-2.5 bg-stone-800/80 border border-stone-600/80 rounded-xl focus:outline-none focus:border-sky-500 text-stone-100 placeholder-stone-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-1.5">Type / Role</label>
                  <input
                    type="text"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    placeholder="e.g. E-Commerce, Schedular, SaaS"
                    className="w-full px-3.5 py-2.5 bg-stone-800/80 border border-stone-600/80 rounded-xl focus:outline-none focus:border-sky-500 text-stone-100 placeholder-stone-500"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-stone-300 mb-1.5">Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  placeholder="Overview of what the project does..."
                  className="w-full px-3.5 py-2.5 bg-stone-800/80 border border-stone-600/80 rounded-xl focus:outline-none focus:border-sky-500 text-stone-100 placeholder-stone-500"
                />
              </div>

              {/* Section 1: Technologies (with Add Button & Chips) */}
              <div className="p-4 rounded-xl border border-stone-700/60 bg-stone-900/50 space-y-3">
                <label className="block text-sm font-semibold text-stone-200 flex items-center gap-2">
                  <FaCode className="text-sky-400" /> Technologies
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={techInput}
                    onChange={(e) => setTechInput(e.target.value)}
                    onKeyDown={handleTechKeyDown}
                    placeholder="Type tech (e.g. Next.js) and click Add or press Enter"
                    className="flex-1 px-3.5 py-2 bg-stone-800/80 border border-stone-600/80 rounded-xl focus:outline-none focus:border-sky-500 text-stone-100 text-sm placeholder-stone-500"
                  />
                  <button
                    type="button"
                    onClick={handleAddTech}
                    className="bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-1.5 transition-colors shrink-0"
                  >
                    <FaPlus className="text-xs" /> Add
                  </button>
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-2 pt-1 min-h-[32px]">
                  {formData.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-sky-500/20 text-sky-300 border border-sky-400/30"
                    >
                      {tech}
                      <button
                        type="button"
                        onClick={() => handleRemoveTech(index)}
                        className="hover:text-rose-400 transition-colors p-0.5"
                        title="Remove tag"
                      >
                        <FaTimes className="text-[10px]" />
                      </button>
                    </span>
                  ))}
                  {formData.technologies.length === 0 && (
                    <span className="text-xs text-stone-500 italic">No technologies added yet.</span>
                  )}
                </div>
              </div>

              {/* Section 2: Features (with Add Button & List) */}
              <div className="p-4 rounded-xl border border-stone-700/60 bg-stone-900/50 space-y-3">
                <label className="block text-sm font-semibold text-stone-200 flex items-center gap-2">
                  <FaListUl className="text-violet-400" /> Features
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={featureInput}
                    onChange={(e) => setFeatureInput(e.target.value)}
                    onKeyDown={handleFeatureKeyDown}
                    placeholder="Type a feature point and click Add or press Enter"
                    className="flex-1 px-3.5 py-2 bg-stone-800/80 border border-stone-600/80 rounded-xl focus:outline-none focus:border-violet-500 text-stone-100 text-sm placeholder-stone-500"
                  />
                  <button
                    type="button"
                    onClick={handleAddFeature}
                    className="bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-1.5 transition-colors shrink-0"
                  >
                    <FaPlus className="text-xs" /> Add Feature
                  </button>
                </div>

                {/* Features list */}
                <div className="space-y-2 pt-1">
                  {formData.features.map((feat, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between gap-3 px-3 py-2 bg-stone-800/70 border border-stone-700/70 rounded-lg text-sm text-stone-200"
                    >
                      <div className="flex items-start gap-2 flex-1">
                        <span className="text-xs font-mono text-violet-400 font-semibold mt-0.5">
                          {index + 1}.
                        </span>
                        <span className="leading-snug">{feat}</span>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          onClick={() => handleMoveFeature(index, -1)}
                          disabled={index === 0}
                          className="text-stone-400 hover:text-stone-200 disabled:opacity-30 p-1 text-xs"
                          title="Move up"
                        >
                          <FaArrowUp />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleMoveFeature(index, 1)}
                          disabled={index === formData.features.length - 1}
                          className="text-stone-400 hover:text-stone-200 disabled:opacity-30 p-1 text-xs"
                          title="Move down"
                        >
                          <FaArrowDown />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleRemoveFeature(index)}
                          className="text-stone-400 hover:text-rose-400 p-1 text-xs transition-colors"
                          title="Remove feature"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  ))}
                  {formData.features.length === 0 && (
                    <span className="text-xs text-stone-500 italic block">No features added yet.</span>
                  )}
                </div>
              </div>

              {/* Section 3: Challenges & Learn (with Add Button & List) */}
              <div className="p-4 rounded-xl border border-stone-700/60 bg-stone-900/50 space-y-3">
                <label className="block text-sm font-semibold text-stone-200 flex items-center gap-2">
                  <FaLightbulb className="text-amber-400" /> Challenges & Learn
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={challengeInput}
                    onChange={(e) => setChallengeInput(e.target.value)}
                    onKeyDown={handleChallengeKeyDown}
                    placeholder="Type a key challenge or learning point and click Add"
                    className="flex-1 px-3.5 py-2 bg-stone-800/80 border border-stone-600/80 rounded-xl focus:outline-none focus:border-amber-500 text-stone-100 text-sm placeholder-stone-500"
                  />
                  <button
                    type="button"
                    onClick={handleAddChallenge}
                    className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-1.5 transition-colors shrink-0"
                  >
                    <FaPlus className="text-xs" /> Add Challenge
                  </button>
                </div>

                {/* Challenges list */}
                <div className="space-y-2 pt-1">
                  {formData.challenges.map((ch, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between gap-3 px-3 py-2 bg-stone-800/70 border border-stone-700/70 rounded-lg text-sm text-stone-200"
                    >
                      <div className="flex items-start gap-2 flex-1">
                        <span className="text-xs font-mono text-amber-400 font-semibold mt-0.5">
                          {index + 1}.
                        </span>
                        <span className="leading-snug">{ch}</span>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          onClick={() => handleMoveChallenge(index, -1)}
                          disabled={index === 0}
                          className="text-stone-400 hover:text-stone-200 disabled:opacity-30 p-1 text-xs"
                          title="Move up"
                        >
                          <FaArrowUp />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleMoveChallenge(index, 1)}
                          disabled={index === formData.challenges.length - 1}
                          className="text-stone-400 hover:text-stone-200 disabled:opacity-30 p-1 text-xs"
                          title="Move down"
                        >
                          <FaArrowDown />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleRemoveChallenge(index)}
                          className="text-stone-400 hover:text-rose-400 p-1 text-xs transition-colors"
                          title="Remove challenge"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  ))}
                  {formData.challenges.length === 0 && (
                    <span className="text-xs text-stone-500 italic block">No challenges or learnings added yet.</span>
                  )}
                </div>
              </div>

              {/* Row 4: Project Link & Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-1.5">Project Link *</label>
                  <input
                    type="url"
                    name="link"
                    value={formData.link}
                    onChange={handleInputChange}
                    placeholder="https://..."
                    required
                    className="w-full px-3.5 py-2.5 bg-stone-800/80 border border-stone-600/80 rounded-xl focus:outline-none focus:border-sky-500 text-stone-100 placeholder-stone-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-1.5">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 bg-stone-800/80 border border-stone-600/80 rounded-xl focus:outline-none focus:border-sky-500 text-stone-100"
                  >
                    <option value="Full Stack">Full Stack</option>
                    <option value="WordPress">WordPress</option>
                    <option value="Next.js">Next.js</option>
                    <option value="Frontend">Frontend</option>
                  </select>
                </div>
              </div>

              {/* Row 5: Thumbnail & Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-1.5">Thumbnail Image *</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleThumbnailChange}
                    required={!editingProject}
                    className="w-full px-3 py-2 bg-stone-800/80 border border-stone-600/80 rounded-xl focus:outline-none focus:border-sky-500 text-stone-300 text-sm file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:bg-sky-600 file:text-white hover:file:bg-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-1.5">Project Images (multiple)</label>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImagesChange}
                    className="w-full px-3 py-2 bg-stone-800/80 border border-stone-600/80 rounded-xl focus:outline-none focus:border-sky-500 text-stone-300 text-sm file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:bg-violet-600 file:text-white hover:file:bg-violet-500"
                  />
                </div>
              </div>

              {/* Featured Checkbox */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="featured-checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleInputChange}
                  className="h-4 w-4 rounded border-stone-600 text-sky-500 focus:ring-sky-400 bg-stone-800"
                />
                <label htmlFor="featured-checkbox" className="text-sm font-medium text-stone-300 cursor-pointer">
                  Featured Project
                </label>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4 border-t border-stone-700/60">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-sky-500 hover:bg-sky-600 disabled:bg-stone-600 text-white py-3 rounded-xl font-medium transition-colors shadow-lg shadow-sky-500/20"
                >
                  {loading ? 'Saving...' : (editingProject ? 'Update Project' : 'Add Project')}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="flex-1 bg-stone-700 hover:bg-stone-600 text-stone-200 py-3 rounded-xl font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Projects List / Grid with Drag-and-Drop Sort */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-stone-400 px-1">
          <span>Drag the grip icon <FaGripVertical className="inline text-stone-500 mx-1" /> or use Up/Down arrows to reorder projects</span>
          <span>{projects.length} Total Projects</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const isDragging = draggedIndex === index;
            const isOver = dragOverIndex === index;

            return (
              <div
                key={project._id || index}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, index)}
                onDragEnd={handleDragEnd}
                className={`card-light overflow-hidden rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                  isDragging ? 'opacity-40 scale-95 border-sky-500' : 'opacity-100'
                } ${
                  isOver && !isDragging ? 'border-sky-400 shadow-xl shadow-sky-500/10 -translate-y-1' : 'border-stone-700/60'
                }`}
              >
                <div>
                  {/* Thumbnail & Order Header */}
                  <div className="relative">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    {/* Order badge & Drag Handle */}
                    <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-stone-900/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-stone-700/80 text-xs font-semibold text-stone-200">
                      <FaGripVertical className="cursor-grab text-stone-400 active:cursor-grabbing" title="Drag to reorder" />
                      <span>#{index + 1}</span>
                    </div>

                    {project.featured && (
                      <div className="absolute top-2 right-2 bg-amber-500 text-black px-2.5 py-1 rounded-lg text-xs font-bold shadow-md">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-stone-100 leading-snug">{project.title}</h3>
                      {project.type && (
                        <span className="text-xs px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 border border-sky-400/20 shrink-0">
                          {project.type}
                        </span>
                      )}
                    </div>
                    <p className="text-stone-400 text-sm mb-4 line-clamp-2 leading-relaxed">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cleanArray(project.technologies).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="bg-sky-500/15 text-sky-300 border border-sky-400/20 px-2 py-0.5 rounded-md text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-xs text-stone-400 mb-2">
                      <span>Category: <strong className="text-stone-300 font-medium">{project.category}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Footer Controls: Order arrows + Actions */}
                <div className="p-4 bg-stone-900/60 border-t border-stone-700/60 flex justify-between items-center">
                  {/* Reorder Buttons */}
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => handleMoveProject(index, -1)}
                      disabled={index === 0}
                      className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 disabled:opacity-30 disabled:hover:bg-stone-800 transition-colors text-xs"
                      title="Move up in order"
                    >
                      <FaArrowUp />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleMoveProject(index, 1)}
                      disabled={index === projects.length - 1}
                      className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 disabled:opacity-30 disabled:hover:bg-stone-800 transition-colors text-xs"
                      title="Move down in order"
                    >
                      <FaArrowDown />
                    </button>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-emerald-400 transition-colors"
                        title="View live"
                      >
                        <FaEye />
                      </a>
                    )}
                    <button
                      onClick={() => handleEdit(project)}
                      className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-sky-400 transition-colors"
                      title="Edit project"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(project._id)}
                      className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-rose-400 transition-colors"
                      title="Delete project"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {projects.length === 0 && (
        <div className="text-center py-16 card-light rounded-2xl border border-stone-700/60 mt-4">
          <FaUpload className="text-5xl text-stone-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-stone-300 mb-1">No projects yet</h3>
          <p className="text-stone-500 text-sm">Add your first project to get started!</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

