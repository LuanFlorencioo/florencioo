import { create } from 'zustand';
import { techs } from '@/data';
import { Tech, TechCategory, TechCategoryTranslated } from '@/models';

type Data = {
  category: TechCategory;
  categoryTranslated: TechCategoryTranslated;
}

const data: Data[] = [
  {
    category: 'front-end',
    categoryTranslated: 'Front-End',
  },
  {
    category: 'back-end',
    categoryTranslated: 'Back-End',
  },
  {
    category: 'database',
    categoryTranslated: 'Banco de Dados',
  },
  {
    category: 'testing',
    categoryTranslated: 'Testes',
  },
  {
    category: 'version-control',
    categoryTranslated: 'Controle de Código',
  },
  {
    category: 'tool',
    categoryTranslated: 'Ferramentas',
  },
]

type TechData = {
  type: TechCategoryTranslated;
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

const techsInVisualizer: TechData[] = data.map(({ category, categoryTranslated }) => {
  return {
    type: categoryTranslated,
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