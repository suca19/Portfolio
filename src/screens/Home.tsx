export default function Homepage() {
  return (
    <main className="min-h-screen bg-[#f7f1ea] text-stone-900">
      <section className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-20">
        <div className="max-w-xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-stone-500">
            Creative Full-Stack Developer
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.08em] sm:text-6xl lg:text-8xl">
            Carlos
            <span className="mt-2 block text-stone-500">Sucapuca</span>
          </h1>

          <div className="mt-8 rounded-[2rem] border border-stone-200 bg-white/70 p-6 shadow-[0_30px_80px_rgba(28,25,23,0.08)] backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-stone-500">Who I am</p>
            <p className="mt-4 text-lg leading-relaxed text-stone-700">
              
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/projects"
              className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
            >
              View projects
            </a>
            <a
              href="/contact"
              className="rounded-full border border-stone-300 bg-transparent px-6 py-3 text-sm font-medium text-stone-800 transition hover:border-stone-900"
            >
              Let&apos;s talk
            </a>
          </div>

        </div>

        <div className="relative w-full max-w-xl">
          <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-[#d9b38c]/50 blur-3xl" />
          <div className="absolute -right-6 bottom-8 h-40 w-40 rounded-full bg-[#c78f63]/30 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-stone-200 bg-stone-900 p-6 text-white shadow-[0_40px_100px_rgba(28,25,23,0.18)]">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-stone-300">
              <span>Portfolio</span>
              <span>2026</span>
            </div>

            <div className="mt-8 flex items-center justify-between gap-6">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.25em] text-stone-400">Based in</p>
                <p className="text-2xl font-medium tracking-[-0.06em]">Dublin, Ireland</p>
              </div>
              <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-[radial-gradient(circle_at_top,_rgba(217,179,140,0.9),_rgba(85,62,41,0.95)_60%,_rgba(28,25,23,1)_100%)] text-5xl font-semibold tracking-[-0.08em] text-white">
                CS
              </div>
            </div>

            <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-stone-400">Focus</p>
              <p className="mt-3 text-2xl font-medium leading-tight tracking-[-0.06em]">
                Problem solving.<br />
                Smart code.<br />
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}