# Content workflow

This document describes **how structured lesson features are authored** so catalog and reader JSON stay consistent. For catalog seeding, Supabase mirrors, and `reader_content` sync commands, see [`SEEDING_WORKFLOW.md`](./SEEDING_WORKFLOW.md).

---

## Scripture Chains

Scripture Chains are **cross-reference sequences** shown in the guided lesson reader (`components/lessons/ScriptureChain.tsx`) and surfaced again on **lesson completion** and **study completion** (aggregated across lessons). There is **no plural `scriptureChains` field** on the study model today—chains are authored inside **lesson reader content** and mirrored in **`public.lessons.reader_content`** JSON when lessons load from Supabase.

### Two authoring shapes

1. **Simple—top-level `scriptureChain` on `LessonReaderContent`**  
   A flat array of `{ reference: string }` entries attached to the **Scripture** step of the guided flow.  
   Use this when the chain belongs **directly beside** the main Scripture passage on that step (cross-refs only; no per-verse notes in the schema).

2. **Rich—`scriptureChain` blocks inside `scriptureSupplementBlocks`**  
   Structured blocks (same union as `LessonContentBlock` in `lib/lesson-content-blocks.ts`): type `'scriptureChain'` with either **`verses`** (`reference` + optional `shortNote`) or legacy **`references`** only.  
   Use **`scriptureSupplementBlocks`** when the chain needs:

   - a **title**
   - **short notes** per reference
   - **placement** as its own block below the primary scripture UI (alongside word insights, study insights, etc.)

Authoritative TypeScript for reader shape: **`LessonReaderContent`** in `lib/lesson-content.ts`. Blocks are serialized into **`reader_content`** JSON (repo seed / Supabase) alongside static authoring in `lib/lesson-content.ts`.

### When to use which

| Goal | Use |
|------|-----|
| Chain is part of the **main Scripture step** (compact cross-ref row) | Top-level **`scriptureChain`** |
| Chain needs **title**, **notes**, or **distinct block placement** | **`scriptureSupplementBlocks`** with `type: 'scriptureChain'` |

### Rendering rules

- The UI requires **at least two non-empty references** after normalization. Fewer than two references means **nothing renders** (avoid single-ref “chains”).
- **Lesson completion** and **study overview (study complete)** reuse **`extractScriptureChainsFromLessonContent`** / **`extractScriptureChainsFromStudy`** in `lib/lesson-scripture-chains.ts`, which collect both top-level **`scriptureChain`** and supplement **`scriptureChain`** blocks (plus structured section JSON where applicable). Do not assume a separate schema field for recap.

### Authoring discipline

- **Do not** add one-off Scripture Chain UIs in route `page.tsx` files—always express chains through **`LessonReaderContent`** / **`reader_content`** and the shared **`ScriptureChain`** component.

### Future optional improvement

If the product later needs **study-level chain lists** without scanning every lesson, consider a dedicated **`scriptureChains`** (or similar) **metadata** field—**only** if study-level management cannot be derived from existing lesson JSON. Avoid duplicating chain text in multiple places unless there is a clear maintenance win.
