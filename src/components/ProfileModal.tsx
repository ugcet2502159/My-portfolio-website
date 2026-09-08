import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToContact: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  onNavigateToContact,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="profile-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        id="profile-modal-container"
        className="relative w-full max-w-md rounded-2xl bg-white dark:bg-[#211320] border border-pink-200 dark:border-[#43243a] shadow-[0_20px_50px_rgba(244,114,182,0.2)] p-6 flex flex-col gap-4 text-center"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-pink-50 dark:bg-pink-950/60 text-rose-700 dark:text-rose-300 hover:bg-pink-100 transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {/* Profile Avatar Badge */}
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-pink-300 via-pink-200 to-rose-200 dark:from-pink-600 dark:to-rose-400 border-2 border-pink-300 dark:border-pink-500 flex items-center justify-center text-rose-950 shadow-md">
          <span className="material-symbols-outlined text-[44px]">person</span>
        </div>

        <div>
          <h3 className="font-headline-md text-[20px] text-[#1f1218] dark:text-[#fdf2f8] font-bold">
            {PERSONAL_INFO.name}
          </h3>
          <p className="font-label-sm text-[12px] text-rose-600 dark:text-rose-400 font-semibold mt-0.5">
            B.Tech • Artificial Intelligence &amp; Data Science
          </p>
          <p className="font-body-sm text-xs text-[#6b4355] dark:text-[#dcaec7] mt-0.5">
            REVA University
          </p>
        </div>

        {/* Quick details */}
        <div className="p-3.5 rounded-xl bg-pink-50/60 dark:bg-[#281726]/60 border border-pink-200/80 dark:border-[#43243a] text-left text-xs flex flex-col gap-2 font-body-sm">
          <div className="flex items-center gap-2 text-[#6b4355] dark:text-[#dcaec7]">
            <span className="material-symbols-outlined text-[16px] text-rose-500">
              mail
            </span>
            <span className="truncate">{PERSONAL_INFO.email}</span>
          </div>
          <div className="flex items-center gap-2 text-[#6b4355] dark:text-[#dcaec7]">
            <span className="material-symbols-outlined text-[16px] text-rose-500">
              school
            </span>
            <span>REVA University • AI &amp; DS Specialization</span>
          </div>
          <div className="flex items-center gap-2 text-[#6b4355] dark:text-[#dcaec7]">
            <span className="material-symbols-outlined text-[16px] text-rose-500">
              location_on
            </span>
            <span>Bengaluru / Karnataka, India</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2 pt-1">
          <button
            onClick={() => {
              onClose();
              onNavigateToContact();
            }}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-pink-300 via-pink-200 to-rose-200 dark:from-pink-600 dark:via-rose-600 dark:to-pink-500 text-rose-950 dark:text-white font-label-md text-xs font-bold border border-pink-300 shadow-xs hover:brightness-95 transition-all"
          >
            Send Direct Message
          </button>
          <div className="grid grid-cols-2 gap-2">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 rounded-xl bg-white dark:bg-[#1e121d] border border-pink-200 dark:border-[#43243a] text-rose-800 dark:text-rose-300 font-label-sm text-xs hover:bg-pink-50 transition-colors"
            >
              GitHub Profile
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 rounded-xl bg-white dark:bg-[#1e121d] border border-pink-200 dark:border-[#43243a] text-rose-800 dark:text-rose-300 font-label-sm text-xs hover:bg-pink-50 transition-colors"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
