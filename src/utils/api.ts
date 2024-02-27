import { createClient } from '@supabase/supabase-js';

export const api = createClient(
  process.env.API_URL!,
  process.env.API_KEY!,
)
