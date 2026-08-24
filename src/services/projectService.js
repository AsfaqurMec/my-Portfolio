import api from './api';

const appendFormDataFields = (formData, projectData) => {
  Object.keys(projectData).forEach((key) => {
    if (key === 'thumbnail' || key === 'images') return;

    const value = projectData[key];
    if (value === undefined || value === null) return;

    if (Array.isArray(value) || typeof value === 'object') {
      formData.append(key, JSON.stringify(value));
      return;
    }

    formData.append(key, String(value));
  });
};

export const projectService = {
  // Get all projects
  getAllProjects: async () => {
    const response = await api.get('/projects');
    return response.data;
  },

  // Get single project
  getProject: async (id) => {
    const response = await api.get(`/projects/${id}`);
    return response.data;
  },

  // Create new project
  createProject: async (projectData) => {
    const formData = new FormData();
    appendFormDataFields(formData, projectData);

    // Append files
    if (projectData.thumbnail) {
      formData.append('thumbnail', projectData.thumbnail);
    }

    if (projectData.images && projectData.images.length > 0) {
      projectData.images.forEach(image => {
        formData.append('images', image);
      });
    }

    const response = await api.post('/projects', formData);
    return response.data;
  },

  // Update project
  updateProject: async (id, projectData) => {
    const formData = new FormData();
    appendFormDataFields(formData, projectData);

    // Append files
    if (projectData.thumbnail) {
      formData.append('thumbnail', projectData.thumbnail);
    }

    if (projectData.images && projectData.images.length > 0) {
      projectData.images.forEach(image => {
        formData.append('images', image);
      });
    }

    const response = await api.put(`/projects/${id}`, formData);
    return response.data;
  },

  // Delete project
  deleteProject: async (id) => {
    const response = await api.delete(`/projects/${id}`);
    return response.data;
  },

  // Reorder projects
  reorderProjects: async (projectIds) => {
    const response = await api.put('/projects/reorder', { projectIds });
    return response.data;
  },
};


