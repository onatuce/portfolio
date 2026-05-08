export default function Hero() {
return (
  <section className="mx-auto max-w-5xl px-6 py-24 md:py-32 fade-in">
  <div className="max-w-3xl">
        <p className="mb-4 text-sm font-medium text-slate-500">
        IT Student & Junior Software Engineer
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
        Onat Üce
        </h1>

        <p className="mt-6 text-xl leading-8 text-slate-700">
        Focused on frontend development, test automation and structured 
        software engineering using React, TypeScript and modern development tools.
        </p>

        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            I enjoy building clean and maintainable applications with a strong focus on usability,
            testing and structured development practices.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
        <a
        href="https://linkedin.com/in/onat-işık-üce-5aa537254/"
        target="_blank"
            className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-700"
        >
        LinkedIn
        </a>

        <a
            href="https://github.com/onatuce"
            target="_blank"
            className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-700"
        >
            GitHub
        </a>

        <a
            href="/cv.pdf"
            className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-700"
        >
            Download Resume
        </a>
        </div>
    </div>
    </section>
);
}