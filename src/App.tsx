import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Search, BookOpen, History, Cpu, Network, Users, 
  ChevronRight, Globe, Database, FlaskConical, 
  ArrowRight, Sparkles, Scroll, HeartPulse, 
  Telescope, Landmark, Brain, Flame, MessageSquare
} from 'lucide-react';
import { askMitsara } from './services/gemini';

// --- Components ---

const Navbar = ({ isDark, toggleTheme }: { isDark: boolean, toggleTheme: () => void }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-saffron to-india-green flex items-center justify-center">
        <span className="text-white font-bold text-lg">M</span>
      </div>
      <span className="text-xl font-serif font-bold tracking-wider">MITSARA</span>
    </div>
    <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest opacity-70">
      <a href="#idea" className="hover:text-saffron transition-colors">The Idea</a>
      <a href="#demo" className="hover:text-saffron transition-colors">Ask Mitsara</a>
      <a href="#domains" className="hover:text-saffron transition-colors">Knowledge</a>
      <a href="#roadmap" className="hover:text-saffron transition-colors">Roadmap</a>
    </div>
    <div className="flex items-center gap-4">
      <button 
        onClick={toggleTheme}
        className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
        title="Toggle Theme"
      >
        {isDark ? <Sparkles size={20} className="text-gold" /> : <Landmark size={20} className="text-ashoka-blue" />}
      </button>
      <button className="px-5 py-2 rounded-full bg-saffron text-white text-sm font-bold hover:bg-india-green transition-colors">
        JOIN MISSION
      </button>
    </div>
  </nav>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0" />
      
      {/* Mandala Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="relative w-[800px] h-[800px]"
        >
          <div className="absolute inset-0 border-[1px] border-saffron/30 rounded-full" />
          <div className="absolute inset-[100px] border-[1px] border-ashoka-blue/20 rounded-full rotate-45" />
          <div className="absolute inset-[200px] border-[1px] border-india-green/10 rounded-full -rotate-12" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-saffron/40 to-transparent" />
            <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-saffron/40 to-transparent" />
          </div>
        </motion.div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-serif mb-6 leading-tight">
            Mitsara — The Living <br />
            <span className="text-gradient">Intelligence</span> of Indian Knowledge
          </h1>
          <p className="text-xl md:text-2xl opacity-60 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            An AI trained on ancient texts, philosophy, science, and cultural wisdom to explore the depth of Indian Knowledge Systems.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#demo" className="w-full sm:w-auto px-8 py-4 rounded-full bg-saffron text-white font-bold flex items-center justify-center gap-2 hover:bg-ashoka-blue transition-all transform hover:scale-105">
              <Search size={20} /> Ask Mitsara
            </a>
            <a href="#domains" className="w-full sm:w-auto px-8 py-4 rounded-full border border-ashoka-blue/20 hover:bg-ashoka-blue/5 font-bold flex items-center justify-center gap-2 transition-all">
              <BookOpen size={20} /> Explore Knowledge
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
      >
        <div className="w-6 h-10 border-2 border-ashoka-blue/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-saffron rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

const IdeaSection = () => (
  <section id="idea" className="py-24 px-6 max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl mb-8">Why Mitsara Exists</h2>
        <div className="space-y-6 text-lg opacity-70 leading-relaxed">
          <p>
            India once had powerful knowledge institutions—from Nalanda to Takshashila—where philosophy, science, and arts flourished in harmony.
          </p>
          <p>
            Today, that vast ocean of knowledge is fragmented, buried in manuscripts, or lost in translation. Mitsara is an attempt to build an intelligent interface to the knowledge traditions of India.
          </p>
          <p className="font-serif italic text-saffron text-xl">
            "Knowledge once lost can now be rediscovered through the lens of modern intelligence."
          </p>
        </div>
      </div>
      <div className="relative p-8 glass rounded-3xl interactive-card">
        <h3 className="text-xl font-bold mb-8 uppercase tracking-widest text-ashoka-blue dark:text-gold">The Evolution</h3>
        <div className="space-y-12 relative">
          <div className="absolute left-4 top-2 bottom-2 w-[1px] bg-ashoka-blue/10" />
          
          {[
            { title: "Ancient Texts", desc: "Vedas, Upanishads, Shastras", icon: Scroll },
            { title: "Lost Libraries", desc: "Fragmentation & preservation", icon: History },
            { title: "Modern AI", desc: "Neural networks & language models", icon: Cpu },
            { title: "Mitsara", desc: "The living intelligence interface", icon: Sparkles },
          ].map((item, i) => (
            <div key={i} className="flex gap-6 relative z-10">
              <div className="w-8 h-8 rounded-full bg-white dark:bg-deep-charcoal border border-saffron flex items-center justify-center shrink-0">
                <item.icon size={14} className="text-saffron" />
              </div>
              <div>
                <h4 className="font-bold">{item.title}</h4>
                <p className="text-sm opacity-50">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const DemoSection = () => {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAsk = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim()) return;
    
    setLoading(true);
    setError(null);
    setAnswer(null);
    
    try {
      const result = await askMitsara(query);
      setAnswer(result);
    } catch (err) {
      setError("The intelligence is currently recalibrating. Please try again shortly.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const examples = [
    "What is the concept of Atman in the Upanishads?",
    "Explain Ayurveda’s dosha theory.",
    "What is Nyaya philosophy?"
  ];

  return (
    <section id="demo" className="py-24 px-6 bg-ashoka-blue/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Ask Mitsara</h2>
          <p className="opacity-50">Explore the depths of Indian Knowledge Systems in real-time.</p>
        </div>

        <div className="glass p-8 rounded-3xl shadow-2xl">
          <form onSubmit={handleAsk} className="relative mb-8">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter your inquiry..."
              className="w-full bg-white/10 dark:bg-white/5 border border-ashoka-blue/10 rounded-2xl py-6 px-8 pr-16 focus:outline-none focus:border-saffron/50 transition-all text-lg"
            />
            <button 
              type="submit"
              disabled={loading}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-saffron text-white flex items-center justify-center hover:bg-ashoka-blue transition-colors disabled:opacity-50"
            >
              {loading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <ArrowRight size={24} />}
            </button>
          </form>

          <div className="flex flex-wrap gap-3 mb-8">
            {examples.map((ex, i) => (
              <button 
                key={i} 
                onClick={() => { setQuery(ex); }}
                className="text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-ashoka-blue/10 hover:border-saffron/50 hover:text-saffron transition-all"
              >
                {ex}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {loading && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="loading"
              >
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="flex gap-2">
                    {[0, 1, 2].map(i => (
                      <motion.div 
                        key={i}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                        className="w-2 h-2 rounded-full bg-saffron"
                      />
                    ))}
                  </div>
                  <p className="text-sm opacity-40 font-mono uppercase tracking-widest">Consulting ancient texts...</p>
                </div>
              </motion.div>
            )}

            {answer && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose dark:prose-invert max-w-none"
              >
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 font-serif text-lg leading-relaxed opacity-90 whitespace-pre-wrap">
                  {answer}
                </div>
                <div className="mt-6 flex items-center gap-4 text-xs opacity-30 uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Database size={12} /> Source: Mitsara Knowledge Graph</span>
                  <span className="flex items-center gap-1"><History size={12} /> Confidence: 94%</span>
                </div>
              </motion.div>
            )}

            {error && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-center"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const KnowledgeSection = () => {
  const domains = [
    { title: "Vedic Literature", icon: Scroll, color: "from-orange-500/20" },
    { title: "Upanishads & Philosophy", icon: Brain, color: "from-blue-500/20" },
    { title: "Yoga & Consciousness", icon: HeartPulse, color: "from-emerald-500/20" },
    { title: "Ayurveda & Healing", icon: Flame, color: "from-red-500/20" },
    { title: "Astronomy & Mathematics", icon: Telescope, color: "from-indigo-500/20" },
    { title: "Architecture & Vastu", icon: Landmark, color: "from-amber-500/20" },
    { title: "Logic & Linguistics", icon: MessageSquare, color: "from-purple-500/20" },
    { title: "Tantra & Esoteric", icon: Sparkles, color: "from-pink-500/20" },
  ];

  return (
    <section id="domains" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl mb-4">Knowledge Domains</h2>
        <p className="opacity-50 max-w-2xl mx-auto">Mitsara is trained across a vast spectrum of Indian intellectual traditions.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {domains.map((domain, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className={`p-8 rounded-3xl glass flex flex-col items-center text-center gap-4 group cursor-pointer relative overflow-hidden interactive-card`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-saffron/20 transition-colors relative z-10">
              <domain.icon size={32} className="opacity-70 group-hover:text-saffron transition-colors" />
            </div>
            <h3 className="font-serif text-xl relative z-10">{domain.title}</h3>
            <ChevronRight className="opacity-20 group-hover:text-saffron transition-all group-hover:translate-x-1" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ProcessSection = () => (
  <section className="py-24 px-6 bg-ashoka-blue/5">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl mb-4">Behind the Intelligence</h2>
        <p className="opacity-50">How Mitsara processes millennia of wisdom into intelligent answers.</p>
      </div>
      
      <div className="grid md:grid-cols-4 gap-8 relative">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-ashoka-blue/10 -translate-y-1/2 z-0" />
        
        {[
          { title: "Texts", desc: "Digital & scanned manuscripts", icon: Scroll },
          { title: "AI Training", desc: "Contextual language modeling", icon: Cpu },
          { title: "Knowledge Graph", desc: "Mapping concepts & relations", icon: Network },
          { title: "Intelligent Answers", desc: "Scholarly, verified responses", icon: MessageSquare },
        ].map((step, i) => (
          <div key={i} className="relative z-10 flex flex-col items-center text-center gap-6">
            <div className="w-20 h-20 rounded-full bg-white dark:bg-deep-charcoal border border-ashoka-blue/10 flex items-center justify-center shadow-xl">
              <step.icon size={32} className="text-ashoka-blue dark:text-gold" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">{step.title}</h4>
              <p className="text-sm opacity-50">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 p-8 rounded-3xl border border-ashoka-blue/5 bg-white/5 dark:bg-black/20 max-w-3xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h5 className="text-saffron font-bold mb-2">RAG System</h5>
            <p className="text-xs opacity-40">Retrieval Augmented Generation for factual accuracy.</p>
          </div>
          <div>
            <h5 className="text-saffron font-bold mb-2">Structured Corpus</h5>
            <p className="text-xs opacity-40">Curated datasets from verified scholarly sources.</p>
          </div>
          <div>
            <h5 className="text-saffron font-bold mb-2">Expert Feedback</h5>
            <p className="text-xs opacity-40">Human-in-the-loop validation by Sanskrit scholars.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const EcosystemSection = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl mb-4">The Ecosystem</h2>
      <p className="opacity-50">Mitsara is part of a larger mission to automate and educate.</p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { 
          name: "East India Automation", 
          role: "Technology Infrastructure", 
          desc: "Building the hardware and software foundations for civilizational intelligence.",
          icon: Cpu
        },
        { 
          name: "WorldOfTexts", 
          role: "Education & Research", 
          desc: "A platform dedicated to the study, preservation, and dissemination of ancient knowledge.",
          icon: Globe
        },
        { 
          name: "Mitsara", 
          role: "AI Knowledge Engine", 
          desc: "The intelligent interface connecting modern minds with ancient wisdom.",
          icon: Sparkles
        },
      ].map((item, i) => (
        <div key={i} className="p-10 rounded-3xl glass flex flex-col gap-6 hover:border-saffron/30 transition-all interactive-card">
          <item.icon size={40} className="text-saffron" />
          <div>
            <h3 className="text-2xl font-serif mb-1">{item.name}</h3>
            <p className="text-xs font-bold text-ashoka-blue dark:text-gold uppercase tracking-widest mb-4">{item.role}</p>
            <p className="opacity-60 leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const StatsSection = () => (
  <section className="py-24 px-6 bg-gradient-to-b from-transparent to-saffron/5">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl mb-4">Research in Progress</h2>
        <p className="opacity-50">Building in public. Transparency in our journey.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
        {[
          { label: "Texts Processed", value: "12,000+" },
          { label: "Concept Nodes Mapped", value: "4,300+" },
          { label: "Active Researchers", value: "18" },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-5xl md:text-7xl font-serif text-gradient mb-2">{stat.value}</div>
            <div className="text-xs uppercase tracking-[0.2em] opacity-40">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const RoadmapSection = () => (
  <section id="roadmap" className="py-24 px-6 max-w-5xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl mb-4">The Roadmap</h2>
      <p className="opacity-50">Our vision for the next decade of Indian Knowledge Systems.</p>
    </div>
    <div className="space-y-12 relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-ashoka-blue/10 -translate-x-1/2 hidden md:block" />
      
      {[
        { year: "2025", title: "Prototype AI", desc: "Initial RAG system and core text integration." },
        { year: "2026", title: "Knowledge Platform", desc: "Public interface for research and community collaboration." },
        { year: "2028", title: "Domain AI Model", desc: "Specialized LLM trained natively on Sanskrit and regional texts." },
        { year: "2035", title: "Global Interface", desc: "The primary global gateway to Indian civilizational knowledge." },
      ].map((milestone, i) => (
        <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
          <div className="flex-1 text-center md:text-left">
            <div className={`md:max-w-xs ${i % 2 === 0 ? 'md:ml-auto md:text-right' : ''}`}>
              <h3 className="text-2xl font-serif text-saffron mb-2">{milestone.title}</h3>
              <p className="opacity-50">{milestone.desc}</p>
            </div>
          </div>
          <div className="w-16 h-16 rounded-full bg-white dark:bg-deep-charcoal border-2 border-ashoka-blue dark:border-gold flex items-center justify-center relative z-10 shrink-0">
            <span className="font-bold text-sm">{milestone.year}</span>
          </div>
          <div className="flex-1 hidden md:block" />
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-24 px-6 border-t border-ashoka-blue/5 bg-ashoka-blue/5 dark:bg-black/50">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 mb-20">
        <div>
          <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
            Knowledge once lost can now be <span className="text-saffron">rediscovered</span>.
          </h2>
          <p className="text-xl opacity-60 font-serif italic">
            Mitsara is an attempt to build the intelligence of a civilization.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-6">
          <h3 className="text-xl font-bold uppercase tracking-widest text-ashoka-blue dark:text-gold">Join the Movement</h3>
          <p className="opacity-50">Help us digitize texts, support research, and build open tools for the future of knowledge.</p>
          <div className="flex gap-4">
            <button className="px-8 py-3 rounded-full bg-ashoka-blue text-white font-bold hover:bg-saffron transition-colors">
              JOIN PROJECT
            </button>
            <button className="px-8 py-3 rounded-full border border-ashoka-blue/20 hover:bg-ashoka-blue/5 font-bold transition-colors">
              CONTRIBUTE
            </button>
          </div>
        </div>
      </div>

      {/* Ecosystem Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-t border-ashoka-blue/5 pt-12">
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest opacity-40">Ecosystem</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://www.eastindiaautomation.in/" target="_blank" className="hover:text-saffron transition-colors">East India Automation</a></li>
            <li><a href="https://www.worldoftexts.com/" target="_blank" className="hover:text-saffron transition-colors">World of Texts</a></li>
            <li><a href="https://www.againindia.com/" target="_blank" className="hover:text-saffron transition-colors">Again India</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest opacity-40">Projects</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://chat.worldoftexts.com/" target="_blank" className="hover:text-saffron transition-colors">ZeroGPT</a></li>
            <li><a href="https://callforensics.eastindiaautomation.com/" target="_blank" className="hover:text-saffron transition-colors">Call Forensics</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest opacity-40">Social</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://github.com/SocialNOT" target="_blank" className="hover:text-saffron transition-colors">GitHub</a></li>
            <li><a href="https://x.com/ILoveSundarban" target="_blank" className="hover:text-saffron transition-colors">X (Twitter)</a></li>
            <li><a href="https://www.linkedin.com/in/professorai/" target="_blank" className="hover:text-saffron transition-colors">LinkedIn</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest opacity-40">Contact</h4>
          <p className="text-sm opacity-60">contact@eastindiaautomation.in</p>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-ashoka-blue/5 text-xs opacity-30 uppercase tracking-widest gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-saffron/20 flex items-center justify-center">
            <span className="text-saffron font-bold text-[10px]">M</span>
          </div>
          <span>© 2026 MITSARA INTELLIGENCE</span>
        </div>
        <div className="flex items-center gap-8">
          <p className="text-[10px] tracking-[0.2em] font-bold">
            DESIGNED & DEVELOPED BY <strong className="text-ashoka-blue dark:text-saffron">RAJIB SINGH</strong>
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-ashoka-blue dark:hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-ashoka-blue dark:hover:text-white transition-colors">Research</a>
            <a href="#" className="hover:text-ashoka-blue dark:hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen selection:bg-saffron selection:text-white">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <IdeaSection />
        <DemoSection />
        <KnowledgeSection />
        <ProcessSection />
        <EcosystemSection />
        <StatsSection />
        <RoadmapSection />
      </main>
      <Footer />
    </div>
  );
}
