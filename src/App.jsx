import { useState } from "react";
import "./App.css";
import PersonalDetails from "./Components/PersonalDetails";
import ProfileTagline from "./Components/ProfileTagline";
import TechnicalSkills from "./Components/TechnicalSkills";
import ProjectsSection from "./Components/ProjectsSection";
import EducationSection from "./Components/EducationSection";
import AchievementsSection from "./Components/AchievementsSection";
import ResumePreview from "./Components/ResumePreview";

function App() {
  const [resumeData, setResumeData] = useState({
    personal: {
      name: "",
      location: "",
      email: "",
      phone: "",
      portfolio: "",
      github: "",
      linkedin: "",
      taglineTitle: "",
      taglineDesc: "",
    },
    skills: [],
    projects: [],
    education: [],
    achievements: [],
  });

  return (
    <div className="page-contaienr">
      <section className="form-section hide-on-print">
        <div className="form-header">
          <h2>CV Builder</h2>
          <button className="pdf" onClick={() => window.print()}>
            Download PDF
          </button>
        </div>
        <div className="form-scroll-wrapper">
          <div className="form-stack">
            <PersonalDetails
              resumeData={resumeData}
              setResumeData={setResumeData}
            ></PersonalDetails>
            <ProfileTagline
              resumeData={resumeData}
              setResumeData={setResumeData}
            />
            <TechnicalSkills
              resumeData={resumeData}
              setResumeData={setResumeData}
            />
            <ProjectsSection
              resumeData={resumeData}
              setResumeData={setResumeData}
            />
            <EducationSection
              resumeData={resumeData}
              setResumeData={setResumeData}
            />
            <AchievementsSection
              resumeData={resumeData}
              setResumeData={setResumeData}
            />
          </div>
        </div>
      </section>

      <section className="preview-section">
        <ResumePreview resumeData={resumeData}></ResumePreview>
      </section>
    </div>
  );
}

export default App;
