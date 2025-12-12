
import React, { useState } from 'react';
import { CASE_STUDY_STEPS } from '../constants';
import { ArrowRight, CheckCircle2, FileText, Cpu, UserCheck, ShieldAlert, Database, PenTool, Bot } from 'lucide-react';

const CaseStudy: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start h-full">
      
      {/* Left: Steps Navigation */}
      <div className="lg:col-span-4 space-y-2 max-h-[30vh] lg:max-h-[70vh] overflow-y-auto custom-scrollbar pr-2 mb-4 lg:mb-0">
        <div className="mb-4 lg:mb-6 sticky top-0 bg-navy-950/90 backdrop-blur z-10 py-2">
          <div className="inline-block mb-2 px-3 py-1 rounded-full bg-cyan-900/20 text-cyan-400 text-xs font-bold tracking-widest uppercase border border-cyan-500/20">
            End-to-End Workflow
          </div>
          <h3 className="text-lg lg:text-xl font-display font-bold text-white leading-tight">
            Deed Secure: The Borrowdale Transaction
          </h3>
          <p className="text-xs lg:text-sm text-slate-500 mt-2">
            Navigate the AI-enhanced legal workflow from enquiry to execution.
          </p>
        </div>

        {CASE_STUDY_STEPS.map((step) => (
          <button
            key={step.id}
            onClick={() => setActiveStep(step.id)}
            className={`w-full text-left p-3 lg:p-4 rounded-xl transition-all duration-300 border group ${
              activeStep === step.id 
                ? 'bg-gradient-to-r from-navy-900 to-navy-950 border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.1)]' 
                : 'bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className={`text-[10px] font-bold tracking-wider uppercase ${activeStep === step.id ? 'text-cyan-400' : 'text-slate-500'}`}>
                {step.part}
              </span>
              {activeStep === step.id && <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />}
            </div>
            <h4 className={`text-sm font-bold ${activeStep === step.id ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
              {step.title}
            </h4>
          </button>
        ))}
      </div>

      {/* Right: Interactive Visual Engine */}
      <div className="lg:col-span-8 relative">
        <div className="rounded-2xl border border-cyan-500/20 bg-navy-950 overflow-hidden flex flex-col shadow-2xl shadow-black/50">
          
          {/* Header */}
          <div className="bg-navy-900/80 backdrop-blur-sm px-4 lg:px-6 py-4 border-b border-cyan-500/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                <Cpu className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 block">AI WORKFLOW ENGINE</span>
                <span className="text-sm font-bold text-white">{CASE_STUDY_STEPS[activeStep - 1].title}</span>
              </div>
            </div>
            
            {/* Tool Stack Badges */}
            <div className="flex flex-wrap items-center gap-2">
               {CASE_STUDY_STEPS[activeStep - 1].tools.map((tool, i) => (
                 <span key={i} className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-[10px] text-slate-300 font-mono">
                   {tool}
                 </span>
               ))}
            </div>
          </div>

          {/* Body Content */}
          <div className="p-4 sm:p-8 min-h-[350px] sm:min-h-[500px] flex flex-col relative">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

            {CASE_STUDY_STEPS.map((step) => (
              step.id === activeStep && (
                <div key={step.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 sm:space-y-8 relative z-10">
                  
                  {/* Scenario */}
                  <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                     <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Scenario Context</h5>
                     <p className="text-slate-200 leading-relaxed text-sm">
                       {step.scenario}
                     </p>
                  </div>

                  {/* AI Layer */}
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                       <Bot className="w-4 h-4 text-cyan-400" />
                       <h5 className="text-sm font-bold text-cyan-400 uppercase tracking-widest">AI Layer: {step.aiLayer.task}</h5>
                    </div>
                    <div className="bg-cyan-950/30 border border-cyan-500/20 p-4 sm:p-5 rounded-xl space-y-3">
                       <p className="text-cyan-100 font-medium mb-2 text-sm sm:text-base">{step.aiLayer.action}</p>
                       <ul className="space-y-2">
                         {step.aiLayer.details.map((detail, idx) => (
                           <li key={idx} className="flex items-start space-x-2 text-sm text-slate-400">
                             <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                             <span>{detail}</span>
                           </li>
                         ))}
                       </ul>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  <div className="flex justify-center">
                    <div className="h-6 sm:h-8 w-px bg-gradient-to-b from-cyan-500/50 to-slate-700"></div>
                  </div>

                  {/* Human Role */}
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                       <UserCheck className="w-4 h-4 text-purple-400" />
                       <h5 className="text-sm font-bold text-purple-400 uppercase tracking-widest">Lawyer's Role (Human Oversight)</h5>
                    </div>
                    <div className="bg-purple-950/20 border border-purple-500/20 p-4 sm:p-5 rounded-xl flex items-start space-x-3">
                       <ShieldAlert className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                       <p className="text-slate-300 text-sm leading-relaxed">
                         {step.humanRole}
                       </p>
                    </div>
                  </div>

                </div>
              )
            ))}
          </div>

          {/* Footer Status Bar */}
          <div className="bg-navy-950 border-t border-cyan-500/10 px-4 py-2 flex items-center justify-between text-[10px] font-mono text-slate-500">
             <div>SYSTEM STATUS: ONLINE</div>
             <div className="flex items-center space-x-4">
               <span className="hidden sm:inline">LATENCY: 12ms</span>
               <span>ENCRYPTION: AES-256</span>
             </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default CaseStudy;
