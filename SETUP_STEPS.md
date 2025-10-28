# BibleStem - Supabase Setup Steps

## ✅ Completed
- Supabase package installed
- Supabase client configured
- Environment variables set up
- Database schema created

## 🔄 Next Steps

### 1. Run Database Schema
You need to run the SQL schema in your Supabase dashboard:

1. Go to your Supabase project: https://supabase.com/dashboard/project/gquebqxkjuearohkmqwc
2. Click on **SQL Editor** in the left sidebar
3. Click **New Query**
4. Open the file `src/lib/supabase.sql` from this project
5. Copy the entire SQL script
6. Paste it into the SQL Editor
7. Click **Run** (or press Cmd/Ctrl + Enter)
8. Verify tables were created by going to **Table Editor**

### 2. Test the Connection
The app is now configured to connect to Supabase. Test it by:

1. Restart your dev server: `npm run dev`
2. Check the browser console for any connection errors
3. Try to sign in - auth should now use Supabase

### 3. Migrate Data (Optional)
If you have data in `src/data/studies.ts` that you want to migrate to Supabase:

- Create an admin script to import studies and lessons
- Use Supabase dashboard to insert data manually
- Or build a content management interface

### 4. Next Steps
After database is set up, you'll want to:

1. Connect auth store to Supabase Auth
2. Update progress store to use Supabase
3. Update notes store to use Supabase  
4. Create content management for adding studies
5. Start building actual Bible study content

## Current Status
- ✅ Supabase project created
- ✅ API credentials configured
- ⏳ Database schema needs to be run
- ⏳ App ready to connect once schema is run

