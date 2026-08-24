import { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaExternalLinkAlt, FaLightbulb } from 'react-icons/fa';
import { projectService } from '../../../services/projectService';
import { cleanArray } from '../../../utils/cleanTags';
import ProjectImageSlider from './ProjectImageSlider';

const buildSlideImages = (project) => {
  if (!project) return [];
  const urls = [];
  if (project.thumbnail) urls.push(project.thumbnail);
  for (const img of project.images || []) {
    if (img && !urls.includes(img)) urls.push(img);
  }
  return urls;
};

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

  const slideImages = useMemo(() => buildSlideImages(project), [project]);

  const displayFeatures = useMemo(() => cleanArray(project?.features), [project?.features]);
  const displayChallenges = useMemo(() => cleanArray(project?.challenges), [project?.challenges]);
  const displayTechnologies = useMemo(() => cleanArray(project?.technologies), [project?.technologies]);

  const hasFeatures = displayFeatures.length > 0;
  const hasChallenges = displayChallenges.length > 0;
  const hasTechnologies = displayTechnologies.length > 0;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <div
            className="animate-spin rounded-full h-12 w-12 border-2 border-violet-400 border-t-transparent mx-auto mb-4"
            aria-hidden
          />
          <p className="text-slate-400">Loading project...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-24">
        <div className="text-center card-light p-10 max-w-md">
          <p className="text-slate-300 mb-6">{error || 'Project not found'}</p>
          <Link
            to="/project"
            className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-medium rounded-xl transition-colors"
          >
            <FaArrowLeft className="w-3.5 h-3.5" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 section-container">
      <div className="max-w-5xl mx-auto">
        <nav className="mb-8 text-sm text-slate-400" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link to="/project" className="hover:text-violet-300 transition-colors">
                Projects
              </Link>
            </li>
            <li aria-hidden className="text-slate-600">
              /
            </li>
            <li className="text-slate-200 font-medium truncate max-w-[min(100%,280px)]">{project.title}</li>
          </ol>
        </nav>

        <header className="mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="space-y-4">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-50 tracking-tight">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2">
              {project.type && (
                <span className="badge-pill border border-violet-400/25">{project.type}</span>
              )}
              {project.featured && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-amber-500/15 text-amber-200 border border-amber-400/25">
                  Featured
                </span>
              )}
              {project.category && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-slate-300 bg-white/5 border border-white/10">
                  {project.category}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              to="/project"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium text-slate-200 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <FaArrowLeft className="w-3.5 h-3.5" />
              All projects
            </Link>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium text-white bg-violet-600 hover:bg-violet-500 shadow-lg shadow-violet-900/30 transition-colors"
              >
                Visit live
                <FaExternalLinkAlt className="w-3.5 h-3.5 opacity-90" />
              </a>
            )}
          </div>
        </header>

        {slideImages.length > 0 ? (
          <div className="mb-12 animate-fade-up">
            <ProjectImageSlider images={slideImages} title={project.title} />
          </div>
        ) : (
          <div className="mb-12 rounded-2xl border border-dashed border-white/15 bg-white/[0.03] aspect-[21/9] max-h-64 flex items-center justify-center text-slate-500 text-sm">
            No preview images for this project
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-8 space-y-8">
            <section className="card-light p-6 sm:p-8">
              <h2 className="font-heading text-xl sm:text-2xl font-semibold text-slate-50 mb-4">Overview</h2>
              <p className="text-slate-300/95 leading-relaxed whitespace-pre-line text-[15px] sm:text-base">
                {project.description}
              </p>
            </section>

            {hasFeatures && (
              <section className="card-light p-6 sm:p-8">
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-slate-50 mb-5">Key Features</h2>
                <ul className="space-y-3">
                  {displayFeatures.map((feat, i) => (
                    <li key={i} className="flex gap-3 text-slate-300">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.6)]"
                        aria-hidden
                      />
                      <span className="leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {hasChallenges && (
              <section className="card-light p-6 sm:p-8 border border-amber-500/20 bg-gradient-to-br from-stone-900/90 to-stone-900/50">
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-slate-50 mb-5 flex items-center gap-2">
                  <FaLightbulb className="text-amber-400 text-lg" /> Challenges & Learn
                </h2>
                <ul className="space-y-3">
                  {displayChallenges.map((ch, i) => (
                    <li key={i} className="flex gap-3 text-slate-300">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]"
                        aria-hidden
                      />
                      <span className="leading-relaxed">{ch}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 self-start">
            {hasTechnologies && (
              <div className="card-light p-6">
                <h3 className="font-heading text-lg font-semibold text-slate-50 mb-4">Tech stack</h3>
                <div className="flex flex-wrap gap-2">
                  {displayTechnologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg text-sm bg-violet-500/15 text-violet-200 border border-violet-400/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.link && (
              <div className="card-light p-6">
                <h3 className="font-heading text-lg font-semibold text-slate-50 mb-3">Project link</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-violet-300 hover:text-violet-200 break-all underline-offset-2 hover:underline transition-colors"
                >
                  {project.link}
                </a>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

