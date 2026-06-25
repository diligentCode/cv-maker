import AccordionSection from "./AccordionSection";
import "./SharedFormStyles.css";

export default function ProfileTagline({ resumeData, setResumeData }) {
  const handleChange = (field, value) => {
    setResumeData((prev) => ({
      ...prev,
      personal: { ...prev.personal, [field]: value },
    }));
  };

  return (
    <AccordionSection title="2. Title & Professional Tagline">
      <div className="input-group">
        <label>Target Core Role Title</label>
        <input
          type="text"
          placeholder="SOFTWARE ENGINEERING STUDENT | FULL STACK DEVELOPER"
          value={resumeData.personal.taglineTitle}
          onChange={(e) => handleChange("taglineTitle", e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Professional Mission Statement</label>
        <textarea
          rows="3"
          placeholder="Focused on building scalable web applications..."
          value={resumeData.personal.taglineDesc}
          onChange={(e) => handleChange("taglineDesc", e.target.value)}
        />
      </div>
    </AccordionSection>
  );
}
