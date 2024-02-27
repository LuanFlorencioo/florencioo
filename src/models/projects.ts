export type Project = {
  id: number;
  created_at: string;
  name: string;
  short_description: string;
  descriptions: string[];
  apprenticeship: string[];
  tags: string[];
  logo: string;
  image_cover: string;
  images: string[];
  link_app?: string;
  link_repo?: string;
  link_page: string;
  is_active: boolean;
}