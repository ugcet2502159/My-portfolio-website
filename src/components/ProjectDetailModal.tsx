import React, { useState } from 'react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  // Simulator states for IoT
  const [iotMoisture, setIotMoisture] = useState(30);
  const [iotPumpManual, setIotPumpManual] = useState<boolean | null>(null);
  const isPumpOn = iotPumpManual !== null ? iotPumpManual : iotMoisture < 35;

  // Simulator states for 2D Graphics
  const [angle, setAngle] = useState(45);
  const [scale, setScale] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [shape, setShape] = useState<'square' | 'triangle' | 'star'>('square');

  const rad = (angle * Math.PI) / 180;
  const cos = Math.cos(rad).toFixed(2);
  const sin = Math.sin(rad).toFixed(2);

  return (
    <div
      id="project-detail-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        id="project-detail-modal-container"
        className="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-[#211320] border border-pink-200 dark:border-[#43243a] shadow-[0_20px_50px_rgba(244,114,182,0.2)] p-6 flex flex-col gap-5 max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-pink-50 dark:bg-pink-950/60 text-rose-700 dark:text-rose-300 hover:bg-pink-100 dark:hover:bg-pink-900 transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Modal Header */}
        <div className="flex flex-col gap-1 pr-8 border-b border-pink-100 dark:border-[#43243a] pb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-pink-100 dark:bg-pink-900/60 text-rose-700 dark:text-rose-300 font-label-sm text-[11px] font-semibold border border-pink-200 dark:border-pink-800">
              {project.category}
            </span>
            <span className="text-[11px] font-code-mono text-rose-600 dark:text-rose-400 font-semibold">
              • {project.status}
            </span>
          </div>
          <h3 className="font-headline-md text-[20px] sm:text-[23px] text-[#1f1218] dark:text-[#fdf2f8] font-bold">
            {project.title}
          </h3>
          <p className="font-body-sm text-body-sm text-[#6b4355] dark:text-[#dcaec7]">
            {project.description}
          </p>
        </div>

        {/* Dynamic Project Deep Dive */}
        {project.type === 'iot-simulator' ? (
          <div className="flex flex-col gap-4">
            {/* Live Interactive Simulator Console */}
            <div className="p-4 rounded-xl bg-pink-50/60 dark:bg-[#281726] border border-pink-200 dark:border-[#43243a] flex flex-col gap-3">
              <div className="flex items-center justify-between border-b border-pink-200/80 dark:border-pink-900/50 pb-2">
                <span className="font-code-mono text-xs text-rose-700 dark:text-rose-300 font-bold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">sensors</span>
                  Blynk IoT &amp; NodeMCU Telemetry Console
                </span>
                <span className="text-[10px] font-code-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  MQTT / Blynk Cloud: Connected
                </span>
              </div>

              {/* Slider for soil moisture */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between text-xs font-code-mono">
                  <span className="text-[#6b4355] dark:text-[#dcaec7]">Simulate Soil Moisture:</span>
                  <span className="font-bold text-rose-600 dark:text-rose-400">{iotMoisture}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="95"
                  value={iotMoisture}
                  onChange={(e) => {
                    setIotMoisture(Number(e.target.value));
                    setIotPumpManual(null); // return to auto logic
                  }}
                  className="w-full accent-rose-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#6b4355] dark:text-[#dcaec7]">
                  <span>5% (Dry soil)</span>
                  <span>Threshold: 35%</span>
                  <span>95% (Moist soil)</span>
                </div>
              </div>

              {/* Status Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-center text-xs font-code-mono">
                <div className="p-2.5 rounded-lg bg-white dark:bg-[#1e121d] border border-pink-200 dark:border-[#43243a]">
                  <span className="text-[10px] text-[#6b4355] dark:text-[#dcaec7] block">Analog Pin A0</span>
                  <strong className="text-rose-600 dark:text-rose-400 text-sm">
                    {Math.round((1024 * (100 - iotMoisture)) / 100)} ADC
                  </strong>
                </div>
                <div className="p-2.5 rounded-lg bg-white dark:bg-[#1e121d] border border-pink-200 dark:border-[#43243a]">
                  <span className="text-[10px] text-[#6b4355] dark:text-[#dcaec7] block">Digital Pin D1 (Relay)</span>
                  <strong className={isPumpOn ? 'text-emerald-600 font-bold text-sm' : 'text-zinc-400 text-sm'}>
                    {isPumpOn ? 'HIGH (Closed)' : 'LOW (Open)'}
                  </strong>
                </div>
                <div className="p-2.5 rounded-lg bg-white dark:bg-[#1e121d] border border-pink-200 dark:border-[#43243a] col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-[#6b4355] dark:text-[#dcaec7] block">Submersible Pump</span>
                  <strong className={isPumpOn ? 'text-emerald-600 font-bold text-sm' : 'text-zinc-400 text-sm'}>
                    {isPumpOn ? '💧 PUMPING' : 'IDLE'}
                  </strong>
                </div>
              </div>

              {/* Manual Override Control */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] font-code-mono text-[#6b4355] dark:text-[#dcaec7]">
                  Manual Blynk Switch:
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIotPumpManual(true)}
                    className={`px-2.5 py-1 rounded text-[11px] font-code-mono transition-colors ${
                      isPumpOn ? 'bg-emerald-600 text-white font-bold' : 'bg-pink-100 dark:bg-pink-900 text-rose-900 dark:text-rose-200'
                    }`}
                  >
                    Force ON
                  </button>
                  <button
                    onClick={() => setIotPumpManual(false)}
                    className={`px-2.5 py-1 rounded text-[11px] font-code-mono transition-colors ${
                      !isPumpOn ? 'bg-zinc-600 text-white font-bold' : 'bg-pink-100 dark:bg-pink-900 text-rose-900 dark:text-rose-200'
                    }`}
                  >
                    Force OFF
                  </button>
                  <button
                    onClick={() => setIotPumpManual(null)}
                    className="px-2 py-1 rounded text-[10px] font-code-mono bg-white dark:bg-[#1e121d] border border-pink-200 dark:border-[#43243a] text-rose-600 dark:text-rose-400"
                  >
                    Reset Auto
                  </button>
                </div>
              </div>
            </div>

            {/* Hardware list */}
            <div className="flex flex-col gap-1.5">
              <span className="font-label-sm text-[11px] text-rose-600 dark:text-rose-400 uppercase font-semibold">
                Hardware Components Employed
              </span>
              <ul className="list-disc list-inside text-body-sm text-[#6b4355] dark:text-[#dcaec7] flex flex-col gap-1 text-[13px]">
                {project.fullDetails.hardwareComponents?.map((comp, idx) => (
                  <li key={idx}>{comp}</li>
                ))}
              </ul>
            </div>

            {/* Key Technical Outcomes */}
            <div className="flex flex-col gap-1.5">
              <span className="font-label-sm text-[11px] text-rose-600 dark:text-rose-400 uppercase font-semibold">
                Key Technical Accomplishments
              </span>
              <ul className="list-disc list-inside text-body-sm text-[#6b4355] dark:text-[#dcaec7] flex flex-col gap-1 text-[13px]">
                {project.fullDetails.keyOutcomes.map((out, idx) => (
                  <li key={idx}>{out}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          /* 2D Graphics Deep Dive */
          <div className="flex flex-col gap-4">
            {/* Interactive Canvas */}
            <div className="p-4 rounded-xl bg-pink-50/60 dark:bg-[#281726] border border-pink-200 dark:border-[#43243a] flex flex-col gap-3">
              <div className="flex items-center justify-between border-b border-pink-200/80 dark:border-pink-900/50 pb-2">
                <span className="font-code-mono text-xs text-rose-700 dark:text-rose-300 font-bold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">draw</span>
                  2D Cartesian Affine Transformation Canvas
                </span>
                <div className="flex items-center gap-1">
                  {(['square', 'triangle', 'star'] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => setShape(s)}
                      className={`px-2 py-0.5 text-[10px] font-code-mono rounded uppercase ${
                        shape === s
                          ? 'bg-rose-600 text-white font-bold'
                          : 'bg-white dark:bg-[#1e121d] text-[#6b4355] dark:text-[#dcaec7] border border-pink-200 dark:border-[#43243a]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Visual SVG Stage */}
              <div className="relative w-full h-44 rounded-xl bg-white dark:bg-[#1b101a] border border-pink-200/80 dark:border-[#43243a] overflow-hidden flex items-center justify-center">
                <svg className="w-full h-full" viewBox="-80 -80 160 160">
                  {/* Grid Lines */}
                  <line x1="-80" y1="0" x2="80" y2="0" stroke="#fbcfe8" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="0" y1="-80" x2="0" y2="80" stroke="#fbcfe8" strokeWidth="1" strokeDasharray="2 2" />
                  <circle cx="0" cy="0" r="50" fill="none" stroke="#fce7f3" strokeDasharray="3 3" />

                  {/* Transformed Object */}
                  <g transform={`translate(${translateX}, ${translateY}) rotate(${angle}) scale(${scale})`}>
                    {shape === 'square' && (
                      <rect
                        x="-25"
                        y="-25"
                        width="50"
                        height="50"
                        fill="rgba(244, 114, 182, 0.25)"
                        stroke="#e11d48"
                        strokeWidth="2"
                        rx="4"
                      />
                    )}
                    {shape === 'triangle' && (
                      <polygon
                        points="0,-30 28,22 -28,22"
                        fill="rgba(244, 114, 182, 0.25)"
                        stroke="#e11d48"
                        strokeWidth="2"
                      />
                    )}
                    {shape === 'star' && (
                      <polygon
                        points="0,-30 9,-10 30,-8 14,7 19,28 0,16 -19,28 -14,7 -30,-8 -9,-10"
                        fill="rgba(244, 114, 182, 0.25)"
                        stroke="#e11d48"
                        strokeWidth="2"
                      />
                    )}
                    <circle cx="0" cy="0" r="3" fill="#be123c" />
                  </g>
                </svg>
              </div>

              {/* Transformation Sliders */}
              <div className="grid grid-cols-2 gap-3 text-xs font-code-mono">
                <div className="flex flex-col gap-1">
                  <span className="text-[#6b4355] dark:text-[#dcaec7]">Rotation: {angle}°</span>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={angle}
                    onChange={(e) => setAngle(Number(e.target.value))}
                    className="accent-rose-500 cursor-pointer"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[#6b4355] dark:text-[#dcaec7]">Scale Factor: {scale.toFixed(1)}x</span>
                  <input
                    type="range"
                    min="0.4"
                    max="1.6"
                    step="0.1"
                    value={scale}
                    onChange={(e) => setScale(Number(e.target.value))}
                    className="accent-rose-500 cursor-pointer"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[#6b4355] dark:text-[#dcaec7]">Translate X: {translateX}px</span>
                  <input
                    type="range"
                    min="-40"
                    max="40"
                    value={translateX}
                    onChange={(e) => setTranslateX(Number(e.target.value))}
                    className="accent-rose-500 cursor-pointer"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[#6b4355] dark:text-[#dcaec7]">Translate Y: {translateY}px</span>
                  <input
                    type="range"
                    min="-40"
                    max="40"
                    value={translateY}
                    onChange={(e) => setTranslateY(Number(e.target.value))}
                    className="accent-rose-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Matrix display */}
              <div className="p-2.5 rounded-lg bg-white dark:bg-[#1e121d] border border-pink-200 dark:border-[#43243a] text-center font-code-mono text-[11px] text-[#6b4355] dark:text-[#dcaec7]">
                <span className="text-rose-600 dark:text-rose-400 font-bold block mb-1">
                  2D Affine Transformation Matrix [M]:
                </span>
                <span className="text-zinc-800 dark:text-pink-100">
                  [{cos} • {scale}, -{sin} • {scale}, {translateX}] <br />
                  [{sin} • {scale}, &nbsp;{cos} • {scale}, {translateY}] <br />
                  [0, 0, 1]
                </span>
              </div>
            </div>

            {/* Key Technical Outcomes */}
            <div className="flex flex-col gap-1.5">
              <span className="font-label-sm text-[11px] text-rose-600 dark:text-rose-400 uppercase font-semibold">
                Key Computer Graphics Concepts
              </span>
              <ul className="list-disc list-inside text-body-sm text-[#6b4355] dark:text-[#dcaec7] flex flex-col gap-1 text-[13px]">
                {project.fullDetails.keyOutcomes.map((out, idx) => (
                  <li key={idx}>{out}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Bottom Done button */}
        <div className="flex justify-end pt-2 border-t border-pink-100 dark:border-[#43243a]">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-pink-300 via-pink-200 to-rose-200 text-rose-950 font-label-sm text-xs font-bold border border-pink-300 shadow-xs hover:brightness-95 transition-all"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
