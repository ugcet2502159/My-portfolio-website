import React from 'react';

interface NavigationDrawerProps {
  isOpen: boolean;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onClose: () => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: 'cottage' },
  { id: 'about', label: 'About', icon: 'account_circle' },
  { id: 'skills', label: 'Skills', icon: 'neurology' },
  { id: 'projects', label: 'Projects', icon: 'deployed_code' },
  { id: 'certifications', label: 'Certifications', icon: 'verified' },
  { id: 'leadership', label: 'Leadership', icon: 'groups' },
  { id: 'education', label: 'Education', icon: 'school' },
  { id: 'contact', label: 'Contact', icon: 'alternate_email' }
];

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  activeSection,
  onNavigate,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div
        id="drawer-backdrop"
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer Container */}
      <div
        id="mobile-drawer"
        className="fixed top-16 left-0 right-0 z-50 w-full bg-white/95 dark:bg-[#1e121d]/95 backdrop-blur-2xl border-b border-pink-200 dark:border-[#43243a] shadow-[0_16px_32px_rgba(244,114,182,0.15)] px-4 py-4 max-w-4xl mx-auto transition-all animate-in fade-in slide-in-from-top-2 duration-200"
      >
        <nav className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`drawer-link-${item.id}`}
                onClick={() => {
                  onNavigate(item.id);
                  onClose();
                }}
                className={`flex items-center gap-3 h-11 px-4 rounded-xl text-left font-label-md text-label-md transition-colors ${
                  isActive
                    ? 'bg-pink-100 dark:bg-pink-900/60 text-rose-700 dark:text-rose-200 font-bold'
                    : 'text-[#6b4355] dark:text-[#dcaec7] hover:bg-pink-50 dark:hover:bg-pink-950/40 hover:text-rose-600'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
};
