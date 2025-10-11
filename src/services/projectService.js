import api from './api';

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
    
    // Append text fields
    Object.keys(projectData).forEach(key => {
      if (key !== 'thumbnail' && key !== 'images') {
        formData.append(key, projectData[key]);
      }
    });

    // Append files
    if (projectData.thumbnail) {
      formData.append('thumbnail', projectData.thumbnail);
    }

    if (projectData.images && projectData.images.length > 0) {
      projectData.images.forEach(image => {
        formData.append('images', image);
      });
    }

    const response = await api.post('/projects', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Update project
  updateProject: async (id, projectData) => {
    const formData = new FormData();
    
    // Append text fields
    Object.keys(projectData).forEach(key => {
      if (key !== 'thumbnail' && key !== 'images') {
        formData.append(key, projectData[key]);
      }
    });

    // Append files
    if (projectData.thumbnail) {
      formData.append('thumbnail', projectData.thumbnail);
    }

    if (projectData.images && projectData.images.length > 0) {
      projectData.images.forEach(image => {
        formData.append('images', image);
      });
    }

    const response = await api.put(`/projects/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Delete project
  deleteProject: async (id) => {
    const response = await api.delete(`/projects/${id}`);
    return response.data;
  },
};

