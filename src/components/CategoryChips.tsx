"use client";

import { useState } from 'react';

const categories = [
  { id: 'all', label: 'All projects' },
  { id: 'mobile', label: 'Mobile apps' },
  { id: 'fullstack', label: 'Full-stack' },
  { id: 'marketing', label: 'Marketing & design' },
  { id: 'components', label: 'Components & UI' }
];

export default function CategoryChips({ onFilterChange }: { onFilterChange: (id: string) => void }) {
  const [active, setActive] = useState('all');

  const handleClick = (id: string) => {
    setActive(id);
    onFilterChange(id);
  };

  return (
    <div className="flex gap-6 overflow-x-auto scrollbar-hide py-0 border-b border-border-main">
      {categories.map(cat => (
        <button
          key={cat.id}
          onClick={() => handleClick(cat.id)}
          className={`shrink-0 py-3 text-[14px] transition-all relative ${
            active === cat.id
              ? 'text-green-primary font-medium'
              : 'text-ink-soft font-medium hover:text-ink-main'
          }`}
        >
          {cat.label}
          {active === cat.id && (
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-green-primary rounded-t-md"></div>
          )}
        </button>
      ))}
    </div>
  );
}
