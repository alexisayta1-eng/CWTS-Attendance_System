// supabase-config.js
const SUPABASE_URL = "https://ipdxlltrgptihldccgkz.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwZHhsbHRyZ3B0aWhsZGNjZ2t6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0MzY0OTMsImV4cCI6MjA5MTAxMjQ5M30.WUmpLtBGBTMHZkCsA5CPrFjaaGhn6yFE63vYw8ZUbXY".trim();

// Use the global 'supabase' object provided by the CDN
if (typeof supabase === 'undefined') {
    console.error("Supabase library not loaded! Check your internet or script tag.");
} else {
    // Initialize the Client singleton
    const client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    
    // Assign to a global variable that WON'T conflict with the 'supabase' library
    window.supabaseClient = client;
    window.supabase = client; // Backup for older code, but we prefer supabaseClient
    
    console.log("Supabase Client initialized! 🛡️");
}
