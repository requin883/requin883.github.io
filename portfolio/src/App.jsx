import "./App.css";
import React from "react";

const projects = [
  {
    badge: "MERN",
    year: "2025",
    title: "s5-14-m-mern",
    description: "Sitio web enfocado en la educación de niños mediante juegos.",
    languages: [
      { name: "JavaScript", percent: "70.8%", dot: "js" },
      { name: "Sass", percent: "28.9%", dot: "sass" },
      { name: "HTML", percent: "0.3%", dot: "html" }
    ],
    link: "https://ludens-two.vercel.app/notifications"
  },
  {
    badge: "Node + React",
    year: "2025",
    title: "s17-05-m-node-react",
    description: "Pronóstico de clima, costos de mercado, asistencia de IA para cultivos.",
    languages: [
      { name: "TypeScript", percent: "71.2%", dot: "ts" },
      { name: "JavaScript", percent: "27.5%", dot: "js" },
      { name: "Other", percent: "1.3%", dot: "other" }
    ],
    link: "https://s17-05-m-node-react.onrender.com/"
  }
];

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js",
  "Express", "MongoDB", "Git", "GitHub", "Figma", "REST APIs"
];

function App() {
  return (
    <div className="page-shell">
      <div className="bg-blur blur-1" />
      <div className="bg-blur blur-2" />

      <header className="site-header">
        <nav className="nav container">
          <a href="#top" className="brand">requin883</a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>

          <ThemeToggle />
        </nav>
      </header>

      <main id="top">
        <section className="hero container reveal">
          <div className="hero-content">
            <p className="eyebrow">Full-Stack Developer</p>
            <h1>
              I build <span className="highlight">digital products</span> that feel modern and work beautifully.
            </h1>
            <p className="hero-text">
              I’m a developer focused on creating clean user experiences,
              scalable backend logic, and impactful web applications for real
              users and businesses.
            </p>

            <div className="cta-group">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>

            <ul className="social-proof">
              <li>React</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>TypeScript</li>
            </ul>
          </div>

          <div className="hero-visual">
            <div className="status-card">
              <span className="dot" />
              Open to work
            </div>

            <div className="profile-card">
              <img
                src="https://github.com/requin883.png"
                alt="requin883 profile"
                className="avatar"
              />
              <div>
                <h3>requin883</h3>
                <p>Frontend & Full-Stack Developer</p>
              </div>
            </div>

            <div className="mini-panel">
              <span className="mini-label">Projects</span>
              <strong>+8</strong>
            </div>
          </div>
        </section>

        <section id="about" className="about container reveal">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Building solutions with code and creativity</h2>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <p>
                I enjoy turning ideas into polished, useful digital experiences.
                My process combines careful planning, modern frontend design,
                solid backend architecture, and a strong focus on usability.
              </p>
            </div>

            <div className="about-card">
              <p>
                I work with JavaScript, TypeScript, React, Node.js, and modern
                web tooling to create responsive interfaces and scalable product
                flows that feel smooth and intentional.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="projects container reveal">
          <div className="section-heading">
            <p className="eyebrow">Featured projects</p>
            <h2>Selected work</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-header">
                  <span className="project-badge">{project.badge}</span>
                  <span className="project-year">{project.year}</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <ul className="lang-list">
                  {project.languages.map((lang) => (
                    <li key={`${project.title}-${lang.name}`}>
                      <span className={`lang-dot ${lang.dot}`} />
                      {lang.name}: {lang.percent}
                    </li>
                  ))}
                </ul>

                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noreferrer">GitHub Repo</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="skills container reveal">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Tools I use</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section id="contact" className="contact container reveal">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Let’s build something meaningful</h2>
          </div>

          <div className="contact-card">
            <p>I’m open to freelance work, collaborations, and opportunities to build great products.</p>
            <a href="mailto:requin883@gmail.com" className="btn btn-primary">requin883@gmail.com</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} requin883</p>
        </div>
      </footer>
    </div>
  );
}

function ThemeToggle() {
  const [lightMode, setLightMode] = React.useState(() => {
    const saved = localStorage.getItem("portfolio-theme");
    return saved === "light";
  });

  React.useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");

    if (!revealItems.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    document.body.classList.toggle("light", lightMode);
    localStorage.setItem("portfolio-theme", lightMode ? "light" : "dark");
  }, [lightMode]);

  return (
    <button
      className="theme-toggle"
      aria-label="Toggle theme"
      onClick={() => setLightMode((prev) => !prev)}
    >
      <span className="toggle-icon">{lightMode ? "☀️" : "🌙"}</span>
    </button>
  );
}

export default App;
