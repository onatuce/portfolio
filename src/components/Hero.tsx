export default function Hero() {
return (
    <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
    <div className="max-w-3xl">
        <p className="mb-4 text-sm font-medium text-slate-500">
        Junior IT Developer
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
        Onat Üce
        </h1>

        <p className="mt-6 text-xl leading-8 text-slate-700">
        Nyutdannet IT-utvikler med fokus på frontend, test automation og
        strukturert programvareutvikling.
        </p>

        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
        Jeg bygger ryddige, brukervennlige og vedlikeholdbare løsninger med
        React, TypeScript, Java og moderne utviklingsverktøy. Jeg er spesielt
        interessert i frontend, kvalitetssikring og automatisert testing.
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
            className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-800 hover:bg-slate-100"
          >
            GitHub
          </a>

          <a
            href="/cv.pdf"
            className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-800 hover:bg-slate-100"
          >
            Last ned CV
          </a>
        </div>
      </div>
    </section>
  );
}