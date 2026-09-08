import React from 'react';
import { LEADERSHIP_ITEMS } from '../data/portfolioData';

export const LeadershipSection: React.FC = () => {
  return (
    <section
      id="leadership"
      className="px-4 sm:px-6 py-8 flex flex-col gap-6 bg-white dark:bg-[#1e121d] border-y border-pink-200/60 dark:border-[#43243a] transition-colors"
    >
      {/* Header */}
      <div className="flex flex-col gap-1">
        <span className="font-label-sm text-label-sm text-rose-600 dark:text-rose-400 uppercase tracking-wider font-semibold">
          05 / LEADERSHIP &amp; CO-CURRICULAR
        </span>
        <h2 className="font-headline-lg-mobile sm:text-[30px] sm:leading-[38px] text-[#1f1218] dark:text-[#fdf2f8] font-bold">
          Leadership, Responsibility &amp; Teamwork
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {LEADERSHIP_ITEMS.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className="p-4 rounded-2xl bg-pink-50/40 dark:bg-[#281726]/70 border border-pink-200/80 dark:border-[#43243a] shadow-[0_2px_8px_rgba(244,114,182,0.06)] flex items-start gap-3 hover:border-pink-300 dark:hover:border-pink-600 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-pink-200 dark:bg-pink-900/60 border border-pink-300 dark:border-pink-700 flex items-center justify-center shrink-0 text-rose-950 dark:text-rose-200">
              <span className="material-symbols-outlined text-[20px]">
                {item.icon}
              </span>
            </div>
            <div className="flex flex-col">
              <h3 className="font-headline-sm text-[17px] text-[#1f1218] dark:text-[#fdf2f8] font-bold">
                {item.title}
              </h3>
              <p className="font-body-sm text-body-sm text-[#6b4355] dark:text-[#dcaec7] mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
