import { projects } from "@/data/projects";

export default function Projects() {
return (
    <section id="projects" className="border-t border-slate-200 bg-slate-50">
    <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="max-w-2xl">
        <h2 className="text-2xl font-bold tracking-tight text-slate-950">
            Projects
        </h2>
        <p className="mt-4 text-slate-600">
            Selected projects that demonstrate technical understanding, structure, and ability
            to work with modern development tools.
        </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
            <article
            key={project.title}
            className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
            <h3 className="text-lg font-semibold text-slate-950">
                {project.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
                {project.description}
            </p>

            <div className="mt-auto pt-5">
                <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                    <span
                    key={tech}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {tech}
                    </span>
                ))}
                </div>
                <a
                href={project.github}
                className="mt-6 inline-block text-sm font-medium text-slate-900 hover:underline"
                >
                GitHub →
                </a>
            </div>
            </article>
        ))}
        </div>
    </div>
    </section>
);
}