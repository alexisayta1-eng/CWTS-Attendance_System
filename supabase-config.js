// supabase-config.js

const SUPABASE_URL = "https://ipdxlltrgptihldccgkz.supabase.co";
const SUPABASE_ANON_KEY = "PASTE_YOUR_ANON_KEY_HERE";

// Initialize Supabase Client
const { createClient } = window.supabase;
const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Global access for shared logic 
window.supabase = _supabase;

console.log("Supabase initialized successfully! 🛡️");
