import { Link } from "react-router-dom";

const base = import.meta.env.BASE_URL;

type TechItem = {
  name: string;
  image?: string;
  label?: string;
};

type TechGroup = {
  title: string;
  description: string;
  items: TechItem[];
};

const techGroups: TechGroup[] = [
  {
    title: "Frontend",
    description: "Interfaces, responsive layouts, and clear user experiences.",
    items: [
      { name: "React", image: `${base}frontend/react.png` },
      { name: "TypeScript", image: `${base}frontend/typescript.png` },
      { name: "JavaScript", image: `${base}frontend/JavaScript.png` },
      { name: "HTML5", image: `${base}frontend/html.jpeg` },
      { name: "CSS3", image: `${base}frontend/css.png` },
      { name: "Tailwind CSS", image: `${base}frontend/tailwind.png` },
      { name: "React Native", image: `${base}frontend/react-native.png` },
    ],
  },
  {
    title: "Backend",
    description: "APIs, database-driven features, and application logic.",
    items: [
      { name: "Node.js", image: `${base}backend/nodejs.png` },
      { name: "PHP", image: `${base}backend/php.png` },
      { name: "Laravel", image: `${base}backend/laravel.png` },
      { name: "Django", image: `${base}backend/django.png` },
      { name: "Java", image: `${base}backend/java.png` },
      { name: "Spring", image: `${base}backend/spring.jpg` },
    ],
  },
  {
    title: "Developer Tools",
    description:
      "Version control, containers, and working in Linux-based environments.",
    items: [
      { name: "Git", image: `${base}tools/git.png` },
      { name: "Docker", image: `${base}tools/docker.png` },
      { name: "Linux", image: `${base}tools/linux.jpeg` },
      { name: "Cisco", image: `${base}tools/cisco.png` },
      { name: "CI/CD", image: `${base}tools/ci-cd.jpeg` },
    ],
  },
  {
    title: "AI & Workflow",
    description:
      "AI-assisted development, prompt workflows, and productivity tools.",
    items: [
      { name: "GitHub Copilot", image: `${base}ai/github-copilot.jpeg` },
      { name: "Claude Code", image: `${base}ai/claude.png` },
      { name: "MCP", image: `${base}ai/mcp.png` },
      { name: "Prompt Engineering", image: `${base}ai/prompt-engineering.png` },
    ],
  },
];

export default function Homepage() {
  return (
    <main className="min-h-screen bg-[#f7f1ea] text-stone-900">
      <section className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-20">
        <div className="max-w-xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-stone-500">
            Junior Full-Stack Developer
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.08em] sm:text-6xl lg:text-8xl">
            Carlos
            <span className="mt-2 block text-stone-500">Sucapuca</span>
          </h1>

          <div className="mt-8 rounded-[2rem] border border-stone-200 bg-white/70 p-6 shadow-[0_30px_80px_rgba(28,25,23,0.08)] backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
              Who I am
            </p>
            <p className="mt-4 text-lg leading-relaxed text-stone-700">
              I am a final-year Computing student and Junior Full-Stack
              Developer with hands-on experience building web and mobile
              applications. I focus on scalable, maintainable software,
              database-driven features, and collaborative delivery. I also work
              with AI-assisted development tools and agentic workflows to
              improve speed, quality, and implementation clarity.
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-stone-500">
              Full-stack development • APIs • Databases • Collaboration •
              AI-assisted workflows
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
            >
              View projects
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-stone-300 bg-transparent px-6 py-3 text-sm font-medium text-stone-800 transition hover:border-stone-900"
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>

        <div className="relative w-full max-w-xl">
          <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-[#d9b38c]/50 blur-3xl" />
          <div className="absolute -right-6 bottom-8 h-40 w-40 rounded-full bg-[#c78f63]/30 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-stone-200 bg-stone-900 p-6 text-white shadow-[0_40px_100px_rgba(28,25,23,0.18)]">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-stone-300">
              <span>Portfolio</span>
            </div>

            <div className="mt-8 flex items-center justify-between gap-6">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.25em] text-stone-400">
                  Based in
                </p>
                <p className="text-2xl font-medium tracking-[-0.06em]">
                  Ireland, Dublin
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
                Focus on
              </p>
              <p className="mt-3 text-2xl font-medium leading-tight tracking-[-0.06em]">
                Clean systems
                <br />
                Practical delivery
                <br />
                Reliable software
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-12 lg:pb-24">
        <div className="rounded-[2.5rem] border border-stone-200 bg-white/65 p-8 shadow-[0_24px_70px_rgba(28,25,23,0.08)] backdrop-blur-sm lg:p-10">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-stone-500">
              Technology Stack
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-stone-900 sm:text-4xl">
              Tools I work with
            </h2>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {techGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_14px_30px_rgba(28,25,23,0.05)]"
              >
                <div className="max-w-sm">
                  <p className="text-xs font-medium uppercase tracking-[0.3em] text-stone-400">
                    {group.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-stone-600">
                    {group.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-3 rounded-full border border-stone-200 bg-stone-50 px-4 py-2"
                    >
                      <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-5 w-5 object-contain"
                          />
                        ) : (
                          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                            {item.label}
                          </span>
                        )}
                      </div>
                      <span className="text-sm font-medium text-stone-800">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
