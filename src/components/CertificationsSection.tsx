import React from 'react';
import { Certificate } from '../types';
import { CERTIFICATIONS } from '../data/portfolioData';

interface CertificationsSectionProps {
  onViewCertificate: (cert: Certificate) => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  onViewCertificate,
}) => {
  return (
    <section
      id="certifications"
      className="px-4 sm:px-6 py-8 flex flex-col gap-6 transition-colors"
    >
      {/* Header */}
      <div className="flex flex-col gap-1">
        <span className="font-label-sm text-label-sm text-rose-600 dark:text-rose-400 uppercase tracking-wider font-semibold">
          04 / CERTIFICATIONS
        </span>
        <h2 className="font-headline-lg-mobile sm:text-[30px] sm:leading-[38px] text-[#1f1218] dark:text-[#fdf2f8] font-bold">
          Verified Learning &amp; Training
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {CERTIFICATIONS.map((cert) => {
          const isWadhwani = cert.id === 'wadhwani';
          const icon = isWadhwani ? 'workspace_premium' : 'verified';

          return (
            <div
              key={cert.id}
              id={`cert-${cert.id}`}
              className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#211320] border border-pink-200 dark:border-[#43243a] shadow-[0_2px_10px_rgba(244,114,182,0.08)] flex flex-col justify-between gap-4 hover:border-pink-300 dark:hover:border-pink-600 transition-all"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-pink-100 dark:bg-pink-900/50 border border-pink-200 dark:border-pink-800 flex items-center justify-center text-rose-600 dark:text-rose-400">
                    <span className="material-symbols-outlined text-[22px]">
                      {icon}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-pink-50 dark:bg-pink-950/40 text-rose-900 dark:text-rose-200 font-label-sm text-label-sm border border-pink-200 dark:border-[#43243a]">
                    {cert.category}
                  </span>
                </div>

                <div>
                  <h3 className="font-headline-sm text-[18px] text-[#1f1218] dark:text-[#fdf2f8] font-bold">
                    {cert.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-[#6b4355] dark:text-[#dcaec7] mt-1 leading-normal">
                    {cert.subtitle}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  id={`btn-view-cert-${cert.id}`}
                  onClick={() => onViewCertificate(cert)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white dark:bg-[#281726] text-rose-950 dark:text-[#fdf2f8] font-label-sm text-label-sm shadow-xs border border-pink-200 dark:border-[#43243a] active:bg-pink-50 dark:active:bg-pink-950/40 transition-all hover:text-rose-600 dark:hover:text-rose-300 hover:border-pink-300 dark:hover:border-pink-600 font-medium"
                >
                  <span className="material-symbols-outlined text-[16px] text-rose-500">
                    visibility
                  </span>
                  <span>View Certificate</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
