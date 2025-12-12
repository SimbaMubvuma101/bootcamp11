import React from 'react';
import { SCHEDULE } from '../constants';
import { Clock, User } from 'lucide-react';

const Schedule: React.FC = () => {
  return (
    <div className="relative">
      <div className="space-y-4">
        {SCHEDULE.map((item, index) => (
          <div key={index} className="relative">
            <div className={`p-4 md:p-6 rounded-xl border border-white/5 bg-navy-950/50 hover:bg-white/5 transition-colors ${
               item.type === 'break' ? 'border-l-4 border-l-slate-600' : 'border-l-4 border-l-cyan-500'
            }`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4">
                
                {/* Time */}
                <div className="flex items-center text-cyan-400 font-mono text-sm md:min-w-[160px] mb-2 md:mb-0">
                  <Clock className="w-4 h-4 mr-2" />
                  {item.time}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-bold text-white mb-2">{item.title}</h3>
                  
                  {item.facilitator && (
                    <div className="flex items-center text-sm text-slate-400 mb-3">
                      <User className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>{item.facilitator}</span>
                    </div>
                  )}

                  {item.details.length > 0 && (
                    <ul className="list-disc list-inside space-y-1 text-sm text-slate-500 ml-1">
                      {item.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
                
                {/* Type Badge */}
                <div className="mt-3 md:mt-0 flex md:block">
                   <span className={`text-[10px] md:text-xs px-3 py-1 rounded-full border ${
                     item.type === 'break' 
                      ? 'border-slate-700 text-slate-500' 
                      : item.type === 'activity' 
                      ? 'border-purple-900/50 text-purple-400 bg-purple-900/10'
                      : 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10'
                   }`}>
                     {item.type.toUpperCase()}
                   </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;