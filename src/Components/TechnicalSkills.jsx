import AccordionSection from "./AccordionSection";
import "./SharedFormStyles.css";

export default function TechnicalSkills({ resumeData, setResumeData }) {
  const addSkillCategory = () => {
    setResumeData((prev) => ({
      ...prev,
      skills: [
        ...prev.skills,
        { id: crypto.randomUUID(), category: "", details: "" },
      ],
    }));
  };

  const handleSkillChange = (id, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.map((item) => {
        item.id === id ? { ...item, [field]: value } : item;
      }),
    }));
  };

  const removeSkillCategory = (id) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.filter((item) => item.id !== id),
    }));
  };

  return (
    <AccordionSection
      title={`3. Technical Skills (${resumeData.skills.length})`}
    >
      {resumeData.skills.map((skill, idx) => (
        <div key={skill.id} className="repeater-card">
          <div className="repeater-header">
            <span>Skill Row #{idx + 1}</span>
            <button
              className="action-delete-btn"
              onClick={() => removeSkillCategory(skill.id)}
            >
              Delete
            </button>
          </div>
          <div className="input-group">
            <label>Custom Category Name</label>
            <input
              type="text"
              placeholder="e.g., Languages, Frameworks, Core CS"
              value={skill.category}
              onChange={(e) =>
                handleSkillChange(skill.id, "category", e.target.value)
              }
            />
          </div>
          <div className="input-group">
            <label>Skills List</label>
            <input
              type="text"
              placeholder="e.g., Java, Python, TypeScript (comma separated)"
              value={skill.details}
              onChange={(e) =>
                handleSkillChange(skill.id, "details", e.target.value)
              }
            />
          </div>
        </div>
      ))}
      <button className="action-add-btn" onClick={addSkillCategory}>
        + Add Skill Category
      </button>
    </AccordionSection>
  );
}
