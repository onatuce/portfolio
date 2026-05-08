const navItems = [
{ label: "About", href: "#about" },
{ label: "Prosjekter", href: "#projects" },
{ label: "Skills", href: "#skills" },
{ label: "Contact", href: "#contact" },
];
export default function Header() {
return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-slate-50/90 backdrop-blur">
    <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="text-sm font-semibold tracking-tight text-slate-900">
        Onat Üce
        </a>

        <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
        {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-slate-900">
            {item.label}
            </a>
        ))}
        </nav>
    </div>
    </header>
);
}