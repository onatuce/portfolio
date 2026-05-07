export default function Contact() {
  return (
    <section id="contact" className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-bold tracking-tight text-slate-950">
        Kontakt
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600">
        Jeg er åpen for juniorroller, internships, deltidsstillinger og
        muligheter innen frontend, test automation og softwareutvikling.
        </p>
        <div className="mt-8 space-y-3 text-sm">
        <p>
            <span className="font-medium text-slate-900">E-post:</span>{" "}
            <a href="mailto:uce.onat@gmail.com" className="text-slate-600 hover:underline">
            uce.onat@gmail.com
            </a>
        </p>

        <p>
            <span className="font-medium text-slate-900">LinkedIn:</span>{" "}
            <a href="https://www.linkedin.com/in/onat-i%C5%9F%C4%B1k-%C3%BCce-5aa537254/" className="text-slate-600 hover:underline">
            linkedin.com/in/onat-işık-üce
            </a>
        </p>

        <p>
            <span className="font-medium text-slate-900">GitHub:</span>{" "}
            <a href="https://github.com/dittbrukernavn" className="text-slate-600 hover:underline">
            github.com/onatuce
            </a>
        </p>
        </div>
    </div>
    </section>
);
}