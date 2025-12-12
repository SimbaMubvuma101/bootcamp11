
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import CaseStudy from './components/CaseStudy';
import AIDemo from './components/AIDemo';
import Modal from './components/Modal';
import { Plane, ArrowRight } from 'lucide-react';

function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [showCapeTownSite, setShowCapeTownSite] = useState(false);

  const handleNavigate = (section: string) => {
    setActiveModal(section);
    if (section === 'cape-town') {
      setShowCapeTownSite(false);
    }
  };

  const closeModal = () => {
    setActiveModal(null);
    setShowCapeTownSite(false);
  };

  return (
    <div className="bg-navy-950 min-h-screen text-slate-200 selection:bg-cyan-500 selection:text-navy-950 flex flex-col">
      <Navbar onNavigate={handleNavigate} />
      
      <main className="flex-grow flex flex-col">
        <Hero onNavigate={handleNavigate} />
      </main>
      
      <footer className="py-6 border-t border-cyan-500/10 bg-navy-900 text-center relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-slate-500 text-sm">
            &copy; 2025 The Law Society of Zimbabwe. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Modals */}
      <Modal 
        isOpen={activeModal === 'schedule'} 
        onClose={closeModal} 
        title="Event Schedule"
      >
        <Schedule />
      </Modal>

      <Modal 
        isOpen={activeModal === 'speakers'} 
        onClose={closeModal} 
        title="Speakers & Visionaries"
      >
        <Speakers />
      </Modal>

      <Modal 
        isOpen={activeModal === 'case-study'} 
        onClose={closeModal} 
        title="Interactive Case Study"
      >
        <CaseStudy />
      </Modal>

      <Modal 
        isOpen={activeModal === 'demo'} 
        onClose={closeModal} 
        title="AI Legal Playground"
      >
        <AIDemo />
      </Modal>

      <Modal 
        isOpen={activeModal === 'cape-town'} 
        onClose={closeModal} 
        title="Cape Town Bootcamp"
      >
        {!showCapeTownSite ? (
          <div className="flex flex-col items-center justify-center h-[50vh] text-center px-6">
            <div className="w-20 h-20 bg-cyan-500/10 rounded-full flex items-center justify-center mb-6 border border-cyan-500/20 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
              <Plane className="w-10 h-10 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Travel Logistics
            </h3>
            <p className="text-slate-300 text-lg max-w-lg mb-8 leading-relaxed">
              We have partnered with <span className="text-cyan-400 font-bold">Cape Insider</span> for logistics on this trip.
            </p>
            <button 
              onClick={() => setShowCapeTownSite(true)}
              className="group inline-flex items-center justify-center px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-navy-950 font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transform hover:scale-105"
            >
              <span>Continue to Site</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ) : (
          <div className="w-full h-[75vh] bg-white rounded-lg overflow-hidden relative shadow-inner animate-in fade-in duration-500">
            <iframe 
              src="https://capeinsider.roadshow.africa/#trip/aiforlawafrica" 
              className="w-full h-full border-0"
              title="Cape Town Bootcamp Website"
              loading="lazy"
              allowFullScreen
            />
          </div>
        )}
      </Modal>
    </div>
  );
}

export default App;
