type ContactLink = {
    label: string
    value: string
    href: string
    image: string
    description: string
}

const contactLinks: ContactLink[] = [
    {
        label: 'GitHub',
        value: 'suca19',
        href: 'https://github.com/suca19',
        image: 'https://avatars.githubusercontent.com/u/120258512?v=4',
        description: 'Source code, project updates, and ongoing development work.',
    },
    {
        label: 'LinkedIn',
        value: 'carlos-sucapuca',
        href: 'https://www.linkedin.com/in/carlos-sucapuca',
        image: 'https://ui-avatars.com/api/?name=Carlos+Sucapuca&background=0A66C2&color=fff&size=256',
        description: 'Professional profile, experience, and networking updates.',
    },
]

export default function Contact() {
    return (
        <main className="min-h-screen bg-[#f7f1ea] text-stone-900">
            <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
                <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                    <div className="max-w-3xl">
                        <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-stone-500">
                            Contact
                        </p>
                        <h1 className="text-5xl font-semibold tracking-[-0.08em] sm:text-6xl lg:text-8xl">
                            Let&apos;s talk
                        </h1>
                    </div>

                    {/*<div className="rounded-[2rem] border border-stone-200 bg-white/75 p-6 shadow-[0_24px_70px_rgba(28,25,23,0.08)] backdrop-blur-sm">
                        <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Quick note</p>
                        <p className="mt-3 text-sm leading-6 text-stone-600">
                            emotive message goes here.
                        </p>
                    </div>*/}
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {contactLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_24px_70px_rgba(28,25,23,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(28,25,23,0.14)]"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex h-20 w-20 shrink-0 overflow-hidden rounded-[1.5rem] border border-stone-200 bg-stone-100">
                                    <img
                                        src={link.image}
                                        alt={`${link.label} profile`}
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <p className="text-xs uppercase tracking-[0.3em] text-stone-400">{link.label}</p>
                                    <p className="mt-2 text-2xl font-semibold tracking-[-0.06em] text-stone-900">
                                        {link.value}
                                    </p>
                                    <p className="mt-2 text-sm leading-6 text-stone-600">
                                        {link.description}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}

                    <article className="md:col-span-2 flex min-h-[20rem] flex-col justify-between rounded-[2rem] border border-dashed border-stone-300 bg-white/60 p-6 shadow-[0_24px_70px_rgba(28,25,23,0.05)]">
                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-stone-400">About me</p>
                            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.06em] text-stone-900">
                                Full-Stack Developer
                            </h2>
                            <p>
                                I am open to new opportunities and collaborations.
                            </p>
                            <p>
                                Feel free to check my Github profile or connect with me on LinkedIn. I look forward to hearing from you!
                            </p>
                        </div>

                        <div className="mt-8 grid gap-4 sm:grid-cols-3">
                            <div className="rounded-[1.5rem] border border-stone-200 bg-stone-900 p-5 text-white">
                                <p className="text-xs uppercase tracking-[0.3em] text-stone-400">Location</p>
                                <p className="mt-3 text-lg font-medium">Dublin</p>
                            </div>
                            <div className="rounded-[1.5rem] border border-stone-200 bg-white p-5">
                                <p className="text-xs uppercase tracking-[0.3em] text-stone-400">Availability</p>
                                <p className="mt-3 text-lg font-medium text-stone-900">Open for work</p>
                            </div>
                            <div className="rounded-[1.5rem] border border-stone-200 bg-white p-5">
                                <p className="text-xs uppercase tracking-[0.3em] text-stone-400">Response</p>
                                <p className="mt-3 text-lg font-medium text-stone-900">Usually within 24h</p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    )
}