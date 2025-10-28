# Import Study Instructions

## Quick Import Steps

1. **Go to Supabase SQL Editor**
   - Open: https://supabase.com/dashboard/project/gquebqxkjuearohkmqwc
   - Click on **SQL Editor** in the left sidebar

2. **Run the Import Script**
   - Copy the entire contents of `src/lib/import-study.sql`
   - Paste into the SQL Editor
   - Click **Run** (or press Cmd/Ctrl + Enter)

3. **Verify Import**
   - Go to **Table Editor** → **studies**
   - You should see "How to Study the Bible"
   - Go to **Table Editor** → **lessons**
   - You should see 2 lessons (htsb-1 and htsb-2)

## What Gets Imported

- **Study**: "How to Study the Bible: The Preparation"
- **2 Lessons**: 
  1. Lesson 1: Prayer (Psalm 119:18)
  2. Lesson 2: Maturity (1 Corinthians 13:11)

## Next Steps After Import

After importing, you can:
1. Connect the progress store to track user progress
2. Connect the notes store to save user notes
3. Create more lessons for the remaining 4 parts
4. Build out additional studies

## SQL Script Location

The import script is located at:
`src/lib/import-study.sql`

