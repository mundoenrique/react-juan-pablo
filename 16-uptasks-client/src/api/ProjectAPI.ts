import { isAxiosError } from 'axios';
import { dashboardProjectSchema, editProjectSchema, Project, ProjectFormData } from '../types';
import api from '@/lib/axios';

export async function createProject(formData: ProjectFormData) {
  try {
    const { data } = await api.post('/projects', formData);

    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function getProjects() {
  try {
    const { data } = await api.get('/projects');
    const response = dashboardProjectSchema.safeParse(data);

    if (response.success) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function getProjectById(id: Project['_id']) {
  try {
    const { data } = await api(`/projects/${id}`);
    const response = editProjectSchema.safeParse(data);

    if (response.success) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
