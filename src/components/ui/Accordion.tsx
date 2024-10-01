// src/components/ui/Accordion/Accordion.tsx
'use client';

import React, { useState } from 'react';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="border rounded">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 focus:outline-none"
          >
            {item.title}
          </button>
          {activeIndex === index && (
            <div className="px-4 py-2">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
