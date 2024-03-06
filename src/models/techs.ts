export type TechCategory = 'front-end' | 'back-end' | 'database' | 'tool' | 'testing' | 'version-control';

export type TechCategoryTranslated = 'Front-End' | 'Back-End' | 'Banco de Dados' | 'Ferramentas' | 'Testes' | 'Controle de Código';

export type Tech = {
  label: string;
  pathname: string;
  categories: TechCategory[];
  tags: string[];
}