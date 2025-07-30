import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cervvtyxqpxhjvsmudyz.supabase.co'; // Replace with your real Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlcnZ2dHl4cXB4aGp2c211ZHl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2NTQ5OTMsImV4cCI6MjA2OTIzMDk5M30.i170i3blnA-qxH7sM4ihCer87ZESckaWGg7kT0n1jjY';

export const supabase = createClient(supabaseUrl, supabaseKey);
