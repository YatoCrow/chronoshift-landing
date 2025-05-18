// src/components/CollapsibleRuleSection.jsx
import { useState } from "react";
import "./CollapsibleRuleSection.css";

export default function CollapsibleRuleSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapsible-rule-section">
      <button
        className="collapsible-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && <div className="collapsible-body">{children}</div>}
    </div>
  );
}
