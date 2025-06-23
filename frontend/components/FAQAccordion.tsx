"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div
      style={{
        margin: "40px 0",
        padding: "20px",
        border: "1px solid #e5e5e5",
        borderRadius: "8px",
      }}
    >
      <h2
        style={{
          color: "#2C5680",
          borderBottom: "2px solid #2C5680",
          paddingBottom: "10px",
        }}
      >
        FAQ Components (Interactive Accordion)
      </h2>
      {items.map((item, index) => {
        const isOpen = openItems.has(index);
        return (
          <div key={index} className="faq-item">
            <div
              className={`faq-ques ${isOpen ? "active" : ""}`}
              onClick={() => toggleItem(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleItem(index);
                }
              }}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              {item.question}
            </div>
            <div
              id={`faq-answer-${index}`}
              className="faq-ans"
              style={{
                display: isOpen ? "block" : "none",
                transition: "all 0.3s ease-in-out",
              }}
              aria-hidden={!isOpen}
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          </div>
        );
      })}
    </div>
  );
}
