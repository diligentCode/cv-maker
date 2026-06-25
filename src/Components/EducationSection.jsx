import AccordionSection from "./AccordionSection";
import "./SharedFormStyles.css";

export default function EducationSection({ resumeData, setResumeData }) {
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
  return (
    <AccordionSection title={`5. Education (${resumeData.education.length}/2)`}>
      {resumeData.education.map((edu, idx) => (
        <div key={edu.id} className="repeater-card">
          <div className="repeater-header">
            <span>Academic Target #{idx + 1}</span>
            <button
              className="action-delete-btn"
              onClick={() => removeEducation(edu.id)}
            >
              Remove
            </button>
          </div>
          <div className="input-group">
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
          <div className="input-group">
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
          <div className="grid-2">
            <div className="input-group">
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
            <div className="input-group">
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
      <button className="action-add-btn" onClick={addEducation}>
        + Add Education Line
      </button>
    </AccordionSection>
  );
}
