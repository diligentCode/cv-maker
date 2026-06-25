import AccordionSection from "./AccordionSection";
import "./SharedFormStyles.css";

export default function AchievementsSection({ resumeData, setResumeData }) {
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
    <AccordionSection
      title={`6. Achievements & Honors (${resumeData.achievements.length}/3)`}
    >
      {resumeData.achievements.map((ach, idx) => (
        <div key={ach.id} className="repeater-card">
          <div className="repeater-header">
            <span>Achievement #{idx + 1}</span>
            <button
              className="action-delete-btn"
              onClick={() => removeAchievement(ach.id)}
            >
              Remove
            </button>
          </div>
          <div className="input-group">
            <label>Core Metric Tag (Bolded prefix)</label>
            <input
              type="text"
              placeholder="Algorithmic Efficiency:"
              value={ach.boldLabel}
              onChange={(e) =>
                handleAchievementChange(ach.id, "boldLabel", e.target.value)
              }
            />
          </div>
          <div className="input-group">
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
      <button className="action-add-btn" onClick={addAchievement}>
        + Add Achievement Record
      </button>
    </AccordionSection>
  );
}
