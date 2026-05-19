export function Projects() {
  const projects = [
    {
      icon: "🧾",
      title: "BillingKit",
      subtitle: "Billing & Inventory Management System",
      description:
        "A multi-role billing system for small businesses with GST compliance (CGST/SGST/IGST), automated PDF invoice generation, real-time inventory tracking, and role-based access control (Admin/Staff).",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
  ];

  return (
    <section className="py-24 px-[6%]" id="projects">
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-12 text-center">
        My <span className="text-accent">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-2xl p-8 hover:translate-y-[-6px] hover:border-accent hover:shadow-[0_14px_40px_rgba(232,168,56,0.12)] transition-all"
          >
            <div className="text-4xl mb-4">{project.icon}</div>
            <h3 className="font-[family-name:var(--font-display)] text-xl mb-1">
              {project.title}
            </h3>
            <p className="text-accent-2 text-sm mb-4">{project.subtitle}</p>
            <p className="text-muted text-sm leading-relaxed mb-5">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-accent-2/10 border border-accent-2/30 text-accent-2 px-3 py-1 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
