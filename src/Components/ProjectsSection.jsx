import AccordionSection from "./AccordionSection";
import "./SharedFormStyles.css";

export default function ProjectsSection({ resumeData, setResumeData }) {
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
          bullets: [{ id: crypto.randomUUID(), text: "" }],
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
  const addBulletPoint = (projectId) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.map((proj) => {
        if (proj.id !== projectId) return proj;
        if (proj.bullets.length >= 5) {
          alert("Maximum 5 descriptive bullets recommended per project entry.");
          return proj;
        }
        return {
          ...proj,
          bullets: [...proj.bullets, { id: crypto.randomUUID(), text: "" }],
        };
      }),
    }));
  };
  const handleBulletChange = (projectId, bulletId, value) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.map((proj) => {
        if (proj.id !== projectId) return proj;
        return {
          ...proj,
          bullets: proj.bullets.map((b) =>
            b.id === bulletId ? { ...b, text: value } : b,
          ),
        };
      }),
    }));
  };
  const removeBulletPoint = (projectId, bulletId) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.map((proj) => {
        if (proj.id !== projectId) return proj;
        return {
          ...proj,
          bullets: proj.bullets.filter((b) => b.id !== bulletId),
        };
      }),
    }));
  };

  return (
    <AccordionSection
      title={`4. Featured Projects (${resumeData.projects.length}/3)`}
    >
      {resumeData.projects.map((proj, idx) => (
        <div key={proj.id} className="repeater-card">
          <div className="repeater-header">
            <span>Project #{idx + 1}</span>
            <button
              className="action-delete-btn"
              onClick={() => removeProject(proj.id)}
            >
              Remove Project
            </button>
          </div>
          <div className="input-group">
            <label>Project Title</label>
            <input
              type="text"
              placeholder="Weatherz Forecast Platform"
              value={proj.title}
              onChange={(e) =>
                handleProjectChange(proj.id, "title", e.target.value)
              }
            />
          </div>
          <div className="input-group">
            <label>Repository / Live URL</label>
            <input
              type="text"
              placeholder="https://github.com/..."
              value={proj.link}
              onChange={(e) =>
                handleProjectChange(proj.id, "link", e.target.value)
              }
            />
          </div>
          <div className="grid-2">
            <div className="input-group">
              <label>Start Date</label>
              <input
                type="text"
                placeholder="Jan 2024"
                value={proj.startDate}
                onChange={(e) =>
                  handleProjectChange(proj.id, "startDate", e.target.value)
                }
              />
            </div>
            <div className="input-group">
              <label>End Date</label>
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
          <div className="nested-bullet-manager">
            <label className="section-sublabel">Impact & Metrics Bullets</label>
            {proj.bullets.map((bullet, bIdx) => (
              <div key={bullet.id} className="bullet-row">
                <span className="bullet-indexer">•</span>
                <input
                  type="text"
                  placeholder={`Impact point #${bIdx + 1}`}
                  value={bullet.text}
                  onChange={(e) =>
                    handleBulletChange(proj.id, bullet.id, e.target.value)
                  }
                />
                {proj.bullets.length > 1 && (
                  <button
                    className="nested-delete-btn"
                    onClick={() => removeBulletPoint(proj.id, bullet.id)}
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
            <button
              className="action-add-btn simple-dashed-btn"
              onClick={() => addBulletPoint(proj.id)}
            >
              + Add Bullet Point
            </button>
          </div>
        </div>
      ))}
      <button className="action-add-btn" onClick={addProject}>
        + Add Engineering Project
      </button>
    </AccordionSection>
  );
}
