import React from 'react';
import { ViewScreen } from '../types';

interface HeaderProps {
  currentSection: string;
  onNavigate: (sectionId: string) => void;
  isDrawerOpen: boolean;
  onToggleDrawer: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onOpenProfile: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  isDrawerOpen,
  onToggleDrawer,
  isDarkMode,
  onToggleTheme,
  onOpenProfile,
}) => {
  return (
    <header
      id="app-header"
      className="fixed top-0 w-full z-50 pt-safe bg-white/85 dark:bg-[#1e121d]/90 backdrop-blur-xl border-b border-pink-100 dark:border-[#43243a] shadow-[0_2px_16px_rgba(244,114,182,0.08)] transition-colors"
    >
      <div className="max-w-4xl mx-auto h-16 px-4 sm:px-6 flex items-center justify-between">
        {/* Left: Hamburger & Brand Info */}
        <div className="flex items-center gap-2">
          <button
            id="menu-toggle-btn"
            aria-label="Open Navigation Menu"
            onClick={onToggleDrawer}
            className="w-11 h-11 flex items-center justify-center rounded-xl hover:bg-pink-50 dark:hover:bg-pink-950/40 active:scale-95 transition-all text-[#1f1218] dark:text-[#fdf2f8]"
          >
            <span className="material-symbols-outlined text-[22px]">
              {isDrawerOpen ? 'close' : 'menu'}
            </span>
          </button>

          <div
            onClick={() => onNavigate('home')}
            className="flex flex-col cursor-pointer select-none"
          >
            <div className="flex items-center gap-1.5">
              <span className="font-headline-sm text-[18px] sm:text-[20px] text-[#1f1218] dark:text-[#fdf2f8] tracking-tight font-semibold">
                Apeksha A.K.
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-pink-100 dark:bg-pink-900/50 text-rose-600 dark:text-rose-300 border border-pink-200 dark:border-pink-800 font-label-sm text-[11px] font-bold">
                <span className="material-symbols-outlined text-[12px]">auto_awesome</span>
                AI
              </span>
            </div>
            <span className="font-code-mono text-[11px] leading-3 text-[#6b4355] dark:text-[#dcaec7]">
              B.Tech AI &amp; DS
            </span>
          </div>
        </div>

        {/* Right: Theme Toggle & Avatar Action */}
        <div className="flex items-center gap-2">
          <button
            id="theme-toggle-btn"
            aria-label="Toggle Light/Dark Theme"
            onClick={onToggleTheme}
            className="w-11 h-11 flex items-center justify-center rounded-xl hover:bg-pink-50 dark:hover:bg-pink-950/40 text-[#6b4355] dark:text-[#dcaec7] active:scale-95 transition-all"
            title={isDarkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
          >
            <span className="material-symbols-outlined text-[20px]">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          <button
            id="profile-avatar-btn"
            aria-label="Student Profile"
            onClick={onOpenProfile}
            className="w-9 h-9 rounded-full bg-gradient-to-tr from-pink-300 to-pink-200 dark:from-pink-600 dark:to-rose-400 border border-pink-300/80 dark:border-pink-500/50 text-rose-950 flex items-center justify-center shadow-sm shadow-pink-300/40 active:scale-95 transition-all hover:ring-2 hover:ring-pink-300"
            title="View Student Profile"
          >
            <span className="material-symbols-outlined text-rose-950 dark:text-white text-[19px]">
              person
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
