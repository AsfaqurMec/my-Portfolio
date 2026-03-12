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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-indigo-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-stone-500">Loading project...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-stone-600 mb-6">{error || 'Project not found'}</p>
          <Link to="/project" className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors">Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 section-container pb-14">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3">{project.title}</h1>
            <div className="flex flex-wrap items-center gap-2">
              {project.type && (
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
                  {project.type}
                </span>
              )}
              {project.featured && (
                <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">Featured</span>
              )}
            </div>
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors"
            >
              Visit Project
            </a>
          )}
        </div>

        {project.thumbnail && (
          <div className="mb-10 rounded-2xl overflow-hidden border border-stone-200">
            <img src={project.thumbnail} alt={project.title} className="w-full h-64 md:h-96 object-cover" />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="card-light p-6">
              <h2 className="text-xl font-semibold text-stone-900 mb-3">Overview</h2>
              <p className="text-stone-500 leading-7 whitespace-pre-line">{project.description}</p>
            </div>
           { project.features != [] > 0 && (
            <div className="card-light p-6">
              <h2 className="text-xl font-semibold text-stone-900 mb-3">Features</h2>
               <div className="flex flex-col gap-2">
              {(project.features || []).map((t, i) => (
                  <span key={i} className="text-stone-500">.{t}</span>
                ))}
                </div>
            </div>
           )}
            {project.images && project.images.length > 0 && (
              <div className="card-light p-6">
                <h2 className="text-xl font-semibold text-stone-900 mb-4">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.images.map((img, idx) => (
                    <img key={idx} src={img} alt={`screenshot-${idx}`} className="h-32 md:h-40 w-full object-cover rounded-lg" />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
           {project.technologies != [] && ( 
            <div className="card-light p-6">
              <h3 className="text-lg font-semibold text-stone-900 mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {(project.technologies || []).map((t, i) => (
                  <span key={i} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-lg text-sm">{t}</span>
                ))}
              </div>
            </div>
           )}

            <div className="card-light p-6">
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Links</h3>
              <div className="flex flex-col gap-2">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-700 break-all text-sm">
                    {project.link}
                  </a>
                )}
              </div>
            </div>

            <div className="card-light p-6">
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Actions</h3>
              <Link to="/project" className="inline-block px-4 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 font-medium rounded-xl transition-colors">Back to Projects</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;





