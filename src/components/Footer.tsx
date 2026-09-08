import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer
      id="app-footer"
      className="mt-8 px-4 sm:px-6 py-8 bg-white dark:bg-[#1e121d] border-t border-pink-100 dark:border-[#43243a] flex flex-col gap-4 text-center transition-colors"
    >
      <div className="flex flex-col items-center gap-1">
        <span className="font-headline-sm text-[18px] text-[#1f1218] dark:text-[#fdf2f8] font-bold">
          {PERSONAL_INFO.name}
        </span>
        <span className="font-body-sm text-body-sm text-[#6b4355] dark:text-[#dcaec7]">
          B.Tech – Artificial Intelligence &amp; Data Science • REVA University
        </span>
      </div>

      {/* Quick Footer Links */}
      <div className="flex items-center justify-center gap-4">
        <a
          id="footer-github-link"
          href={PERSONAL_INFO.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-label-md text-label-md text-rose-600 dark:text-rose-400 hover:underline font-semibold"
        >
          GitHub
        </a>
        <span className="text-pink-300 dark:text-pink-700">•</span>
        <a
          id="footer-linkedin-link"
          href={PERSONAL_INFO.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-label-md text-label-md text-rose-600 dark:text-rose-400 hover:underline font-semibold"
        >
          LinkedIn
        </a>
      </div>

      <p className="font-body-sm text-body-sm text-pink-400 dark:text-pink-500/80 italic">
        {PERSONAL_INFO.quote}
      </p>
    </footer>
  );
};
