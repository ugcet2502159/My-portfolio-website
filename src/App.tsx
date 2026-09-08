import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { NavigationDrawer } from './components/NavigationDrawer';
import { BottomNav } from './components/BottomNav';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { LeadershipSection } from './components/LeadershipSection';
import { EducationSection } from './components/EducationSection';
import { CurrentFocusSection } from './components/CurrentFocusSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CertificateModal } from './components/CertificateModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ProfileModal } from './components/ProfileModal';
import { Certificate, Project } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('apeksha_theme') === 'dark';
  });

  // Modal states
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);

  // Sync dark mode class with root html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('apeksha_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('apeksha_theme', 'light');
    }
  }, [isDarkMode]);

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'skills',
      'projects',
      'certifications',
      'leadership',
      'education',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const targetEl = document.getElementById(sectionId);
    if (targetEl) {
      const headerOffset = 64;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#fff5f7] dark:bg-[#150d14] text-[#1f1218] dark:text-[#fdf2f8] flex flex-col font-sans transition-colors duration-200">
      {/* Fixed Top Header */}
      <Header
        currentSection={activeSection}
        onNavigate={handleNavigate}
        isDrawerOpen={isDrawerOpen}
        onToggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
        onOpenProfile={() => setIsProfileOpen(true)}
      />

      {/* Navigation Drawer Menu */}
      <NavigationDrawer
        isOpen={isDrawerOpen}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onClose={() => setIsDrawerOpen(false)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-4xl mx-auto pt-16 pb-24 transition-colors">
        <HeroSection onNavigate={handleNavigate} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onOpenProjectDetail={(p) => setSelectedProject(p)} />
        <CertificationsSection onViewCertificate={(c) => setSelectedCert(c)} />
        <LeadershipSection />
        <EducationSection />
        <CurrentFocusSection />
        <ContactSection />
        <Footer />
      </main>

      {/* Fixed Bottom Navigation Bar */}
      <BottomNav
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Modals */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        onNavigateToContact={() => handleNavigate('contact')}
      />
    </div>
  );
}
