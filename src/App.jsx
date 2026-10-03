import React from "react";
import {
  profile,
  navItems,
  about,
  experience,
  projects,
  skills,
  education,
} from "./data";

function downloadCV() {
  const lines = [
    profile?.name ? profile.name.toUpperCase() : "CURRICULUM VITAE",
    "MERN Stack Developer",
    `${profile?.email || ""} | GitHub: ${profile?.github || ""} | LinkedIn: ${profile?.linkedin || ""}`,
    "",
    "TECHNICAL SKILLS",
    ...(skills || []).map((s) => `${s.label}: ${s.items}`),
    "",
    "WORK EXPERIENCE",
    ...(experience || []).flatMap((j) => [
      `${j.title} | ${j.org} | ${j.when}`,
      ...(j.points || []).map((p) => `- ${p}`),
      "",
    ]),
    "PROJECTS",
    ...(projects || []).flatMap((p) => [
      `${p.title} | ${p.stack}`,
      `- ${p.description}`,
      `- Live: ${p.live}`,
      "",
    ]),
    "EDUCATION",
    ...(Array.isArray(education)
      ? education.map((e) => `${e.degree || e.title} - ${e.school || e.org}`)
      : [`${education?.degree || ""} ${education?.school || ""}`]),
  ];

  const blob = new Blob([lines.join("\n")], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${(profile?.name || "CV").replace(/\s+/g, "_")}_CV.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

function Panel() {
  return (
    <aside className="panel">
      <div>
        <h1 className="name">{profile?.name}</h1>
        <p className="role">{profile?.role}</p>
      </div>

      <nav aria-label="Sections">
        <ul>
          {(navItems || []).map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="panel-foot">
        <a href={`mailto:${profile?.email}`}>{profile?.email}</a>
        <a href={profile?.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={profile?.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <button className="cv" type="button" onClick={downloadCV}>
          Download CV
        </button>
      </div>
    </aside>
  );
}

function About() {
  return (
    <section id="about">
      <h2>About</h2>
      <p className="lede">{about?.lede}</p>
      {(about?.paragraphs || []).map((text, idx) => (
        <p className="prose" key={idx}>
          {text}
        </p>
      ))}
      {about?.quiet && <p className="prose quiet">{about.quiet}</p>}
    </section>
  );
}

function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      {(experience || []).map((job, idx) => (
        <article className="job" key={job.title || idx}>
          <div className="when">{job.when}</div>
          <div>
            <h3>{job.title}</h3>
            <div className="org">{job.org}</div>
            {(job.points || []).map((point, pIdx) => (
              <p key={pIdx}>{point}</p>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {(projects || []).map((project, idx) => (
        <article className="project" key={project.title || idx}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <dl className="meta">
            <dt>Stack</dt>
            <dd>{project.stack}</dd>
            {project.covers && (
              <>
                <dt>Covers</dt>
                <dd>{project.covers}</dd>
              </>
            )}
          </dl>
          <div className="links">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                Live demo
              </a>
            )}
            {project.source && (
              <a href={project.source} target="_blank" rel="noopener noreferrer">
                Source code
              </a>
            )}
          </div>
        </article>
      ))}
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <dl className="skills">
        {(skills || []).map((skill, idx) => (
          <React.Fragment key={skill.label || idx}>
            <dt>{skill.label}</dt>
            <dd>{Array.isArray(skill.items) ? skill.items.join(", ") : skill.items}</dd>
          </React.Fragment>
        ))}
      </dl>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="edu">
      <h2>Education</h2>
      {Array.isArray(education) ? (
        education.map((item, idx) => (
          <div key={idx}>
            <h3>{item.degree || item.title}</h3>
            <p>{item.school || item.org}</p>
          </div>
        ))
      ) : (
        <div>
          <h3>{education?.degree}</h3>
          <p>{education?.school}</p>
        </div>
      )}
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p className="prose">
        If you have a role or a project that needs a developer, send me an email.
      </p>
      <a className="contact-mail" href={`mailto:${profile?.email}`}>
        {profile?.email}
      </a>
      <div className="contact-links">
        <a href={profile?.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        
        <a href={profile?.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="layout">
      <Panel />
      <main>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <footer>
          Privacy: this site uses no cookies or analytics and does not collect
          any personal data. Messages sent by email are used only to reply to
          you.
        </footer>
      </main>
    </div>
  );
}