const courses = [
	"Discrete Mathematics",
    "Programming",
    "Databases",
	"Cyber Security",
    "Algorithms and Data Structures",
    "Networking and cloud computing",
    "Software Testing",
	"Operating Systems",
	"Software Engineering",
	"Visualization",
	"Technology and Society for Programmers",
	"Inclusive Web Design",
	"Internet of Things",
	"Web Programming",
	"Human Computer Interaction",
	"IT project in practice",
	"Web Application",
    "Bachelor Project",
];
export default function Education() {
	return (
		<div className="mt-12 max-w-3xl">
			<div className="flex items-start gap-6">
				<div className="flex flex-col items-center">
					<div className="h-3 w-3 rounded-full bg-slate-900" />
					<div className="mt-3 h-full w-px bg-slate-200" />
				</div>
				<div className="w-full">
					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
						<div className="flex flex-wrap items-center gap-3">
							<span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
								2023–2026
							</span>
							<p className="text-sm font-semibold text-slate-900">OsloMet (Oslo Metropolitan University) · Bachelor's Degree in IT</p>
						</div>
						<p className="mt-3 text-sm text-slate-600">
							180 ECTS
						</p>
						<div className="mt-5">
							<p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
								Courses
							</p>
							<div className="mt-3 flex flex-wrap gap-2">
								{courses.map((course) => (
									<span
										key={course}
										className="rounded-full border border-slate-200 bg-gradient-to-br from-white to-slate-50 px-3 py-1 text-xs font-medium text-slate-700 shadow-[0_1px_0_rgba(15,23,42,0.06)]"
									>
										{course}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
