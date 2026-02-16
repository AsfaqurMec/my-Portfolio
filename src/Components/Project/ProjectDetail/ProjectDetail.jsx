import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectService } from '../../../services/projectService';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const data = await projectService.getProject(id);
        setProject(data);
      } catch (e) {
        setError('Failed to load project');
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

 //console.log(project);
  

  if (loading) {
    return (
      <div className="bg-[#081506] min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto mb-4"></div>
          <p className="text-lg">Loading project...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="bg-[#081506] min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <p className="text-lg mb-6">{error || 'Project not found'}</p>
          <Link to="/project" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg">Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#081506] min-h-screen pt-28 px-5 md:px-10 pb-14 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">{project.title}</h1>
            <div className="flex flex-wrap items-center gap-2">
              {project.type && (
                <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                  {project.type}
                </span>
              )}
              {project.featured && (
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs uppercase tracking-wider">Featured</span>
              )}
            </div>
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 py-3 bg-sky-600 hover:bg-sky-700 rounded-lg"
            >
              Visit Project
            </a>
          )}
        </div>

        {/* Thumbnail */}
        {project.thumbnail && (
          <div className="mb-10">
            <img src={project.thumbnail} alt={project.title} className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg shadow-[#233d20]" />
          </div>
        )}

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Description and Gallery */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#0a2d149a] rounded-xl p-6 shadow-md shadow-[#014047]">
              <h2 className="text-2xl font-semibold mb-3">Overview</h2>
              <p className="text-gray-200 leading-7 whitespace-pre-line">{project.description}</p>
            </div>
           
           { project.features != [] > 0 && (
            <div className="bg-[#0a2d149a] rounded-xl p-6 shadow-md shadow-[#014047]">
              <h2 className="text-2xl font-semibold mb-3">Features</h2>
               <div className="flex flex-col gap-2">
              {(project.features || []).map((t, i) => (
                  <span key={i} className="text-white">.{t}</span>
                ))}
                </div>
            </div>
           )}
            {project.images && project.images.length > 0 && (
              <div className="bg-[#0a2d149a] rounded-xl p-6 shadow-md shadow-[#014047]">
                <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.images.map((img, idx) => (
                    <img key={idx} src={img} alt={`screenshot-${idx}`} className="h-32 md:h-40 w-full object-cover rounded-lg" />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Meta */}
          <div className="space-y-6">
           {project.technologies != [] && ( 
            <div className="bg-[#06230e9a] rounded-xl p-6 shadow-md shadow-[#014047]">
              <h3 className="text-xl font-semibold mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {(project.technologies || []).map((t, i) => (
                  <span key={i} className="bg-emerald-700 text-white px-3 py-1 rounded-md text-sm">{t}</span>
                ))}
              </div>
            </div>
           )}

            <div className="bg-[#06230e9a] rounded-xl p-6 shadow-md shadow-[#014047]">
              <h3 className="text-xl font-semibold mb-2">Links</h3>
              <div className="flex flex-col gap-2">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-sky-400 hover:text-sky-300 break-all">
                    {project.link}
                  </a>
                )}
              </div>
            </div>

            <div className="bg-[#06230e9a] rounded-xl p-6 shadow-md shadow-[#014047]">
              <h3 className="text-xl font-semibold mb-2">Actions</h3>
              <Link to="/project" className="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-md">Back to Projects</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;





