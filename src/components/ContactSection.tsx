import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    // Simulate sending and show clear feedback
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleOpenMailto = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || 'Prospective Collaborator'}`);
    const body = encodeURIComponent(
      `Hello Apeksha,\n\n${message || 'I came across your portfolio and would love to connect.'}\n\nFrom:\n${name || ''} (${email || ''})`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="px-4 sm:px-6 py-8 flex flex-col gap-6 transition-colors"
    >
      {/* Header */}
      <div className="flex flex-col gap-1">
        <span className="font-label-sm text-label-sm text-rose-600 dark:text-rose-400 uppercase tracking-wider font-semibold">
          08 / GET IN TOUCH
        </span>
        <h2 className="font-headline-lg-mobile sm:text-[30px] sm:leading-[38px] text-[#1f1218] dark:text-[#fdf2f8] font-bold">
          Let's Connect
        </h2>
        <p className="font-body-md text-body-md text-[#6b4355] dark:text-[#dcaec7] leading-relaxed">
          I'm always open to learning, collaborating, and exploring new opportunities in technology.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Primary Email Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#211320] border border-pink-200 dark:border-[#43243a] shadow-[0_4px_16px_rgba(244,114,182,0.08)] flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
              <span className="material-symbols-outlined text-[20px]">mail</span>
              <span className="font-label-sm text-label-sm uppercase font-semibold">
                Direct Email
              </span>
            </div>

            <button
              id="copy-email-btn"
              onClick={handleCopyEmail}
              className="text-[11px] font-code-mono px-2.5 py-1 rounded-lg bg-pink-50 dark:bg-pink-950/60 border border-pink-200 dark:border-pink-800 text-rose-700 dark:text-rose-300 hover:bg-pink-100 dark:hover:bg-pink-900 transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[14px]">
                {copiedEmail ? 'check' : 'content_copy'}
              </span>
              <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>

          <p className="font-headline-sm text-[18px] sm:text-[20px] text-[#1f1218] dark:text-[#fdf2f8] break-all font-semibold select-all">
            {PERSONAL_INFO.email}
          </p>

          <div className="pt-1 flex flex-wrap items-center gap-2">
            <a
              id="direct-email-link"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-300 via-pink-200 to-rose-200 dark:from-pink-600 dark:via-rose-600 dark:to-pink-500 text-rose-950 dark:text-white font-label-md text-label-md border border-pink-300 dark:border-pink-500 shadow-[0_2px_10px_rgba(244,114,182,0.2)] active:scale-95 transition-all hover:brightness-95 font-bold"
            >
              <span>Get In Touch</span>
              <span className="material-symbols-outlined text-[18px] text-rose-900 dark:text-white">
                send
              </span>
            </a>
          </div>
        </div>

        {/* Quick Direct Message Form */}
        <div className="p-4 sm:p-5 rounded-2xl bg-pink-50/50 dark:bg-[#281726]/70 border border-pink-200 dark:border-[#43243a] shadow-xs flex flex-col gap-3">
          <span className="font-headline-sm text-[18px] text-[#1f1218] dark:text-[#fdf2f8] font-semibold">
            Send a Note
          </span>

          <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-2.5">
            <input
              id="sender-name-input"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#1e121d] border border-pink-200 dark:border-[#43243a] text-[#1f1218] dark:text-[#fdf2f8] placeholder:text-pink-300 dark:placeholder:text-pink-600/70 font-body-sm text-body-sm focus:outline-none focus:border-rose-400 shadow-xs"
            />

            <input
              id="sender-email-input"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email Address"
              className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#1e121d] border border-pink-200 dark:border-[#43243a] text-[#1f1218] dark:text-[#fdf2f8] placeholder:text-pink-300 dark:placeholder:text-pink-600/70 font-body-sm text-body-sm focus:outline-none focus:border-rose-400 shadow-xs"
            />

            <textarea
              id="sender-message-input"
              rows={3}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message or Opportunity"
              className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#1e121d] border border-pink-200 dark:border-[#43243a] text-[#1f1218] dark:text-[#fdf2f8] placeholder:text-pink-300 dark:placeholder:text-pink-600/70 font-body-sm text-body-sm focus:outline-none focus:border-rose-400 shadow-xs resize-none"
            />

            <button
              id="transmit-note-btn"
              type="submit"
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-pink-300 via-pink-200 to-rose-200 dark:from-pink-600 dark:via-rose-600 dark:to-pink-500 text-rose-950 dark:text-white border border-pink-300 dark:border-pink-500 font-label-md text-label-md shadow-[0_4px_14px_rgba(244,114,182,0.22)] active:opacity-90 transition-all hover:brightness-95 font-bold cursor-pointer"
            >
              Transmit Note
            </button>
          </form>

          {submitted && (
            <div
              id="form-feedback"
              className="p-3 rounded-xl bg-white dark:bg-[#211320] text-rose-700 dark:text-rose-300 border border-pink-200 dark:border-pink-800 font-label-sm text-label-sm text-center flex flex-col gap-2 items-center"
            >
              <div className="flex items-center gap-1.5 font-bold">
                <span className="material-symbols-outlined text-[18px] text-emerald-500">
                  check_circle
                </span>
                <span>Thank you! Your note has been queued.</span>
              </div>
              <p className="text-[12px] text-[#6b4355] dark:text-[#dcaec7]">
                You can also launch your local email client directly with this message:
              </p>
              <button
                onClick={handleOpenMailto}
                className="px-3 py-1 rounded-lg bg-rose-600 text-white text-xs font-semibold hover:bg-rose-700 transition-colors"
              >
                Send via Default Email App
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
