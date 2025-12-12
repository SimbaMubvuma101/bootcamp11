import React from 'react';
import { Calendar, Clock, MapPin, Video } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative flex-grow flex items-center justify-center overflow-hidden bg-navy-950 min-h-[calc(100vh-80px)]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-800/40 via-navy-950 to-navy-950 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/10 rounded-full blur-[60px] md:blur-[100px] animate-pulse-slow"></div>
        <div className="absolute top-1/2 -left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 md:pt-20">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">
          The Law Society of Zimbabwe
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold mb-6 text-white tracking-tight leading-none">
          DAY1 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">AI</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-300 mb-8 md:mb-12 font-light max-w-2xl mx-auto">
          AI Bootcamp &mdash; Day 1
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="glass-panel p-4 rounded-xl flex items-center justify-center space-x-3 text-slate-300 text-sm md:text-base">
            <Calendar className="h-5 w-5 text-cyan-400 flex-shrink-0" />
            <span>18 December 2025</span>
          </div>
          <div className="glass-panel p-4 rounded-xl flex items-center justify-center space-x-3 text-slate-300 text-sm md:text-base">
            <Clock className="h-5 w-5 text-cyan-400 flex-shrink-0" />
            <span>10:00 AM – 3:00 PM</span>
          </div>
          <div className="glass-panel p-4 rounded-xl flex items-center justify-center space-x-3 text-slate-300 text-sm md:text-base">
            <MapPin className="h-5 w-5 text-cyan-400 flex-shrink-0" />
            <span>Harare, Zimbabwe</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
          <button 
            onClick={() => onNavigate('schedule')}
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-navy-950 bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] cursor-pointer w-full sm:w-auto min-w-[200px]"
          >
            View Programme
          </button>

          <a 
            href="https://meet.google.com/jqb-ntkf-sww"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500/30 text-base font-bold rounded-full text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] cursor-pointer w-full sm:w-auto min-w-[200px] gap-2"
          >
            <Video className="w-5 h-5" />
            <span>Join Bootcamp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;