// src/supabase.js (atau path kamu sendiri)

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Initialize Supabase client
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Optional: test connection
supabase
  .from('users')
  .select('*')
  .then((response) => {
    console.log('Supabase data:', response.data);
  })
  .catch((error) => {
    console.error('Supabase error:', error);
  });

// ✅ export supaya bisa digunakan di komponen lain
export default supabase;
