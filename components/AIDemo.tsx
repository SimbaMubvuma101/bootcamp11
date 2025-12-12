import React, { useState } from 'react';
    import { generateEngagementLetter, analyzeLegalText, runCustomQuery } from '../services/geminiService';
    import { Sparkles, Terminal, Play, Loader2, Code2, FileText, Search } from 'lucide-react';
    
    type DemoMode = 'draft' | 'analyze' | 'custom';
    
    const Playground: React.FC = () => {
      const [mode, setMode] = useState<DemoMode>('draft');
      const [loading, setLoading] = useState(false);
      const [output, setOutput] = useState('');
      
      // Inputs
      const [clientName, setClientName] = useState('Sarah Jones');
      const [property, setProperty] = useState('123 Borrowdale Brooke, Harare');
      const [fee, setFee] = useState('3% of transaction value');
      const [textToAnalyze, setTextToAnalyze] = useState('Email from Buyer: I agree to the price but I cannot pay the deposit until next month because my funds are tied up in another crypto investment. Also, is the deed verified? I heard there might be issues with the previous owner.');
      const [customPrompt, setCustomPrompt] = useState('Draft a clause for a lease agreement regarding solar power installation maintenance responsibility.');
    
      const handleGenerate = async () => {
        setLoading(true);
        setOutput('');
        let result = '';
    
        try {
          if (mode === 'draft') {
            result = await generateEngagementLetter(clientName, property, fee);
          } else if (mode === 'analyze') {
            result = await analyzeLegalText(textToAnalyze);
          } else {
            result = await runCustomQuery(customPrompt);
          }
        } catch (e) {
          result = "An error occurred during processing.";
        }
    
        setLoading(false);
        
        // Streaming effect
        let i = 0;
        const speed = 2; 
        const interval = setInterval(() => {
            if (!result) {
               clearInterval(interval);
               return;
            }
            setOutput((prev) => prev + (result[i] || ''));
            i++;
            if (i >= result.length) clearInterval(interval);
        }, speed);
      };
    
      return (
        <div className="flex flex-col lg:flex-row gap-6 h-full min-h-[500px] lg:min-h-[600px]">
          
          {/* Controls Panel */}
          <div className="flex-1 flex flex-col min-w-0">
            <div className="bg-navy-900/50 p-1.5 rounded-xl border border-white/10 flex space-x-1 mb-6">
              <button
                onClick={() => { setMode('draft'); setOutput(''); }}
                className={`flex-1 flex items-center justify-center space-x-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${mode === 'draft' ? 'bg-cyan-500 text-navy-950 shadow-lg shadow-cyan-500/20' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
              >
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">Draft</span>
              </button>
              <button
                onClick={() => { setMode('analyze'); setOutput(''); }}
                className={`flex-1 flex items-center justify-center space-x-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${mode === 'analyze' ? 'bg-cyan-500 text-navy-950 shadow-lg shadow-cyan-500/20' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
              >
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline">Analyze</span>
              </button>
              <button
                onClick={() => { setMode('custom'); setOutput(''); }}
                className={`flex-1 flex items-center justify-center space-x-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${mode === 'custom' ? 'bg-cyan-500 text-navy-950 shadow-lg shadow-cyan-500/20' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
              >
                <Code2 className="w-4 h-4" />
                <span className="hidden sm:inline">Playground</span>
              </button>
            </div>
    
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar max-h-[40vh] lg:max-h-none">
              {mode === 'draft' && (
                <div className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-300">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <label className="block text-xs uppercase text-cyan-400 mb-2 font-bold tracking-wider">Client Name</label>
                    <input 
                      type="text" 
                      value={clientName} 
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-navy-950/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <label className="block text-xs uppercase text-cyan-400 mb-2 font-bold tracking-wider">Property Address</label>
                    <input 
                      type="text" 
                      value={property} 
                      onChange={(e) => setProperty(e.target.value)}
                      className="w-full bg-navy-950/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="e.g. 123 Samora Machel Ave"
                    />
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <label className="block text-xs uppercase text-cyan-400 mb-2 font-bold tracking-wider">Fee Structure</label>
                    <input 
                      type="text" 
                      value={fee} 
                      onChange={(e) => setFee(e.target.value)}
                      className="w-full bg-navy-950/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="e.g. 3% of value"
                    />
                  </div>
                </div>
              )}
    
              {mode === 'analyze' && (
                <div className="animate-in fade-in slide-in-from-left-4 duration-300 h-full flex flex-col">
                   <label className="block text-xs uppercase text-cyan-400 mb-2 font-bold tracking-wider">Legal Text Input</label>
                   <textarea 
                     value={textToAnalyze} 
                     onChange={(e) => setTextToAnalyze(e.target.value)}
                     className="w-full flex-1 min-h-[200px] lg:min-h-[250px] bg-navy-950/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none leading-relaxed"
                     placeholder="Paste email, contract clause, or OCR text here..."
                   />
                </div>
              )}
    
              {mode === 'custom' && (
                <div className="animate-in fade-in slide-in-from-left-4 duration-300 h-full flex flex-col">
                   <div className="mb-2 flex items-center justify-between">
                     <label className="block text-xs uppercase text-cyan-400 font-bold tracking-wider">Custom Prompt</label>
                     <span className="text-[10px] text-slate-500 uppercase bg-white/5 px-2 py-0.5 rounded">Gemini 2.5 Flash</span>
                   </div>
                   <textarea 
                     value={customPrompt} 
                     onChange={(e) => setCustomPrompt(e.target.value)}
                     className="w-full flex-1 min-h-[200px] lg:min-h-[250px] bg-navy-950/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none font-mono text-sm"
                     placeholder="Ask Gemini anything legal..."
                   />
                </div>
              )}
            </div>
    
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="mt-6 w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/20 group"
            >
              {loading ? (
                <Loader2 className="animate-spin w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              )}
              <span>{loading ? 'Processing with Gemini...' : 'Execute'}</span>
            </button>
          </div>
    
          {/* Output Console */}
          <div className="flex-1 rounded-xl border border-cyan-500/20 overflow-hidden flex flex-col min-h-[300px] lg:min-h-[400px] bg-navy-950 shadow-inner shadow-black/50">
             <div className="bg-navy-900 px-4 py-3 border-b border-cyan-500/10 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono text-slate-400">Response_Output.log</span>
                </div>
                <div className="flex space-x-1.5">
                  <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                </div>
             </div>
             <div className="flex-1 p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-auto custom-scrollbar relative">
               {output ? (
                 <div className="whitespace-pre-wrap text-teal-300 leading-relaxed animate-in fade-in duration-500">
                   {output}
                   <span className="inline-block w-2 h-4 bg-cyan-500 ml-1 animate-pulse align-middle shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
                 </div>
               ) : (
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-700 space-y-4 pointer-events-none">
                   <div className="w-16 h-16 rounded-full border border-slate-800 flex items-center justify-center bg-navy-900/50">
                     <Sparkles className="w-6 h-6 opacity-30 text-cyan-500" />
                   </div>
                   <p className="text-sm font-mono tracking-wide">Awaiting input stream...</p>
                 </div>
               )}
             </div>
          </div>
    
        </div>
      );
    };
    
    export default Playground;