import React, { useState } from 'react';

interface TerminalCardProps {
  onRunCommand?: (cmd: string) => void;
}

export const TerminalCard: React.FC<TerminalCardProps> = ({ onRunCommand }) => {
  const [interactiveMode, setInteractiveMode] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<Array<{ cmd: string; out: string | React.ReactNode }>>([]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let output: string | React.ReactNode = '';
    switch (cmd) {
      case 'help':
        output = 'Available: identity, focus, skills, projects, contact, clear, exit';
        break;
      case 'identity':
      case 'identity --query':
        output = '"AI & Data Science Student • Python • C • IoT"';
        break;
      case 'focus':
      case 'focus --current':
        output = '"Algorithmic Logic • Sensor Automation • Modern Visual Systems"';
        break;
      case 'skills':
        output = 'Languages: C, Python | Domains: IoT, 2D Graphics, AI/ML Concepts';
        if (onRunCommand) onRunCommand('skills');
        break;
      case 'projects':
        output = '1. Smart Soil Moisture Detection & Automatic Irrigation (IoT)\n2. 2D Graphics Project (Computer Graphics)';
        if (onRunCommand) onRunCommand('projects');
        break;
      case 'contact':
        output = 'Email: apekshakrishna9@gmail.com | GitHub: github.com/apekshakrishna9-star';
        if (onRunCommand) onRunCommand('contact');
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      case 'exit':
        setInteractiveMode(false);
        setInputVal('');
        return;
      default:
        output = `Command not recognized: "${cmd}". Type "help" for a list of commands.`;
    }

    setHistory((prev) => [...prev, { cmd: inputVal, out: output }]);
    setInputVal('');
  };

  return (
    <div
      id="terminal-card"
      className="mt-3 rounded-2xl bg-[#191018] text-[#fce7f3] p-4 shadow-lg border border-pink-500/20 flex flex-col gap-2 transition-all"
    >
      {/* Top Header Strip */}
      <div className="flex items-center justify-between pb-2 border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-pink-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-pink-300"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-pink-200"></div>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-code-mono text-[11px] text-pink-300">
            student-terminal@reva:~
          </span>
          <button
            onClick={() => setInteractiveMode(!interactiveMode)}
            className="text-[10px] font-code-mono px-2 py-0.5 rounded bg-pink-950/80 hover:bg-pink-900 border border-pink-500/30 text-pink-200 transition-colors"
            title="Toggle interactive terminal input"
          >
            {interactiveMode ? 'view default' : 'try bash'}
          </button>
        </div>
      </div>

      {!interactiveMode ? (
        /* Default verbatim visual screen view from user's image */
        <div className="font-code-mono text-code-mono text-[#fdf2f8] flex flex-col gap-1 text-[12px] sm:text-[13px]">
          <p>
            <span className="text-pink-400 font-semibold">$</span> identity --query
          </p>
          <p className="text-white font-medium pl-1">
            "AI &amp; Data Science Student • Python • C • IoT"
          </p>
          <p className="pt-1">
            <span className="text-pink-400 font-semibold">$</span> focus --current
          </p>
          <p className="text-pink-200 pl-1">
            "Algorithmic Logic • Sensor Automation • Modern Visual Systems"
          </p>
          <div className="flex items-center gap-2 pt-1.5">
            <span className="inline-block w-2 h-4 bg-pink-400 animate-pulse"></span>
            <span className="text-[11px] text-pink-300">
              Ready for academic challenges &amp; projects
            </span>
          </div>
        </div>
      ) : (
        /* Interactive Terminal mode */
        <div className="font-code-mono text-[12px] text-[#fdf2f8] flex flex-col gap-2">
          <div className="text-pink-300 text-[11px] border-b border-pink-900/50 pb-1">
            Type <span className="text-pink-400 font-bold">help</span>, <span className="text-pink-400 font-bold">skills</span>, <span className="text-pink-400 font-bold">projects</span>, <span className="text-pink-400 font-bold">contact</span>, or <span className="text-pink-400 font-bold">clear</span>:
          </div>

          <div className="max-h-44 overflow-y-auto flex flex-col gap-1.5 pr-1">
            <p className="text-pink-300/80">
              $ identity --query <br />
              <span className="text-white font-medium">"AI &amp; Data Science Student • Python • C • IoT"</span>
            </p>
            {history.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-0.5">
                <p className="text-pink-400">
                  <span className="text-pink-500 font-semibold">$</span> {item.cmd}
                </p>
                <div className="text-pink-100 whitespace-pre-wrap pl-2 border-l border-pink-700/50">
                  {item.out}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleCommand} className="flex items-center gap-2 pt-1">
            <span className="text-pink-400 font-bold">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="run command..."
              autoFocus
              className="flex-1 bg-transparent text-pink-100 text-[12px] focus:outline-none placeholder:text-pink-600/60"
            />
            <button
              type="submit"
              className="px-2 py-0.5 bg-pink-500/30 hover:bg-pink-500/50 text-pink-200 text-[10px] rounded"
            >
              Enter
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
