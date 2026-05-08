export default function Contact() {
return (
    <section id="contact" className="border-t border-slate-200 bg-slate-50">
    <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex flex-row items-start justify-between gap-6">
        <div className="flex-1">
        <h2 className="text-2xl font-bold tracking-tight text-slate-950">
        Contact
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600">
        I am open to junior developer roles, internships 
        and opportunities related to frontend development, 
        test automation and software engineering.
        </p>
        <div className="mt-8 space-y-3 text-sm">
        <p>
            <span className="font-medium text-slate-900">Email:</span>{" "}
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
            <a href="https://github.com/onatuce" className="text-slate-600 hover:underline">
            github.com/onatuce
            </a>
        </p>
        </div>
        </div>
        <div className="flex-shrink-0">
            <img
            src="/contact.jpg"
            alt="Contact"
            className="h-40 w-30 object-cover rounded-xl shadow-md border border-slate-200 bg-white sm:h-28 sm:w-28 md:h-42 md:w-32"
            />
        </div>
        </div>
        </div>
    </section>
);
}