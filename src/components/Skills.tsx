const skills = [
"React",
"TypeScript",
"JavaScript",
"Java",
"Next.js",
"HTML",
"CSS",
"OOP",
"Git",
"GitHub",
"CI/CD",
"Testing",
"Playwright",
"SQL",
"Jira",
"Slack",
];
export default function Skills() {
return (
    <section id="skills" className="border-t border-slate-200 bg-white reveal">
    <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-bold tracking-tight text-slate-950">
        Skills
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((skill) => (
            <div
            key={skill}
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
            >
            {skill}
            </div>
        ))}
        </div>
    </div>
    </section>
);
}