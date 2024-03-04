import { Project } from '@/models';

export async function fetchProjectsData() {
  const res = await fetch(process.env.API_URL!, {
    headers: {
      apikey: process.env.API_KEY!,
    }
  })

  if (!res.ok) {
    console.log(await res.json());
    return [];
  }

  const data: Project[] = await res.json();
  return data;
}