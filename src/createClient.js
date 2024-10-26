import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tbnhzdbozhldfsjmaeap.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRibmh6ZGJvemhsZGZzam1hZWFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc5Mjg3NDgsImV4cCI6MjA0MzUwNDc0OH0.JS6d1fUmFP0t2lxYILbwfEOawpg0PlmIOOaL0axQKRU'

export const supabase = createClient(supabaseUrl, supabaseKey)
