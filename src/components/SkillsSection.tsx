import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    if (activeCategory !== 'all' && cat.id !== activeCategory) {
      return null;
    }
    if (!searchQuery.trim()) {
      return cat;
    }
    const q = searchQuery.toLowerCase();
    const matchingSkills = cat.skills.filter((s) => s.toLowerCase().includes(q));
    const titleMatches = cat.title.toLowerCase().includes(q);

    if (titleMatches) return cat;
    if (matchingSkills.length > 0) {
      return { ...cat, skills: matchingSkills };
    }
    return null;
  }).filter(Boolean) as typeof SKILL_CATEGORIES;

  return (
    <section
      id="skills"
      className="px-4 sm:px-6 py-8 flex flex-col gap-6 transition-colors"
    >
      {/* Header */}
      <div className="flex flex-col gap-1">
        <span className="font-label-sm text-label-sm text-rose-600 dark:text-rose-400 uppercase tracking-wider font-semibold">
          02 / EXPERTISE &amp; SKILLS
        </span>
        <h2 className="font-headline-lg-mobile sm:text-[30px] sm:leading-[38px] text-[#1f1218] dark:text-[#fdf2f8] font-bold">
          Technical &amp; Problem-Solving Capabilities
        </h2>
        <p className="font-body-md text-body-md text-[#6b4355] dark:text-[#dcaec7] leading-relaxed">
          Categorized competencies developed through coursework, projects, and hands-on practice. No arbitrary percentage bars.
        </p>
      </div>

      {/* Quick Search & Filter Toolbar */}
      <div className="flex flex-col sm:flex-row gap-2.5">
        <div className="relative flex-1">
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-[18px] text-pink-400">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills (e.g., Python, C, Debugging)..."
            className="w-full pl-9 pr-8 py-2 rounded-xl bg-white dark:bg-[#281726] border border-pink-200 dark:border-[#43243a] text-[#1f1218] dark:text-[#fdf2f8] placeholder:text-pink-400/70 font-body-sm text-body-sm focus:outline-none focus:border-rose-400 shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-2.5 text-xs text-pink-400 hover:text-rose-600"
            >
              ✕
            </button>
          )}
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-full font-label-sm text-[11px] whitespace-nowrap transition-colors ${
              activeCategory === 'all'
                ? 'bg-rose-600 text-white font-bold'
                : 'bg-white dark:bg-[#281726] text-[#6b4355] dark:text-[#dcaec7] border border-pink-200 dark:border-[#43243a]'
            }`}
          >
            All Skills
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full font-label-sm text-[11px] whitespace-nowrap transition-colors ${
                activeCategory === cat.id
                  ? 'bg-rose-600 text-white font-bold'
                  : 'bg-white dark:bg-[#281726] text-[#6b4355] dark:text-[#dcaec7] border border-pink-200 dark:border-[#43243a]'
              }`}
            >
              {cat.title.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredCategories.map((cat) => (
          <div
            key={cat.id}
            id={`skill-category-${cat.id}`}
            className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#211320] border border-pink-200 dark:border-[#43243a] shadow-[0_2px_10px_rgba(244,114,182,0.08)] flex flex-col gap-2.5 hover:border-pink-300 dark:hover:border-pink-600 transition-all"
          >
            <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
              <span className="material-symbols-outlined text-[20px]">
                {cat.icon}
              </span>
              <h3 className="font-headline-sm text-[17px] text-[#1f1218] dark:text-[#fdf2f8] font-semibold">
                {cat.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {cat.skills.map((skill, sIdx) => {
                // Different styling highlights based on category
                const isLanguage = cat.id === 'prog-lang';
                const isDS = cat.id === 'ds-ml';
                const isAI = cat.id === 'ai-app';

                let tagClass = 'bg-pink-50 dark:bg-pink-950/40 text-rose-900 dark:text-rose-200 border-pink-200/70 dark:border-pink-900/50';
                if (isLanguage) {
                  tagClass = 'bg-pink-50 dark:bg-pink-950/40 border-pink-200 dark:border-pink-800 text-rose-800 dark:text-rose-300 font-label-md text-label-md';
                } else if (isDS) {
                  tagClass = 'bg-pink-100 dark:bg-pink-900/50 text-rose-950 dark:text-rose-100 border-pink-300/80 dark:border-pink-700 font-semibold';
                } else if (isAI) {
                  tagClass = 'bg-pink-50 dark:bg-pink-950/40 text-rose-900 dark:text-rose-200 border-pink-200 dark:border-pink-800 font-medium';
                }

                return (
                  <span
                    key={sIdx}
                    className={`px-3 py-1.5 rounded-full border text-xs sm:text-[13px] transition-transform hover:scale-105 select-none ${tagClass}`}
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
