import { create } from 'zustand';
import { compareAsc } from 'date-fns';
import { Project } from '@/models';

type States = {
  projects: Project[] | null;
  hasProjects: boolean;
}

type Actions = {
  updateState: (data: Project[]) => void;
}

type Store = States & Actions;

export const projectsStore = create<Store>()((set) => ({
  projects: null,
  hasProjects: false,
  updateState: (data: Project[]) => set({
    projects: data.sort((a, b) => compareAsc(a.created_at, b.created_at)),
    hasProjects: true
  }),
}))

export const useProjectsStore = () => projectsStore.getState();
