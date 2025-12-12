import React from 'react';
import { SPEAKERS } from '../constants';

const Speakers: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {SPEAKERS.map((speaker, index) => (
        <div 
          key={index} 
          className="group relative p-6 rounded-xl border border-white/5 bg-navy-950/50 hover:border-cyan-500/30 transition-all duration-300"
        >
          <div className="relative">
            <div className="mb-4">
              <span className="text-xs font-bold tracking-wider text-cyan-400 uppercase">{speaker.role}</span>
              <h3 className="text-xl font-bold text-white mt-1 mb-2">{speaker.name}</h3>
              <p className="text-sm text-slate-400 leading-relaxed italic border-l-2 border-slate-700 pl-3 mb-4">
                {speaker.title}
              </p>
            </div>
            <p className="text-sm text-slate-400">
              {speaker.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Speakers;