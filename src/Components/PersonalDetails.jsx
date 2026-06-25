import AccordionSection from "./AccordionSection";
import "./SharedFormStyles.css";

export default function PersonalDetails({ resumeData, setResumeData }) {
  const handleChange = (field, value) => {
    setResumeData((prev) => ({
      ...prev,
      personal: { ...prev.personal, [field]: value },
    }));
  };

  return (
    <AccordionSection title="1. Personal Profile Header">
      <div className="input-group">
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Your Name"
          value={resumeData.personal.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Location</label>
        <input
          type="text"
          placeholder="Your Address"
          value={resumeData.personal.location}
          onChange={(e) => handleChange("location", e.target.value)}
        />
      </div>
      <div className="grid-2">
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="name@domain.com"
            value={resumeData.personal.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />{" "}
        </div>
        <div className="input-group">
          <label>Phone</label>
          <input
            type="text"
            placeholder="+91 XXXXX XXXXX"
            value={resumeData.personal.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </div>
      </div>
      <div className="input-group">
        <label>Portfolio URL</label>
        <input
          type="text"
          placeholder="https://portfolio.io"
          value={resumeData.personal.portfolio}
          onChange={(e) => handleChange("portfolio", e.target.value)}
        />
      </div>
      <div className="grid-2">
        <div className="input-group">
          <label>GitHub</label>
          <input
            type="text"
            placeholder="GitHub link"
            value={resumeData.personal.github}
            onChange={(e) => handleChange("github", e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>LinkedIn</label>
          <input
            type="text"
            placeholder="LinkedIn link"
            value={resumeData.personal.linkedin}
            onChange={(e) => handleChange("linkedin", e.target.value)}
          />
        </div>
      </div>
    </AccordionSection>
  );
}
