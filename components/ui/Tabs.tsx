// src/components/ui/Tabs/Tabs.tsx
'use client';

import React, { useState } from 'react';

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultActiveTab?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, defaultActiveTab }) => {
  const initialTab = defaultActiveTab || tabs[0]?.label || '';
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  const currentTab = tabs.find((tab) => tab.label === activeTab);

  return (
    <div>
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={
              `px-4 py-2 -mb-px border-b-2
              ${activeTab === tab.label
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-gray-600 hover:text-blue-500'}`
            }
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">{currentTab?.content}</div>
    </div>
  );
};

export default Tabs;
