import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TerminalCard } from './TerminalCard';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="home"
      className="relative px-4 sm:px-6 pt-4 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-4">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-white dark:bg-[#281726] border border-pink-200 dark:border-[#43243a] shadow-[0_2px_8px_rgba(244,114,182,0.12)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
          </span>
          <span className="font-label-sm text-[11px] text-rose-600 dark:text-rose-300 font-semibold uppercase tracking-wider">
            {PERSONAL_INFO.badge}
          </span>
        </div>

        {/* Main Headline & Subtitle */}
        <div className="flex flex-col gap-1">
          <h1 className="font-display-hero-mobile sm:text-[42px] sm:leading-[50px] text-[#1f1218] dark:text-[#fdf2f8] tracking-tight font-bold">
            {PERSONAL_INFO.name}
          </h1>
          <p className="font-headline-sm text-[18px] sm:text-[22px] text-rose-600 dark:text-rose-400 font-medium leading-snug">
            {PERSONAL_INFO.role}
          </p>
        </div>

        {/* Verbatim Bio Intro */}
        <p className="font-body-md text-body-md text-[#6b4355] dark:text-[#dcaec7] leading-relaxed">
          {PERSONAL_INFO.bio}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
          <button
            id="hero-view-projects-btn"
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-300 via-pink-200 to-rose-200 dark:from-pink-600 dark:via-rose-600 dark:to-pink-500 text-rose-950 dark:text-white font-label-md text-label-md border border-pink-300 dark:border-pink-500 shadow-[0_4px_14px_rgba(244,114,182,0.28)] active:scale-95 transition-all hover:brightness-95 font-bold"
          >
            <span>View My Projects</span>
            <span className="material-symbols-outlined text-[18px] text-rose-900 dark:text-white">
              arrow_forward
            </span>
          </button>

          <button
            id="hero-connect-btn"
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-[#281726] text-rose-950 dark:text-[#fdf2f8] border border-pink-200 dark:border-[#43243a] font-label-md text-label-md shadow-xs active:scale-95 transition-all hover:bg-pink-50 dark:hover:bg-pink-950/30"
          >
            <span>Connect With Me</span>
            <span className="material-symbols-outlined text-[18px] text-rose-600 dark:text-rose-400">
              send
            </span>
          </button>
        </div>

        {/* Social Links Strip */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            id="github-profile-link"
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-[#281726] border border-pink-200 dark:border-[#43243a] text-[#1f1218] dark:text-[#fdf2f8] font-label-md text-label-md shadow-xs hover:border-pink-300 dark:hover:border-pink-600 active:opacity-80 transition-all"
          >
            <svg
              className="w-4 h-4 fill-current text-rose-500"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span className="text-xs">{PERSONAL_INFO.githubUser}</span>
          </a>

          <a
            id="linkedin-profile-link"
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-[#281726] border border-pink-200 dark:border-[#43243a] text-rose-700 dark:text-rose-300 font-label-md text-label-md shadow-xs hover:border-pink-300 dark:hover:border-pink-600 active:opacity-80 transition-all"
          >
            <svg
              className="w-4 h-4 fill-current text-rose-500"
              viewBox="0 0 24 24"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
            <span className="text-xs">{PERSONAL_INFO.linkedinUser}</span>
          </a>
        </div>

        {/* Technical Terminal Card */}
        <TerminalCard onRunCommand={(cmd) => onNavigate(cmd)} />
      </div>
    </section>
  );
};
