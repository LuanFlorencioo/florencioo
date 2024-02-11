import { create } from 'zustand';
import { Tech, TechCategory, techs } from '@/data';

type TechType = 'Front-End' | 'Back-End' | 'Banco de Dados' | 'Testes' | 'Controle de Código' | 'Ferramentas';

type Data = {
  category: TechCategory;
  type: TechType;
}

const data: Data[] = [
  {
    category: 'front-end',
    type: 'Front-End',
  },
  {
    category: 'back-end',
    type: 'Back-End',
  },
  {
    category: 'database',
    type: 'Banco de Dados',
  },
  {
    category: 'testing',
    type: 'Testes',
  },
  {
    category: 'version-control',
    type: 'Controle de Código',
  },
  {
    category: 'tool',
    type: 'Ferramentas',
  },
]

type TechData = {
  type: TechType;
  techs: Tech[];
}

type Actions = {
  filter: (value: string) => void;
  clearFilter: () => void;
  setInputValue: (value: string) => void;
}

type States = {
  data: TechData[];
  inputValue: string;
}

type Store = Actions & States;

const techsInVisualizer: TechData[] = data.map(({ category, type }) => {
  return {
    type,
    techs: techs.filter(tech => tech.categories.includes(category))
  }
})

export const useTechsFilterStore = create<Store>()((set) => ({
  data: techsInVisualizer,
  filter: (value: string) => set(() => ({
    data: techsInVisualizer.map(techInVisualizer => {
      return {
        ...techInVisualizer,
        techs: techInVisualizer.techs.filter(({ label, tags }) => {
          const isMatchLabel = label.toLowerCase().includes(value);
          const isMatchTag = tags.includes(value);
          return isMatchLabel || isMatchTag;
        })
      }
    })
  })),
  clearFilter: () => set(() => ({ data: techsInVisualizer })),
  inputValue: '',
  setInputValue: (value: string) => set(() => ({ inputValue: value })),
}))