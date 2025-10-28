# Supabase Setup Guide for BibleStem

## Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Fill in the project details:
   - **Name**: biblestem
   - **Database Password**: (choose a strong password)
   - **Region**: Choose closest region
   - **Pricing Plan**: Free tier is fine for development

## Step 2: Get Your Credentials

Once your project is created:

1. Go to **Settings** → **API**
2. Copy these values:
   - **Project URL** → `VITE_SUPABASE_URL`
   - **anon public key** → `VITE_SUPABASE_ANON_KEY`

## Step 3: Run Database Schema

1. In Supabase dashboard, go to **SQL Editor**
2. Open the file `src/lib/supabase.sql` from this project
3. Copy and paste the entire SQL into the editor
4. Click **Run**
5. Verify tables were created in **Table Editor**

## Step 4: Configure Environment Variables

1. Create a `.env` file in the project root (use `.env.example` as template)
2. Add your Supabase credentials:

```env
VITE_SUPABASE_URL=your-project-url-here
VITE_SUPABASE_ANON_KEY=your-anon-key-here
VITE_IS_MOCK_MODE=false
```

## Step 5: Test Connection

Run the development server and check the console for any connection errors.

## Database Schema Overview

### Tables Created:
- **users** - User profiles and settings
- **studies** - Bible study metadata
- **lessons** - Individual lessons for each study
- **study_progress** - User progress tracking
- **notes** - User notes and reflections

### Security:
- Row Level Security (RLS) enabled on all tables
- Users can only access their own data
- Studies and lessons are publicly readable
- Progress and notes are private to each user

## Next Steps:

1. ✅ Create Supabase project
2. ✅ Run SQL schema
3. ⏳ Update environment variables
4. ⏳ Test the connection
5. ⏳ Migrate data from mock mode
6. ⏳ Build content management interface

