export default function PortfolioPage() {
  const sections = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-20 border-b border-slate-800 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          {/* לוגו קטן / שם */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-tr from-sky-500 to-purple-500 text-sm font-bold">
              SY
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-sm font-semibold">Shaked Yaron</span>
              <span className="text-xs text-slate-400">
                Full Stack Developer
              </span>
            </div>
          </div>

          {/* לינקים לסקשנים */}
          <nav className="flex items-center gap-4 sm:gap-6 text-sm">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="group relative text-slate-300 hover:text-sky-400 transition"
              >
                <span>{section.label}</span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-sky-400 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* CONTENT */}
      <main className="mx-auto flex max-w-3xl flex-col gap-12 px-4 py-10">
        {/* About */}
        <section id="about" className="space-y-3 scroll-mt-28">
          <h1 className="text-4xl font-bold">
            Hi, I'm <span className="text-orange-400">Shaked Yaron</span>.
          </h1>

          <p className="text-lg text-slate-300">
            Full Stack Developer — React, TypeScript, Node.js, SQL, Three.js
          </p>
          <p className="text-slate-400 leading-relaxed max-w-3xl">
            I’m a 23-year-old developer based in Rehovot, Israel, with a strong
            focus on building clean, efficient, and reliable systems. I enjoy
            taking complex problems and breaking them down into smart,
            maintainable solutions. I’m always excited to learn new
            technologies, explore better approaches, and take on challenges that
            push me to grow as a developer and as a problem solver.
          </p>
        </section>

        <div className="border-t border-slate-700" />

        {/* Experience */}
        <section id="experience" className="scroll-mt-24">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span>💼</span> Experience
          </h2>
          {/* Job 1 */}
          <div className="flex gap-6 mb-10">
            <div className="w-32 text-sm text-slate-400">2023 – 2025</div>

            <div className="flex-1 space-y-2">
              <h3 className="text-lg font-semibold text-slate-100">
                Full Stack Developer — Israeli Air Force (IAF)
              </h3>

              <p className="text-slate-300 leading-relaxed">
                Developed large-scale full-stack applications using React,
                TypeScript, Node.js, SQL Server, and MongoDB. Improved legacy
                systems, built real-time platforms with Socket.IO, and created
                3D interactive features with Three.js / R3F to enhance
                visualization and user experience.
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-1">
                {[
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Express",
                  "SQL Server",
                  "MongoDB",
                  "Socket.IO",
                  "Three.js",
                  "React Three Fiber",
                  "Git",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-800/60 px-3 py-1 text-xs text-slate-300 border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-slate-700" />

        {/* Education */}
        <section id="education" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-4">
            <span>🎓</span> Education
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">
                Practical Software Engineering
              </h3>
              <p className="text-slate-400 text-sm">ORT College — 2020–2022</p>
            </div>

            <div>
              <h3 className="text-lg font-medium">
                Self-Learning & Private Courses
              </h3>
              <p className="text-slate-400 text-sm">
                Advanced React, TypeScript, Node.js, SQL
              </p>
            </div>
          </div>
        </section>

        <div className="border-t border-slate-700" />

        {/* Contact */}
        <section id="contact" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-4">
            <span>📬</span> Contact
          </h2>

          <div className="flex flex-col gap-2 text-slate-300">
            <a
              href="mailto:yourmail@example.com"
              className="hover:text-sky-400 transition"
            >
              ✉️ shakedyaron17@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/shaked-yaron-6880a8324/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 transition"
            >
              🔗 LinkedIn
            </a>

            <a
              href="https://github.com/shakedyaron"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 transition"
            >
              💻 GitHub
            </a>
          </div>
        </section>

        <div className="border-t border-slate-800 pt-4 text-center text-xs text-slate-600">
          © 2025 Shaked Yaron
        </div>
      </main>
    </div>
  );
}
