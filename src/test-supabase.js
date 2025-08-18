// Direct Supabase test - add this script to test connection
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lvwejgdutohwyyqhiqth.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2d2VqZ2R1dG9od3l5cWhpcXRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NzY0MDEsImV4cCI6MjA1MDA1MjQwMX0.HFfhLQNDwu7iT-LMDcJqrDZEyBfCG4e3bCKkJN0oZwI'

const supabase = createClient(supabaseUrl, supabaseKey)

console.log('=== DIRECT SUPABASE TEST ===')
console.log('Supabase client:', supabase)

// Test signup
async function testSignup() {
  console.log('Testing Supabase signup...')
  
  const { data, error } = await supabase.auth.signUp({
    email: 'test@example.com',
    password: 'testpassword123',
    options: {
      data: {
        name: 'Test User'
      }
    }
  })
  
  console.log('Signup result:', { data, error })
}

// Run test
testSignup()

export { testSignup }
