import { api } from '@/utils';

export const getAPIData = async (relation: string) => {
  const { data } = await api.from(relation).select();
  return data;
}