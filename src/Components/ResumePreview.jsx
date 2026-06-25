import "./ResumePreview.css";

export default function ResumePreview({ resumeData }) {
  const { personal, skills, projects, education, achievements } = resumeData;
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
      <div className="doc-identity-header">
        <h1>{personal.name || "YOUR NAME HIGHLIGHT"}</h1>
        <div className="doc-contact-subrow">{renderContactString()}</div>
        <div className="doc-links-subrow">
          {personal.portfolio && (
            <a href={personal.portfolio} target="_blank" rel="noreferrer">
              Portfolio
            </a>
          )}
          {personal.portfolio && (personal.github || personal.linkedin) && (
            <span className="text-divider">|</span>
          )}
          {personal.github && (
            <a href={personal.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {personal.github && personal.linkedin && (
            <span className="text-divider">|</span>
          )}
          {personal.linkedin && (
            <a href={personal.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
        </div>
      </div>
      {(personal.taglineTitle || personal.taglineDesc) && (
        <div className="doc-tagline-container">
          {personal.taglineTitle && <h3>{personal.taglineTitle}</h3>}
          {personal.taglineDesc && <p>{personal.taglineDesc}</p>}
        </div>
      )}
      {skills.length > 0 && (
        <div className="doc-section">
          <h2>Technical Skills</h2>
          <div className="doc-skills-box">
            {skills.map(
              (item) =>
                (item.category || item.details) && (
                  <div className="skills-line-item" key={item.id}>
                    <strong>{item.category || "Category"}:</strong>{" "}
                    {item.details}
                  </div>
                ),
            )}
          </div>
        </div>
      )}
      {projects.length > 0 && (
        <div className="doc-section">
          <h2>Featured Engineering Projects</h2>
          {projects.map((proj) => (
            <div className="doc-block-entry" key={proj.id}>
              <div className="doc-block-header">
                <span className="entry-title-text">
                  {proj.title || "Project Title"}
                </span>
                <span className="entry-right-metadata">
                  {(proj.startDate || proj.endDate) && (
                    <span className="timeline-date">
                      {proj.startDate} – {proj.endDate}
                    </span>
                  )}
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
                {proj.bullets.map(
                  (bullet) =>
                    bullet.text && <li key={bullet.id}>{bullet.text}</li>,
                )}
              </ul>
            </div>
          ))}
        </div>
      )}
      {education.length > 0 && (
        <div className="doc-section">
          <h2>Education</h2>
          {education.map((edu) => (
            <div className="doc-block-entry" key={edu.id}>
              <div className="doc-block-header">
                <span className="entry-title-text">
                  {edu.degree || "Degree Program"}
                </span>
                {(edu.startDate || edu.endDate) && (
                  <span className="timeline-date">
                    {edu.startDate} – {edu.endDate}
                  </span>
                )}
              </div>
              <div className="doc-block-subheader">
                {edu.school || "Institution Name"}
              </div>
            </div>
          ))}
        </div>
      )}
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
