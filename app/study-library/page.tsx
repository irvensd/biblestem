import { StudyLibraryClient } from '@/app/study-library/StudyLibraryClient'
import { PageIntro } from '@/components/site/PageIntro'

export default function StudyLibraryPage() {
  return (
    <>
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-14 pt-16 md:pb-16 md:pt-20">
        <div className="container-shell">
          <PageIntro
            eyebrow="Library"
            title="Study Library"
            description="Browse every series—filter by path and level, search by title, then open a study to see lessons."
          />
        </div>
      </section>

      <div className="container-shell">
        <StudyLibraryClient />
      </div>
    </>
  )
}
