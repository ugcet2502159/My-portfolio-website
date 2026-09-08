import React from 'react';
import { CURRENT_FOCUS_DATA } from '../data/portfolioData';

export const CurrentFocusSection: React.FC = () => {
  return (
    <section
      id="focus"
      className="px-4 sm:px-6 py-8 flex flex-col gap-6 bg-pink-50/40 dark:bg-[#1e121d]/80 border-y border-pink-200/60 dark:border-[#43243a] transition-colors"
    >
      {/* Header */}
      <div className="flex flex-col gap-1">
        <span className="font-label-sm text-label-sm text-rose-600 dark:text-rose-400 uppercase tracking-wider font-semibold">
          07 / CURRENT FOCUS
        </span>
        <h2 className="font-headline-lg-mobile sm:text-[30px] sm:leading-[38px] text-[#1f1218] dark:text-[#fdf2f8] font-bold">
          Currently Learning &amp; Building
        </h2>
      </div>

      <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-[#211320] border border-pink-200 dark:border-[#43243a] shadow-[0_4px_16px_rgba(244,114,182,0.08)] flex flex-col gap-4">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-pink-100 dark:bg-pink-900/50 border border-pink-200 dark:border-pink-800 text-rose-700 dark:text-rose-300">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider">
            {CURRENT_FOCUS_DATA.badge}
          </span>
        </div>

        {/* Verbatim Text */}
        <p className="font-body-md text-body-md text-[#1f1218] dark:text-[#fdf2f8] leading-relaxed">
          {CURRENT_FOCUS_DATA.bio}
        </p>

        {/* Focus Highlights */}
        <div className="grid grid-cols-1 gap-2.5 pt-1">
          {CURRENT_FOCUS_DATA.points.map((point, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-pink-50/50 dark:bg-[#2a1728]/60 border border-pink-200 dark:border-[#43243a] flex items-center gap-3 hover:border-pink-300 dark:hover:border-pink-600 transition-all"
            >
              <span className="material-symbols-outlined text-rose-500 text-[20px] shrink-0">
                {point.icon}
              </span>
              <span className="font-label-md text-label-md text-[#1f1218] dark:text-[#fdf2f8]">
                {point.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
