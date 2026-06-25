import { useState } from "react";
import "./AccordionSection.css";

export default function AccordionSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-wrapper">
      <button
        className={`accordion-trigger ${isOpen ? "active-trigger" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className="arrow-icon">{isOpen ? "✕" : "+"}</span>
      </button>
      <div className={`accordion-panel ${isOpen ? "panel-expanded" : ""}`}>
        <div className="accordion-inner-content">{children}</div>
      </div>
    </div>
  );
}
