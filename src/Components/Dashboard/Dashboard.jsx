import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaEdit, FaTrash, FaEye, FaUpload, FaSignOutAlt } from 'react-icons/fa';
import { projectService } from '../../services/projectService';
import { useAuth } from '../../contexts/AuthContext';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [loading, setLoading] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    description: '',
    features: '',
    link: '',
    technologies: '',
    category: 'Full Stack',
    featured: false
  });
  const [thumbnail, setThumbnail] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await projectService.getAllProjects();
      setProjects(data);
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
      const projectData = {
        ...formData,
        thumbnail: thumbnail,
        images: images
      };

      if (editingProject) {
        await projectService.updateProject(editingProject._id, projectData);
      } else {
        await projectService.createProject(projectData);
      }

      setShowForm(false);
      setEditingProject(null);
      setFormData({
        title: '',
        type: '',
        description: '',
        features: '',
        link: '',
        technologies: '',
        category: 'Full Stack',
        featured: false
      });
      setThumbnail(null);
      setImages([]);
      fetchProjects();
    } catch (error) {
      // console.error('Error saving project:', error);
      alert('Error saving project. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      type: project.type,
      description: project.description,
      features: project.features,
      link: project.link,
      technologies: project.technologies.join(', '),
      category: project.category,
      featured: project.featured
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await projectService.deleteProject(id);
        fetchProjects();
      } catch (error) {
        // console.error('Error deleting project:', error);
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
      features: '',
      link: '',
      technologies: '',
      category: 'Full Stack',
      featured: false
    });
    setThumbnail(null);
    setImages([]);
  };

  return (
    <div className="min-h-screen pt-24 section-container pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold text-stone-100">Project Dashboard</h1>
          <div className="flex gap-3">
            <button
              onClick={() => setShowForm(true)}
              className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 font-medium transition-colors"
            >
              <FaPlus /> Add New Project
            </button>
            <button
              onClick={() => {
                logout();
                navigate('/login');
              }}
              className="bg-stone-700 hover:bg-stone-600 text-stone-200 px-5 py-2.5 rounded-xl flex items-center gap-2 font-medium transition-colors"
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="card-light p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-stone-100">
                  {editingProject ? 'Edit Project' : 'Add New Project'}
                </h2>
                <button
                  onClick={resetForm}
                  className="text-stone-400 hover:text-stone-100 text-2xl leading-none"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-2">Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2.5 bg-stone-800/60 border border-stone-600 rounded-xl focus:outline-none focus:border-sky-500 text-stone-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-2">Type *</label>
                  <input
                    type="text"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 bg-stone-800/60 border border-stone-600 rounded-xl focus:outline-none focus:border-sky-500 text-stone-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-2">Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full px-3 py-2.5 bg-stone-800/60 border border-stone-600 rounded-xl focus:outline-none focus:border-sky-500 text-stone-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-2">Features *</label>
                  <textarea
                    name="features"
                    value={formData.features}
                    onChange={handleInputChange}
                    // required
                    rows="3"
                    className="w-full px-3 py-2.5 bg-stone-800/60 border border-stone-600 rounded-xl focus:outline-none focus:border-sky-500 text-stone-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-2">Project Link *</label>
                  <input
                    type="url"
                    name="link"
                    value={formData.link}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2.5 bg-stone-800/60 border border-stone-600 rounded-xl focus:outline-none focus:border-sky-500 text-stone-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-2">Technologies (comma separated)</label>
                  <input
                    type="text"
                    name="technologies"
                    value={formData.technologies}
                    onChange={handleInputChange}
                    placeholder="React, Node.js, MongoDB"
                    className="w-full px-3 py-2.5 bg-stone-800/60 border border-stone-600 rounded-xl focus:outline-none focus:border-sky-500 text-stone-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-2">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 bg-stone-800/60 border border-stone-600 rounded-xl focus:outline-none focus:border-sky-500 text-stone-100"
                  >
                    <option value="Full Stack">Full Stack</option>
                    <option value="WordPress">WordPress</option>
                    <option value="Frontend">Next.js</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-2">Thumbnail Image *</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleThumbnailChange}
                    required={!editingProject}
                    className="w-full px-3 py-2.5 bg-stone-800/60 border border-stone-600 rounded-xl focus:outline-none focus:border-sky-500 text-stone-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-2">Project Images (multiple)</label>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImagesChange}
                    className="w-full px-3 py-2.5 bg-stone-800/60 border border-stone-600 rounded-xl focus:outline-none focus:border-sky-500 text-stone-100"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <label className="text-sm font-medium text-stone-300">Featured Project</label>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-sky-500 hover:bg-sky-600 disabled:bg-stone-600 text-white py-3 rounded-xl font-medium transition-colors"
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project._id} className="card-light overflow-hidden">
              <div className="relative">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                {project.featured && (
                  <div className="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-sky-500/20 text-sky-400 px-2 py-1 rounded-lg text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-6">
                  <span className="text-sm text-gray-400"> Type : {project.type}</span>
                  <span className="text-sm text-gray-400"> Category : {project.category}</span>
                </div>
                  <div className="flex gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300"
                    >
                      <FaEye />
                    </a>
                    <button
                      onClick={() => handleEdit(project)}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(project._id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12">
            <FaUpload className="text-6xl text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No projects yet</h3>
            <p className="text-gray-500">Add your first project to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
