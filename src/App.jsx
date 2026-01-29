import React, { useState, useEffect } from 'react';
import { ChevronRight, Shield, Beaker, Package, Globe, Menu, X, ArrowUpRight } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const entities = {
    'core-pack': {
      title: 'COREPACT',
      logo: 'https://i.postimg.cc/Y9B1H2T7/CORE_PACT_LOGO_JPG.jpg',
      tagline: 'Precision Integration & Logistics',
      description: 'Streamlining the backbone of alliance operations through advanced logistical frameworks and integrated distribution systems.',
      color: 'from-amber-600/20 to-transparent',
      accent: 'text-amber-500'
    },
    'core-lab': {
      title: 'CORE-LAB',
      logo: 'https://i.postimg.cc/9MqLshB0/Chat_GPT_Image_Jan_26_2026_11_02_40_PM.png',
      tagline: 'Experimental Research & Development',
      description: 'The scientific engine of the Alethea Alliance, focused on pioneering breakthroughs in sustainable technology and modular systems.',
      color: 'from-yellow-700/20 to-transparent',
      accent: 'text-amber-400'
    },
    'caro': {
      title: 'Caro',
      logo: 'https://i.postimg.cc/0y3FR3xy/caro.jpg',
      tagline: 'Strategic Governance & Oversight',
      description: 'Ensuring the ethical implementation and legal integrity of all Alliance initiatives across global jurisdictions.',
      color: 'from-orange-600/20 to-transparent',
      accent: 'text-orange-400'
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'core-pack', label: 'COREPACT' },
    { id: 'core-lab', label: 'CORE-LAB' },
    { id: 'caro', label: 'Caro' }
  ];

  const LOGO_URL = "https://i.postimg.cc/x8S6TDF8/grok_image_04c3b293_f412_4622_85e3_b837b0ac3119.jpg";

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-amber-500/30 overflow-x-hidden">
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" /> 
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-10" />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full relative" style={{ paddingBottom: '56.25%' }}>
                <iframe 
                    src="https://streamable.com/e/gnkzj0?autoplay=1&nocontrols=1&loop=1&muted=1" 
                    frameBorder="0" 
                    width="100%" 
                    height="100%" 
                    allow="autoplay; fullscreen" 
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none scale-[1.1]"
                    style={{ border: 'none', width: '100vw', height: '100vh', position: 'fixed', left: '0px', top: '0px', overflow: 'hidden'}}
                ></iframe>
            </div>
        </div>
      </div>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-black/90 backdrop-blur-xl py-4 border-b border-amber-500/20' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center group cursor-pointer" onClick={() => setActiveSection('home')}>
            <img src={LOGO_URL} alt="Alethea Alliance Foundation" className="h-12 md:h-16 w-auto object-contain transition-all duration-500 group-hover:brightness-125" />
          </div>
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => setActiveSection(item.id)} className={`text-[10px] uppercase tracking-[0.3em] transition-all hover:text-amber-400 relative py-2 ${activeSection === item.id ? 'text-amber-500 font-bold' : 'text-gray-400'}`}>
                {item.label}
                {activeSection === item.id && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-amber-500" />}
              </button>
            ))}
          </div>
          <button className="md:hidden text-amber-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center space-y-10">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => { setActiveSection(item.id); setIsMenuOpen(false); }} className="text-2xl uppercase tracking-[0.4em] hover:text-amber-500 font-light">{item.label}</button>
          ))}
        </div>
      )}

      <main className="relative z-20 pt-20 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-8">
          {activeSection === 'home' ? (
            <section className="max-w-5xl mx-auto flex flex-col items-center text-center">
              <h2 className="text-6xl md:text-[8rem] font-light tracking-tighter leading-[0.85] mb-10">The Architecture <br /><span className="font-bold bg-clip-text text-transparent bg-gradient-to-b from-amber-200 via-amber-500 to-amber-800">Of Progress.</span></h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-16 font-light italic mx-auto">Alethea Alliance Foundation: Providing the governance and structural integrity for global advancement in logistics, research, and ethics.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {Object.entries(entities).map(([key, data]) => (
                  <button key={key} onClick={() => setActiveSection(key)} className="group relative p-10 bg-white/[0.03] border border-white/10 rounded-3xl transition-all hover:bg-amber-500/[0.05] hover:border-amber-500/40 text-left backdrop-blur-md overflow-hidden">
                    <div className="mb-6 h-12 flex items-center"><img src={data.logo} alt={data.title} className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110" /></div>
                    <h3 className="text-xl font-bold mb-3 tracking-wide">{data.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-widest">{data.tagline}</p>
                    <div className="mt-6 flex items-center text-amber-500/40 group-hover:text-amber-500 text-[10px] tracking-widest uppercase transition-colors font-bold">Launch Protocol <ArrowUpRight className="ml-2 w-3 h-3" /></div>
                  </button>
                ))}
              </div>
            </section>
          ) : (
            <section className="w-full flex justify-center">
              <div className={`p-10 md:p-20 rounded-[3rem] border border-white/10 bg-gradient-to-br ${entities[activeSection].color} backdrop-blur-3xl w-full max-w-6xl shadow-2xl`}>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20"><img src={entities[activeSection].logo} alt={entities[activeSection].title} className="h-16 md:h-24 w-auto object-contain" /></div>
                    <div><span className="text-[10px] tracking-[0.5em] uppercase text-amber-500/60 block mb-2 font-bold">Alliance Subsidiary</span><h2 className="text-5xl md:text-8xl font-bold tracking-tighter">{entities[activeSection].title}</h2></div>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  <div>
                    <h3 className={`text-2xl ${entities[activeSection].accent} font-light italic mb-8 border-l-2 border-amber-500/50 pl-8`}>{entities[activeSection].tagline}</h3>
                    <p className="text-xl text-gray-300 leading-relaxed mb-12 font-light">{entities[activeSection].description}</p>
                  </div>
                </div>
                <button onClick={() => setActiveSection('home')} className="mt-10 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full transition-all text-[10px] font-bold uppercase tracking-[0.2em]">Return to Directory</button>
              </div>
            </section>
          )}
        </div>
      </main>

      <footer className="relative z-20 border-t border-white/10 py-16 mt-20 bg-black/50 backdrop-blur-md text-center md:text-left">
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p className="tracking-[0.3em] uppercase text-[10px] opacity-40">www.aletheiaalliancefoundation.com</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 uppercase tracking-[0.2em] text-[10px]">
            <a href="#" className="hover:text-amber-500 transition-colors">Governance</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Intelligence</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Ethics Board</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
