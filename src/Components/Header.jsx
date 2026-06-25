import { useState } from "react";
import "./Header.css";

// Reusable Dynamic Accordion Shell
function AccordionSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordion-wrapper">
      <button
        className={`accordion-trigger ${isOpen ? "active-trigger" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className="arrow-icon">{isOpen ? "✕" : "＋"}</span>
      </button>
      <div className={`accordion-panel ${isOpen ? "panel-expanded" : ""}`}>
        <div className="accordion-inner-content">{children}</div>
      </div>
    </div>
  );
}

// LHS: Form Input Component
export function HeaderForm({
  resumeData,
  setResumeData,
  updatePersonal,
  updateSkills,
}) {
  // Education Array Modifiers (Limit: 2)
  const addEducation = () => {
    if (resumeData.education.length >= 2) {
      alert(
        "Education limit hit (Max 2 sections) to ensure clean A4 template balance.",
      );
      return;
    }
    setResumeData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: crypto.randomUUID(),
          degree: "",
          school: "",
          startDate: "",
          endDate: "",
        },
      ],
    }));
  };

  const handleEducationChange = (id, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    }));
  };

  const removeEducation = (id) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.filter((item) => item.id !== id),
    }));
  };

  // Projects Array Modifiers (Limit: 3)
  const addProject = () => {
    if (resumeData.projects.length >= 3) {
      alert(
        "Project entries limit hit (Max 3 sections) to ensure clean A4 template balance.",
      );
      return;
    }
    setResumeData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          id: crypto.randomUUID(),
          title: "",
          link: "",
          startDate: "",
          endDate: "",
          b1: "",
          b2: "",
          b3: "",
        },
      ],
    }));
  };

  const handleProjectChange = (id, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    }));
  };

  const removeProject = (id) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.filter((item) => item.id !== id),
    }));
  };

  // Achievements Array Modifiers (Limit: 3)
  const addAchievement = () => {
    if (resumeData.achievements.length >= 3) {
      alert(
        "Achievements limit hit (Max 3 items) to avoid visual document clutter.",
      );
      return;
    }
    setResumeData((prev) => ({
      ...prev,
      achievements: [
        ...prev.achievements,
        { id: crypto.randomUUID(), boldLabel: "", explanation: "" },
      ],
    }));
  };

  const handleAchievementChange = (id, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      achievements: prev.achievements.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    }));
  };

  const removeAchievement = (id) => {
    setResumeData((prev) => ({
      ...prev,
      achievements: prev.achievements.filter((item) => item.id !== id),
    }));
  };

  return (
    <div className="forms-stack">
      {/* 1. Header Details */}
      <AccordionSection title="1. Personal Profile Header">
        <div className="input-row">
          <label>Full Identity Name</label>
          <input
            type="text"
            placeholder="Anudit Jangid"
            value={resumeData.personal.name}
            onChange={(e) => updatePersonal("name", e.target.value)}
          />
        </div>
        <div className="input-row">
          <label>Location Area</label>
          <input
            type="text"
            placeholder="Pune, Maharashtra, India"
            value={resumeData.personal.location}
            onChange={(e) => updatePersonal("location", e.target.value)}
          />
        </div>
        <div className="input-row">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="name@domain.com"
            value={resumeData.personal.email}
            onChange={(e) => updatePersonal("email", e.target.value)}
          />
        </div>
        <div className="input-row">
          <label>Contact Phone</label>
          <input
            type="text"
            placeholder="+91 XXXXX XXXXX"
            value={resumeData.personal.phone}
            onChange={(e) => updatePersonal("phone", e.target.value)}
          />
        </div>
        <div className="input-row">
          <label>Portfolio URL</label>
          <input
            type="text"
            placeholder="https://portfolio.io"
            value={resumeData.personal.portfolio}
            onChange={(e) => updatePersonal("portfolio", e.target.value)}
          />
        </div>
        <div className="input-row">
          <label>GitHub Profile Link</label>
          <input
            type="text"
            placeholder="https://github.com/user"
            value={resumeData.personal.github}
            onChange={(e) => updatePersonal("github", e.target.value)}
          />
        </div>
        <div className="input-row">
          <label>LinkedIn Profile Link</label>
          <input
            type="text"
            placeholder="https://linkedin.com/in/user"
            value={resumeData.personal.linkedin}
            onChange={(e) => updatePersonal("linkedin", e.target.value)}
          />
        </div>
      </AccordionSection>

      {/* 2. Headline Tagline Section */}
      <AccordionSection title="2. Title & Professional Tagline">
        <div className="input-row">
          <label>Target Core Title Role</label>
          <input
            type="text"
            placeholder="SOFTWARE ENGINEERING STUDENT | FULL STACK DEVELOPER"
            value={resumeData.personal.taglineTitle}
            onChange={(e) => updatePersonal("taglineTitle", e.target.value)}
          />
        </div>
        <div className="input-row">
          <label>Professional Mission Statement</label>
          <textarea
            rows="3"
            placeholder="Focused on building scalable web applications..."
            value={resumeData.personal.taglineDesc}
            onChange={(e) => updatePersonal("taglineDesc", e.target.value)}
          ></textarea>
        </div>
      </AccordionSection>

      {/* 3. Core Technical Skills */}
      <AccordionSection title="3. Technical Skills Inventory">
        <div className="input-row">
          <label>Core Languages</label>
          <input
            type="text"
            placeholder="Java, JavaScript, TypeScript"
            value={resumeData.skills.languages}
            onChange={(e) => updateSkills("languages", e.target.value)}
          />
        </div>
        <div className="input-row">
          <label>Frontend Development</label>
          <input
            type="text"
            placeholder="React.js, Next.js, Tailwind CSS"
            value={resumeData.skills.frontend}
            onChange={(e) => updateSkills("frontend", e.target.value)}
          />
        </div>
        <div className="input-row">
          <label>Backend & System Engines</label>
          <input
            type="text"
            placeholder="Node.js, Express.js, RESTful APIs"
            value={resumeData.skills.backend}
            onChange={(e) => updateSkills("backend", e.target.value)}
          />
        </div>
        <div className="input-row">
          <label>Cloud Ecosystems & Data Storage</label>
          <input
            type="text"
            placeholder="MongoDB, Firebase, Local Storage"
            value={resumeData.skills.cloud}
            onChange={(e) => updateSkills("cloud", e.target.value)}
          />
        </div>
        <div className="input-row">
          <label>Tools & Platforms</label>
          <input
            type="text"
            placeholder="Git, GitHub, Webpack, npm"
            value={resumeData.skills.tools}
            onChange={(e) => updateSkills("tools", e.target.value)}
          />
        </div>
        <div className="input-row">
          <label>Computer Science Fundamentals</label>
          <input
            type="text"
            placeholder="Data Structures, OOP, DBMS"
            value={resumeData.skills.coreCs}
            onChange={(e) => updateSkills("coreCs", e.target.value)}
          />
        </div>
      </AccordionSection>

      {/* 4. Engineering Projects */}
      <AccordionSection
        title={`4. Featured Projects (${resumeData.projects.length}/3)`}
      >
        {resumeData.projects.map((proj, idx) => (
          <div key={proj.id} className="dynamic-repeater-card">
            <div className="card-header-row">
              <h5>Project Entry #{idx + 1}</h5>
              <button
                className="delete-btn"
                onClick={() => removeProject(proj.id)}
              >
                Remove
              </button>
            </div>
            <div className="input-row">
              <label>Project Title Name</label>
              <input
                type="text"
                placeholder="Weatherz Forecast Platform"
                value={proj.title}
                onChange={(e) =>
                  handleProjectChange(proj.id, "title", e.target.value)
                }
              />
            </div>
            <div className="input-row">
              <label>Live Repository URL</label>
              <input
                type="text"
                placeholder="https://linkedin.com/..."
                value={proj.link}
                onChange={(e) =>
                  handleProjectChange(proj.id, "link", e.target.value)
                }
              />
            </div>
            <div className="grid-split-2">
              <div className="input-row">
                <label>Start Timeline</label>
                <input
                  type="text"
                  placeholder="Jan 2024"
                  value={proj.startDate}
                  onChange={(e) =>
                    handleProjectChange(proj.id, "startDate", e.target.value)
                  }
                />
              </div>
              <div className="input-row">
                <label>End Timeline</label>
                <input
                  type="text"
                  placeholder="Feb 2024"
                  value={proj.endDate}
                  onChange={(e) =>
                    handleProjectChange(proj.id, "endDate", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="input-row">
              <label>Impact Description Bullet 1</label>
              <input
                type="text"
                placeholder="Engineered a high-performance metrics app..."
                value={proj.b1}
                onChange={(e) =>
                  handleProjectChange(proj.id, "b1", e.target.value)
                }
              />
            </div>
            <div className="input-row">
              <label>Impact Description Bullet 2</label>
              <input
                type="text"
                placeholder="Integrated asynchronous rendering pipeline..."
                value={proj.b2}
                onChange={(e) =>
                  handleProjectChange(proj.id, "b2", e.target.value)
                }
              />
            </div>
            <div className="input-row">
              <label>Impact Description Bullet 3</label>
              <input
                type="text"
                placeholder="Optimized assets for faster loads..."
                value={proj.b3}
                onChange={(e) =>
                  handleProjectChange(proj.id, "b3", e.target.value)
                }
              />
            </div>
          </div>
        ))}
        <button className="append-node-btn" onClick={addProject}>
          + Add Engineering Project
        </button>
      </AccordionSection>

      {/* 5. Academic Background */}
      <AccordionSection
        title={`5. Education Metrics (${resumeData.education.length}/2)`}
      >
        {resumeData.education.map((edu, idx) => (
          <div key={edu.id} className="dynamic-repeater-card">
            <div className="card-header-row">
              <h5>Academic Target #{idx + 1}</h5>
              <button
                className="delete-btn"
                onClick={() => removeEducation(edu.id)}
              >
                Remove
              </button>
            </div>
            <div className="input-row">
              <label>Degree Title</label>
              <input
                type="text"
                placeholder="Bachelor of Engineering in IT"
                value={edu.degree}
                onChange={(e) =>
                  handleEducationChange(edu.id, "degree", e.target.value)
                }
              />
            </div>
            <div className="input-row">
              <label>Institution Name</label>
              <input
                type="text"
                placeholder="GH Raisoni College of Engineering"
                value={edu.school}
                onChange={(e) =>
                  handleEducationChange(edu.id, "school", e.target.value)
                }
              />
            </div>
            <div className="grid-split-2">
              <div className="input-row">
                <label>Start Date</label>
                <input
                  type="text"
                  placeholder="Aug 2023"
                  value={edu.startDate}
                  onChange={(e) =>
                    handleEducationChange(edu.id, "startDate", e.target.value)
                  }
                />
              </div>
              <div className="input-row">
                <label>Completion Date</label>
                <input
                  type="text"
                  placeholder="Aug 2027"
                  value={edu.endDate}
                  onChange={(e) =>
                    handleEducationChange(edu.id, "endDate", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        ))}
        <button className="append-node-btn" onClick={addEducation}>
          + Add Education Line
        </button>
      </AccordionSection>

      {/* 6. Achievements & Leadership */}
      <AccordionSection
        title={`6. Achievements & Honors (${resumeData.achievements.length}/3)`}
      >
        {resumeData.achievements.map((ach, idx) => (
          <div key={ach.id} className="dynamic-repeater-card">
            <div className="card-header-row">
              <h5>Achievement Item #{idx + 1}</h5>
              <button
                className="delete-btn"
                onClick={() => removeAchievement(ach.id)}
              >
                Remove
              </button>
            </div>
            <div className="input-row">
              <label>Bold Core Metric Tag</label>
              <input
                type="text"
                placeholder="Algorithmic Efficiency:"
                value={ach.boldLabel}
                onChange={(e) =>
                  handleAchievementChange(ach.id, "boldLabel", e.target.value)
                }
              />
            </div>
            <div className="input-row">
              <label>Context Details Description</label>
              <input
                type="text"
                placeholder="Solved 500+ problems across platforms using Java."
                value={ach.explanation}
                onChange={(e) =>
                  handleAchievementChange(ach.id, "explanation", e.target.value)
                }
              />
            </div>
          </div>
        ))}
        <button className="append-node-btn" onClick={addAchievement}>
          + Add Achievement Record
        </button>
      </AccordionSection>
    </div>
  );
}

// RHS: Virtual Page Print-Ready Document Output
export function ResumePreview({ resumeData }) {
  const { personal, skills, projects, education, achievements } = resumeData;

  // Verification steps to hide empty formatting elements dynamically[cite: 8]
  const renderContactString = () => {
    const segments = [personal.location, personal.email, personal.phone].filter(
      Boolean,
    );
    return segments.map((seg, i) => (
      <span key={i}>
        {seg}{" "}
        {i < segments.length - 1 && <span className="text-divider">|</span>}
      </span>
    ));
  };

  return (
    <div className="a4-document-viewport">
      {/* Target Identity Context[cite: 8] */}
      <div className="doc-identity-header">
        <h1>{personal.name || "YOUR NAME HIGHLIGHT"}</h1>
        <div className="doc-contact-subrow">{renderContactString()}</div>
        <div className="doc-links-subrow">
          {personal.portfolio && (
            <>
              <a href={personal.portfolio} target="_blank" rel="noreferrer">
                Portfolio
              </a>
            </>
          )}
          {personal.portfolio && (personal.github || personal.linkedin) && (
            <span className="text-divider">|</span>
          )}
          {personal.github && (
            <>
              <a href={personal.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </>
          )}
          {personal.github && personal.linkedin && (
            <span className="text-divider">|</span>
          )}
          {personal.linkedin && (
            <>
              <a href={personal.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </>
          )}
        </div>
      </div>

      {/* Narrative Headline[cite: 8] */}
      {(personal.taglineTitle || personal.taglineDesc) && (
        <div className="doc-tagline-container">
          {personal.taglineTitle && <h3>{personal.taglineTitle}</h3>}
          {personal.taglineDesc && <p>{personal.taglineDesc}</p>}
        </div>
      )}

      {/* Skills Matrix Layout[cite: 8] */}
      {(skills.languages ||
        skills.frontend ||
        skills.backend ||
        skills.cloud ||
        skills.tools ||
        skills.coreCs) && (
        <div className="doc-section">
          <h2>Technical Skills</h2>
          <div className="doc-skills-box">
            {skills.languages && (
              <div className="skills-line-item">
                <strong>Languages:</strong> {skills.languages}
              </div>
            )}
            {skills.frontend && (
              <div className="skills-line-item">
                <strong>Frontend Engine:</strong> {skills.frontend}
              </div>
            )}
            {skills.backend && (
              <div className="skills-line-item">
                <strong>Backend & Systems:</strong> {skills.backend}
              </div>
            )}
            {skills.cloud && (
              <div className="skills-line-item">
                <strong>Cloud & Storage:</strong> {skills.cloud}
              </div>
            )}
            {skills.tools && (
              <div className="skills-line-item">
                <strong>Tools & Ecosystems:</strong> {skills.tools}
              </div>
            )}
            {skills.coreCs && (
              <div className="skills-line-item">
                <strong>Core Computer Science:</strong> {skills.coreCs}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Projects Collection Component[cite: 8] */}
      {projects.length > 0 && (
        <div className="doc-section">
          <h2>Featured Engineering Projects</h2>
          {projects.map((proj) => (
            <div className="doc-block-entry" key={proj.id}>
              <div className="doc-block-header">
                <span className="entry-title-text">
                  {proj.title || "Project Context Title"}
                </span>
                <span className="entry-right-metadata">
                  {proj.startDate || proj.endDate ? (
                    <span className="timeline-date">
                      {proj.startDate} – {proj.endDate}
                    </span>
                  ) : null}
                  {proj.link && (proj.startDate || proj.endDate) && (
                    <span className="text-divider">|</span>
                  )}
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noreferrer"
                      className="blueprint-anchor"
                    >
                      LINK
                    </a>
                  )}
                </span>
              </div>
              <ul className="doc-bullet-tree">
                {proj.b1 && <li>{proj.b1}</li>}
                {proj.b2 && <li>{proj.b2}</li>}
                {proj.b3 && <li>{proj.b3}</li>}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Education Track[cite: 8] */}
      {education.length > 0 && (
        <div className="doc-section">
          <h2>Education</h2>
          {education.map((edu) => (
            <div className="doc-block-entry" key={edu.id}>
              <div className="doc-block-header">
                <span className="entry-title-text">
                  {edu.degree || "Acquired Degree Program"}
                </span>
                {edu.startDate || edu.endDate ? (
                  <span className="timeline-date">
                    {edu.startDate} – {edu.endDate}
                  </span>
                ) : null}
              </div>
              <div className="doc-block-subheader">
                {edu.school || "Affiliated University Institution"}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Achievements Track[cite: 8] */}
      {achievements.length > 0 && (
        <div className="doc-section">
          <h2>Achievements & Leadership</h2>
          <div className="doc-block-entry" style={{ marginTop: "6px" }}>
            <ul className="doc-bullet-tree">
              {achievements.map((ach) => (
                <li key={ach.id}>
                  {ach.boldLabel && <strong>{ach.boldLabel} </strong>}
                  {ach.explanation}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
