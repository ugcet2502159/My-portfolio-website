import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface ProjectsSectionProps {
  onOpenProjectDetail: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenProjectDetail,
}) => {
  // Interactive mini-simulator states for Soil Moisture Project
  const [soilMoisture, setSoilMoisture] = useState<number>(28); // Starts low to show pump active
  const [pumpActive, setPumpActive] = useState<boolean>(true);
  const [autoMode, setAutoMode] = useState<boolean>(true);

  // Auto pump logic: if moisture < 35%, pump activates
  useEffect(() => {
    if (autoMode) {
      if (soilMoisture < 35) {
        setPumpActive(true);
      } else {
        setPumpActive(false);
      }
    }
  }, [soilMoisture, autoMode]);

  // Interactive mini-simulator states for 2D Graphics Project
  const [rotationAngle, setRotationAngle] = useState<number>(35);
  const [scaleFactor, setScaleFactor] = useState<number>(1.1);
  const [showCartesianGrid, setShowCartesianGrid] = useState<boolean>(true);

  return (
    <section
      id="projects"
      className="px-4 sm:px-6 py-8 flex flex-col gap-6 bg-pink-50/40 dark:bg-[#1b101a] border-y border-pink-200/60 dark:border-[#43243a] transition-colors"
    >
      {/* Section Header */}
      <div className="flex flex-col gap-1">
        <span className="font-label-sm text-label-sm text-rose-600 dark:text-rose-400 uppercase tracking-wider font-semibold">
          03 / FEATURED WORK
        </span>
        <h2 className="font-headline-lg-mobile sm:text-[30px] sm:leading-[38px] text-[#1f1218] dark:text-[#fdf2f8] font-bold">
          Academic &amp; Hands-On Projects
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {/* Project 1: Smart Soil Moisture Detection */}
        <div
          id="project-smart-soil-moisture"
          className="rounded-2xl bg-white dark:bg-[#211320] p-4 sm:p-6 shadow-[0_4px_16px_rgba(244,114,182,0.08)] border border-pink-200 dark:border-[#43243a] flex flex-col gap-4 transition-all"
        >
          {/* Header & Status */}
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-full bg-pink-100 dark:bg-pink-900/60 border border-pink-200 dark:border-pink-800 text-rose-700 dark:text-rose-200 font-label-sm text-label-sm font-semibold">
              IoT &amp; Embedded Systems
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-code-mono text-rose-600 dark:text-rose-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping"></span>
              Active Telemetry
            </span>
          </div>

          <h3 className="font-headline-md text-[21px] sm:text-[24px] text-[#1f1218] dark:text-[#fdf2f8] font-bold">
            Smart Soil Moisture Detection &amp; Automatic Irrigation System
          </h3>

          <p className="font-body-md text-body-md text-[#6b4355] dark:text-[#dcaec7] leading-relaxed">
            An IoT-based system designed to monitor soil moisture and support automatic irrigation based on soil moisture conditions.
          </p>

          {/* Hardware Pipeline Architecture */}
          <div className="p-3 sm:p-4 rounded-xl bg-pink-50/60 dark:bg-[#2a1728]/70 border border-pink-200/70 dark:border-[#43243a] flex flex-col gap-2">
            <span className="font-label-sm text-[11px] text-rose-600 dark:text-rose-300 uppercase font-semibold">
              Hardware Pipeline Architecture
            </span>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2 sm:p-3 rounded-lg bg-white dark:bg-[#1e121d] border border-pink-200/80 dark:border-[#43243a] shadow-xs flex flex-col items-center">
                <span className="material-symbols-outlined text-[20px] text-rose-500">
                  water_drop
                </span>
                <span className="font-label-sm text-[10px] text-[#1f1218] dark:text-[#fdf2f8] mt-1 font-medium">
                  Moisture Sensor
                </span>
              </div>
              <div className="p-2 sm:p-3 rounded-lg bg-white dark:bg-[#1e121d] border border-pink-200/80 dark:border-[#43243a] shadow-xs flex flex-col items-center">
                <span className="material-symbols-outlined text-[20px] text-rose-500">
                  memory
                </span>
                <span className="font-label-sm text-[10px] text-[#1f1218] dark:text-[#fdf2f8] mt-1 font-medium">
                  NodeMCU / ESP
                </span>
              </div>
              <div className="p-2 sm:p-3 rounded-lg bg-white dark:bg-[#1e121d] border border-pink-200/80 dark:border-[#43243a] shadow-xs flex flex-col items-center">
                <span className="material-symbols-outlined text-[20px] text-rose-500">
                  power
                </span>
                <span className="font-label-sm text-[10px] text-[#1f1218] dark:text-[#fdf2f8] mt-1 font-medium">
                  Relay &amp; Pump
                </span>
              </div>
            </div>
          </div>

          {/* Highlight Banner */}
          <div className="p-3 rounded-xl bg-pink-50 dark:bg-[#281726] border border-pink-200 dark:border-[#43243a] text-rose-950 dark:text-rose-100 font-body-sm text-body-sm flex items-start gap-2.5">
            <span className="material-symbols-outlined text-rose-500 text-[20px] shrink-0 mt-0.5">
              check_circle
            </span>
            <span className="leading-snug">
              The system activates irrigation based on soil moisture conditions and provides monitoring/control through Blynk.
            </span>
          </div>

          {/* Interactive Live Telemetry Simulator Box */}
          <div className="p-3 sm:p-4 rounded-xl bg-white dark:bg-[#1b101a] border border-pink-200/90 dark:border-[#43243a] flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-pink-100 dark:border-pink-900/40 pb-2">
              <span className="font-code-mono text-[11px] text-rose-600 dark:text-rose-300 font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px]">tune</span>
                Live NodeMCU Telemetry Simulator
              </span>
              <span className="text-[10px] font-code-mono px-2 py-0.5 rounded bg-pink-100 dark:bg-pink-950 text-rose-700 dark:text-rose-300 border border-pink-200 dark:border-pink-900">
                ESP8266: Online
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs font-code-mono">
                <span className="text-[#6b4355] dark:text-[#dcaec7]">
                  Moisture Probe Level:
                </span>
                <span className="font-bold text-rose-600 dark:text-rose-400">
                  {soilMoisture}% ({soilMoisture < 35 ? 'DRY - Needs Water' : 'OPTIMAL'})
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="95"
                value={soilMoisture}
                onChange={(e) => setSoilMoisture(Number(e.target.value))}
                className="w-full accent-rose-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#6b4355] dark:text-[#dcaec7]">
                <span>5% (Bone Dry)</span>
                <span>Threshold: 35%</span>
                <span>95% (Saturated)</span>
              </div>
            </div>

            {/* Relay & Pump Status Indicator */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full ${
                    pumpActive
                      ? 'bg-emerald-500 ring-4 ring-emerald-200 dark:ring-emerald-950 animate-pulse'
                      : 'bg-zinc-400'
                  }`}
                />
                <span className="font-label-sm text-[11px] text-[#1f1218] dark:text-[#fdf2f8]">
                  Water Pump:{' '}
                  <strong className={pumpActive ? 'text-emerald-600 dark:text-emerald-400' : 'text-zinc-500'}>
                    {pumpActive ? 'ACTIVE (Pumping Water)' : 'STANDBY (Idle)'}
                  </strong>
                </span>
              </div>

              <button
                onClick={() => {
                  setAutoMode(!autoMode);
                  if (autoMode) setPumpActive(!pumpActive);
                }}
                className="text-[11px] font-code-mono px-2 py-1 rounded-lg bg-pink-100 dark:bg-pink-900/60 hover:bg-pink-200 dark:hover:bg-pink-800 text-rose-900 dark:text-rose-100 transition-colors"
              >
                {autoMode ? 'Auto Mode: ON' : 'Manual Mode'}
              </button>
            </div>
          </div>

          {/* Hardware & Platforms Tags */}
          <div className="flex flex-col gap-1.5">
            <span className="font-label-sm text-[11px] text-[#6b4355] dark:text-[#dcaec7]">
              Hardware &amp; Platforms:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {PROJECTS[0].tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-lg bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-[#43243a] text-rose-900 dark:text-rose-200 font-code-mono text-[11px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Link */}
          <div className="pt-1">
            <button
              onClick={() => onOpenProjectDetail(PROJECTS[0])}
              className="inline-flex items-center gap-1.5 text-rose-600 dark:text-rose-400 font-label-md text-label-md active:translate-x-1 transition-all font-bold hover:text-rose-700"
            >
              <span>Learn More &amp; View Architecture</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </button>
          </div>
        </div>

        {/* Project 2: 2D Graphics Project */}
        <div
          id="project-2d-graphics"
          className="rounded-2xl bg-white dark:bg-[#211320] p-4 sm:p-6 shadow-[0_4px_16px_rgba(244,114,182,0.08)] border border-pink-200 dark:border-[#43243a] flex flex-col gap-4 transition-all"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-full bg-pink-100 dark:bg-pink-900/60 border border-pink-200 dark:border-pink-800 text-rose-700 dark:text-rose-200 font-label-sm text-label-sm font-semibold">
              Computer Graphics
            </span>
            <span className="font-code-mono text-[11px] text-[#6b4355] dark:text-[#dcaec7]">
              Academic Showcase
            </span>
          </div>

          <h3 className="font-headline-md text-[21px] sm:text-[24px] text-[#1f1218] dark:text-[#fdf2f8] font-bold">
            2D Graphics Project
          </h3>

          <p className="font-body-md text-body-md text-[#6b4355] dark:text-[#dcaec7] leading-relaxed">
            An academic 2D graphics project demonstrating fundamental computer graphics concepts through graphical elements and visual interaction.
          </p>

          {/* Interactive Graphics Canvas Representation */}
          <div className="relative w-full h-44 rounded-xl bg-pink-50/70 dark:bg-[#261524] border border-pink-200/70 dark:border-[#43243a] overflow-hidden flex flex-col items-center justify-center p-3 text-center select-none">
            {/* SVG Canvas with real responsive transformation */}
            <div className="absolute inset-0 flex items-center justify-center text-pink-400 dark:text-pink-600/40">
              <svg className="w-full h-full" viewBox="-60 -60 120 120">
                {showCartesianGrid && (
                  <>
                    <line x1="-60" y1="0" x2="60" y2="0" stroke="currentColor" strokeDasharray="2 2" strokeWidth="0.8" opacity="0.4" />
                    <line x1="0" y1="-60" x2="0" y2="60" stroke="currentColor" strokeDasharray="2 2" strokeWidth="0.8" opacity="0.4" />
                    <circle cx="0" cy="0" r="40" fill="none" stroke="currentColor" strokeDasharray="3 3" strokeWidth="0.6" opacity="0.3" />
                  </>
                )}
                {/* Dynamically Transformed Polygon (Square / Diamond) */}
                <g transform={`rotate(${rotationAngle}) scale(${scaleFactor})`}>
                  <rect
                    x="-20"
                    y="-20"
                    width="40"
                    height="40"
                    fill="rgba(244, 114, 182, 0.15)"
                    stroke="#f43f5e"
                    strokeWidth="1.8"
                    rx="4"
                  />
                  <line x1="-20" y1="-20" x2="20" y2="20" stroke="#fb7185" strokeWidth="1" strokeDasharray="2 2" />
                  <circle cx="0" cy="0" r="3" fill="#be123c" />
                  <circle cx="-20" cy="-20" r="2.5" fill="#f43f5e" />
                  <circle cx="20" cy="20" r="2.5" fill="#f43f5e" />
                  <circle cx="20" cy="-20" r="2.5" fill="#f43f5e" />
                  <circle cx="-20" cy="20" r="2.5" fill="#f43f5e" />
                </g>
              </svg>
            </div>

            <div className="relative z-10 flex flex-col items-center pointer-events-none">
              <span className="material-symbols-outlined text-rose-500 text-[28px]">
                shapes
              </span>
              <span className="font-code-mono text-[11px] text-rose-700 dark:text-rose-300 font-semibold mt-0.5">
                Cartesian Transformation &amp; Coordinate Mapping
              </span>
              <span className="font-code-mono text-[10px] text-pink-600/80 dark:text-pink-400">
                θ: {rotationAngle}° | Scale: {scaleFactor.toFixed(1)}x
              </span>
            </div>
          </div>

          {/* Quick Transformation Sliders */}
          <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-pink-50/50 dark:bg-[#281726]/60 border border-pink-200/60 dark:border-[#43243a] text-[11px] font-code-mono">
            <div className="flex flex-col gap-1">
              <span className="text-[#6b4355] dark:text-[#dcaec7]">
                Rotate: {rotationAngle}°
              </span>
              <input
                type="range"
                min="0"
                max="360"
                value={rotationAngle}
                onChange={(e) => setRotationAngle(Number(e.target.value))}
                className="accent-rose-500 cursor-pointer"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#6b4355] dark:text-[#dcaec7]">
                Scale: {scaleFactor.toFixed(1)}x
              </span>
              <input
                type="range"
                min="0.5"
                max="1.8"
                step="0.1"
                value={scaleFactor}
                onChange={(e) => setScaleFactor(Number(e.target.value))}
                className="accent-rose-500 cursor-pointer"
              />
            </div>
          </div>

          {/* Highlight Concepts */}
          <div className="flex flex-wrap gap-2">
            {PROJECTS[1].tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-1 rounded-lg bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-[#43243a] text-rose-900 dark:text-rose-200 font-body-sm text-body-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Link */}
          <div className="pt-1">
            <button
              onClick={() => onOpenProjectDetail(PROJECTS[1])}
              className="inline-flex items-center gap-1.5 text-rose-600 dark:text-rose-400 font-label-md text-label-md active:translate-x-1 transition-all font-bold hover:text-rose-700"
            >
              <span>Learn More &amp; View Code Pipeline</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
