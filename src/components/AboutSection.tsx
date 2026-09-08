import React from 'react';
import { PERSONAL_INFO, HIGHLIGHT_CARDS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="px-4 sm:px-6 py-8 flex flex-col gap-6 bg-white dark:bg-[#1e121d] border-y border-pink-100 dark:border-[#43243a] shadow-[0_2px_12px_rgba(244,114,182,0.04)] transition-colors"
    >
      {/* Section Eyebrow & Title */}
      <div className="flex flex-col gap-1">
        <span className="font-label-sm text-label-sm text-rose-600 dark:text-rose-400 uppercase tracking-wider font-semibold">
          01 / ABOUT
        </span>
        <h2 className="font-headline-lg-mobile sm:text-[30px] sm:leading-[38px] text-[#1f1218] dark:text-[#fdf2f8] font-bold">
          Curiosity, Discipline &amp; Continuous Learning
        </h2>
      </div>

      {/* Verbatim Bio Block */}
      <div className="p-4 sm:p-5 rounded-2xl bg-pink-50/50 dark:bg-[#281726]/70 border border-pink-200/80 dark:border-[#43243a] text-[#1f1218] dark:text-[#fdf2f8] shadow-xs leading-relaxed font-body-md text-body-md flex flex-col gap-3">
        {PERSONAL_INFO.extendedBio.map((paragraph, idx) => (
          <p key={idx} className="text-[#1f1218] dark:text-[#fdf2f8]">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Highlight Mini-Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {HIGHLIGHT_CARDS.map((card) => (
          <div
            key={card.id}
            id={card.id}
            className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-[#241522] border border-pink-200/70 dark:border-[#43243a] shadow-[0_2px_8px_rgba(244,114,182,0.06)] hover:border-pink-300 dark:hover:border-pink-700 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-pink-100 dark:bg-pink-900/50 border border-pink-200 dark:border-pink-800 flex items-center justify-center shrink-0 text-rose-600 dark:text-rose-400">
              <span className="material-symbols-outlined text-[20px]">
                {card.icon}
              </span>
            </div>
            <div className="flex flex-col min-w-0">
              <h3 className="font-headline-sm text-[17px] text-[#1f1218] dark:text-[#fdf2f8] font-semibold">
                {card.title}
              </h3>
              <p className="font-body-sm text-body-sm text-[#6b4355] dark:text-[#dcaec7] mt-0.5">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
