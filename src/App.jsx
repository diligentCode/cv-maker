import { useState } from "react";
import "./App.css";
import PersonalDetails from "./Components/PersonalDetails";
import ProfileTagline from "./Components/ProfileTagline";
import TechnicalSkills from "./Components/TechnicalSkills";

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
    peojects: [],
    education: [],
    acheievements: [],
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
        <duv className="form-scroll-wrapper">
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
          </div>
        </duv>
      </section>

      <section className="preview-section"></section>
    </div>
  );
}

export default App;
