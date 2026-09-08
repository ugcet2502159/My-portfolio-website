import React from 'react';

interface BottomNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const BOTTOM_ITEMS = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'projects', label: 'Projects', icon: 'terminal' },
  { id: 'skills', label: 'Skills', icon: 'hub' },
  { id: 'contact', label: 'Connect', icon: 'send' },
];

export const BottomNav: React.FC<BottomNavProps> = ({
  activeSection,
  onNavigate,
}) => {
  return (
    <nav
      id="bottom-nav"
      className="fixed bottom-0 left-0 right-0 w-full z-50 pb-safe bg-white/90 dark:bg-[#1e121d]/90 backdrop-blur-xl border-t border-pink-200 dark:border-[#43243a] shadow-[0_-2px_12px_rgba(244,114,182,0.12)] transition-colors"
    >
      <div className="max-w-md mx-auto flex justify-around items-center h-16 px-4">
        {BOTTOM_ITEMS.map((item) => {
          // Check if active: if section is 'home' or one of the subsections
          const isActive =
            activeSection === item.id ||
            (item.id === 'home' && ['home', 'about', 'leadership', 'education'].includes(activeSection));

          return (
            <button
              key={item.id}
              id={`bottom-nav-${item.id}`}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center min-w-[60px] h-12 rounded-xl transition-all active:scale-95 ${
                isActive
                  ? 'text-rose-600 dark:text-rose-400 font-bold'
                  : 'text-[#6b4355] dark:text-[#dcaec7] hover:text-rose-600'
              }`}
            >
              <span
                className={`material-symbols-outlined text-[22px] transition-transform ${
                  isActive ? 'scale-110' : ''
                }`}
              >
                {item.icon}
              </span>
              <span className="font-label-sm text-[10px] leading-3 mt-0.5">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
