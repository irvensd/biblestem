# Database Setup Guide

## Quick Steps to Get Your Database Running:

### Step 1: Run the SQL Schema
1. Go to: https://supabase.com/dashboard/project/gquebqxkjuearohkmqwc
2. Click **SQL Editor** in left sidebar  
3. Click **New Query**
4. Copy and paste the entire contents of `src/lib/supabase.sql`
5. Click **Run** (or press Cmd/Ctrl + Enter)

### Step 2: Verify Tables
Go to **Table Editor** in Supabase and you should see:
- ✅ users
- ✅ studies  
- ✅ lessons
- ✅ study_progress
- ✅ notes

### Step 3: Test the App
1. Refresh your browser (the dev server should be running)
2. Check console for connection status
3. The app will now use Supabase instead of mock mode!

## What This Database Does:

### **users** table
- Stores user profiles
- Linked to Supabase Auth
- Plan (free/premium) status

### **studies** table  
- All Bible studies available
- Metadata, tags, difficulty
- Publicly readable

### **lessons** table
- Individual lessons for each study
- Includes full lesson content (JSON)
- Publicly readable

### **study_progress** table
- Tracks which lessons user completed
- Current position in study
- Time spent, challenges accepted
- Private to each user (RLS)

### **notes** table
- User notes and reflections
- Organized by study and lesson
- Private to each user (RLS)

## Security (Row Level Security):
All tables have RLS enabled:
- Studies & Lessons: Publicly readable
- Progress & Notes: Private to each user
- Users: Can only view/edit own profile

## Next Steps After Database is Setup:
1. Connect stores to Supabase
2. Import initial study data
3. Build content management
4. Create actual Bible studies

