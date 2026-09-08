import React, { useState } from 'react';
import { Certificate } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  onClose,
}) => {
  const [copiedId, setCopiedId] = useState(false);

  if (!certificate) return null;

  const handleCopyId = () => {
    navigator.clipboard.writeText(certificate.credentialId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <div
      id="certificate-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        id="certificate-modal-container"
        className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-[#211320] border border-pink-200 dark:border-[#43243a] shadow-[0_20px_50px_rgba(244,114,182,0.2)] p-6 flex flex-col gap-5 max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-pink-50 dark:bg-pink-950/60 text-rose-700 dark:text-rose-300 hover:bg-pink-100 dark:hover:bg-pink-900 transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Certificate Header Banner */}
        <div className="flex items-center gap-3 border-b border-pink-100 dark:border-[#43243a] pb-4 pr-10">
          <div className="w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-900/50 border border-pink-200 dark:border-pink-800 flex items-center justify-center text-rose-600 dark:text-rose-400 shrink-0">
            <span className="material-symbols-outlined text-[26px]">
              workspace_premium
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-sm text-[11px] text-rose-600 dark:text-rose-400 uppercase tracking-wider font-semibold">
              Verified Credential • {certificate.category}
            </span>
            <h3 className="font-headline-sm text-[19px] text-[#1f1218] dark:text-[#fdf2f8] font-bold">
              {certificate.title}
            </h3>
          </div>
        </div>

        {/* Certificate Display Card */}
        <div className="p-4 rounded-xl bg-pink-50/50 dark:bg-[#281726]/60 border border-pink-200/80 dark:border-[#43243a] flex flex-col gap-3">
          <div className="flex justify-between items-center text-xs text-[#6b4355] dark:text-[#dcaec7]">
            <span>Issuing Organization:</span>
            <strong className="text-[#1f1218] dark:text-[#fdf2f8] font-semibold">
              {certificate.issuer}
            </strong>
          </div>
          <div className="flex justify-between items-center text-xs text-[#6b4355] dark:text-[#dcaec7]">
            <span>Issued To:</span>
            <strong className="text-[#1f1218] dark:text-[#fdf2f8] font-semibold">
              {PERSONAL_INFO.name}
            </strong>
          </div>
          <div className="flex justify-between items-center text-xs text-[#6b4355] dark:text-[#dcaec7]">
            <span>Issue Date:</span>
            <strong className="text-[#1f1218] dark:text-[#fdf2f8] font-semibold">
              {certificate.issueDate}
            </strong>
          </div>
          <div className="flex justify-between items-center text-xs text-[#6b4355] dark:text-[#dcaec7] pt-1 border-t border-pink-200/60 dark:border-[#43243a]">
            <span>Credential ID:</span>
            <span className="font-code-mono text-[11px] text-rose-700 dark:text-rose-300 font-bold">
              {certificate.credentialId}
            </span>
          </div>
        </div>

        {/* Summary Description */}
        <div className="flex flex-col gap-1.5">
          <span className="font-label-sm text-[11px] text-rose-600 dark:text-rose-400 uppercase font-semibold">
            Credential Scope
          </span>
          <p className="font-body-sm text-body-sm text-[#6b4355] dark:text-[#dcaec7] leading-relaxed">
            {certificate.summary}
          </p>
        </div>

        {/* Skills Verified Pills */}
        <div className="flex flex-col gap-2">
          <span className="font-label-sm text-[11px] text-rose-600 dark:text-rose-400 uppercase font-semibold">
            Competencies Verified
          </span>
          <div className="flex flex-wrap gap-2">
            {certificate.skillsVerified.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-white dark:bg-[#1e121d] border border-pink-200 dark:border-[#43243a] text-rose-900 dark:text-rose-200 font-label-sm text-[11px]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-2 pt-2 border-t border-pink-100 dark:border-[#43243a]">
          <button
            onClick={handleCopyId}
            className="w-full sm:w-auto px-4 py-2 rounded-xl bg-pink-100 dark:bg-pink-950/60 text-rose-900 dark:text-rose-200 font-label-sm text-xs hover:bg-pink-200 dark:hover:bg-pink-900 transition-colors flex items-center justify-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px]">
              {copiedId ? 'check' : 'content_copy'}
            </span>
            <span>{copiedId ? 'Copied ID' : 'Copy Credential ID'}</span>
          </button>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 rounded-xl bg-gradient-to-r from-pink-300 via-pink-200 to-rose-200 text-rose-950 font-label-sm text-xs font-bold border border-pink-300 shadow-xs hover:brightness-95 transition-all"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
