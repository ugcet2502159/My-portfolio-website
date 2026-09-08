import React from 'react';
import { EDUCATION_ITEMS } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="px-4 sm:px-6 py-8 flex flex-col gap-6 transition-colors"
    >
      {/* Header */}
      <div className="flex flex-col gap-1">
        <span className="font-label-sm text-label-sm text-rose-600 dark:text-rose-400 uppercase tracking-wider font-semibold">
          06 / ACADEMIC BACKGROUND
        </span>
        <h2 className="font-headline-lg-mobile sm:text-[30px] sm:leading-[38px] text-[#1f1218] dark:text-[#fdf2f8] font-bold">
          Education Timeline
        </h2>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative pl-6 sm:pl-8 flex flex-col gap-6">
        {/* Continuous vertical connector line */}
        <div className="absolute left-2.5 sm:left-3 top-3 bottom-3 w-0.5 bg-pink-200 dark:bg-pink-900/60" />

        {EDUCATION_ITEMS.map((item, idx) => {
          const isBtech = item.id === 'btech';
          const isPU = item.id === 'pu-college';

          return (
            <div
              key={item.id}
              id={`edu-item-${item.id}`}
              className="relative flex flex-col gap-1 group"
            >
              {/* Timeline Bullet Node */}
              <div
                className={`absolute -left-6 sm:-left-8 top-1.5 w-3.5 h-3.5 rounded-full ${
                  isBtech
                    ? 'bg-rose-500 ring-4 ring-pink-200 dark:ring-pink-900'
                    : isPU
                    ? 'bg-pink-400 ring-4 ring-pink-100 dark:ring-pink-950'
                    : 'bg-pink-300 ring-4 ring-pink-50 dark:ring-pink-950/60'
                }`}
              />

              <div className="flex items-center justify-between">
                <span
                  className={`font-label-sm text-[11px] uppercase font-semibold ${
                    isBtech
                      ? 'text-rose-600 dark:text-rose-400'
                      : isPU
                      ? 'text-rose-500 dark:text-rose-400'
                      : 'text-[#6b4355] dark:text-[#dcaec7]'
                  }`}
                >
                  {item.statusLabel}
                </span>
              </div>

              <h3 className="font-headline-sm text-[18px] text-[#1f1218] dark:text-[#fdf2f8] font-bold">
                {item.degree}
              </h3>

              <p className="font-body-md text-body-md text-[#6b4355] dark:text-[#dcaec7]">
                {item.institution}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
