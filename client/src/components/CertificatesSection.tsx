import React, { useState, useRef } from 'react';

const CertificatesSection = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const certificates = [
    {
      title: "How Games Inspired Programming Skills and Intro to Python",
      issuer: "PUP Programmers' Guild",
      date: "2021",
      image: "certificates/pup1.png",
      skills: ["Python", "Game Development", "Basic Programming"],
    },
    {
      title: "Intro to Django and Python for Data Engineers",
      issuer: "PUP Programmers' Guild",
      date: "2021",
      image: "certificates/pup2.png",
      skills: ["Python", "Django", "Data Engineering"],
    },
    {
      title: "Debugging Web Apps through Selenium Test Automation and Software Engineering",
      issuer: "PUP Programmers' Guild",
      date: "2021",
      image: "certificates/pup3.png",
      skills: ["Python", "Automation", "Selenium"],
    },
    {
      title: "def IT pantry(); A Webinar Series for the Latest Web Technologies",
      issuer: "PUP Programmers' Guild",
      date: "2021",
      image: "certificates/pup0.png",
      skills: ["HTML", "CSS", "Javascript"],
    },
    {
      title: "StackLeague x AWS Tech Session: Serverless and Containers",
      issuer: "StackLeague",
      date: "2021",
      image: "certificates/stackleague.png",
      skills: ["AWS", "Serverless Technology", "Containers"],
    },
    {
      title: "An Introduction: Philippines Data Privacy Act of 2012",
      issuer: "WebsitesAdvice",
      date: "2021",
      image: "certificates/websitesad.png",
      skills: ["Cybersecurity", "Data Processing Etiquettes", "Proper Data Safekeeping"],
    },
    {
      title: "Pinoy Codes: Web Development",
      issuer: "Zuitt",
      date: "2021",
      image: "certificates/zuitt.png",
      skills: ["Git", "PHP", "Typescript"],
    },
    {
      title: "SMART Technopreneurship 101",
      issuer: "TESDA",
      date: "2021",
      image: "certificates/techtes.png",
      skills: ["Business Analysis", "Technology Entrepreneurship", "Market Validation"],
    },
    {
      title: "SMART Android Mobile Apps Development for Beginners",
      issuer: "TESDA",
      date: "2021",
      image: "certificates/androidtes.png",
      skills: ["Java", "Flutter", "Android Studio"],
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2021",
      image: "certificates/webdes.png",
      skills: ["Typescript", "Node.js", "React", "Next.js"],
    },
  ];

  // Carousel Scroll Logic
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Adjusted for mobile: smaller scroll on mobile, bigger on desktop
      const scrollAmount = clientWidth > 768 ? 450 : 320;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  // Modal Navigation Logic
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx(selectedIdx === 0 ? certificates.length - 1 : selectedIdx - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx(selectedIdx === certificates.length - 1 ? 0 : selectedIdx + 1);
    }
  };

  const closeModal = () => setSelectedIdx(null);
  const selectedCert = selectedIdx !== null ? certificates[selectedIdx] : null;

  return (
    <section id="certificates" className="py-8 md:py-16 bg-slate-900/95 overflow-hidden">
      <div className="container px-4 md:px-8 w-full max-w-7xl mx-auto">
        
        <div className="mb-8 text-left px-2">
          <p className="text-xs md:text-sm font-bold text-blue-300 uppercase tracking-[0.2em] mb-2">Credentials</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Certifications</h2>
        </div>

        <div className="relative group px-2">
          {/* Desktop Navigation Arrows */}
          <button onClick={() => scroll('left')} className="absolute -left-2 lg:-left-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white border border-slate-200 text-slate-700 shadow-xl opacity-0 group-hover:opacity-100 hidden md:flex hover:bg-blue-600 hover:text-white transition-all transform-gpu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          <button onClick={() => scroll('right')} className="absolute -right-2 lg:-right-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white border border-slate-200 text-slate-700 shadow-xl opacity-0 group-hover:opacity-100 hidden md:flex hover:bg-blue-600 hover:text-white transition-all transform-gpu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>

          {/* Carousel Container */}
          <div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-12 px-2 snap-x snap-mandatory no-scrollbar custom-scrollbar">
            {certificates.map((cert, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedIdx(idx)}
                className="flex-none w-[280px] sm:w-[380px] md:w-[420px] snap-start group/card relative bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer transform-gpu will-change-transform"
              >
                <div className="relative h-48 md:h-56 w-full overflow-hidden bg-slate-200">
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105 transform-gpu" />
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <span className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold text-sm shadow-lg">Expand View</span>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded">{cert.issuer}</span>
                    <span className="text-xs font-medium text-slate-400">{cert.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight mb-4 group-hover/card:text-blue-600 transition-colors line-clamp-2">{cert.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100">
                    {cert.skills.map((skill, i) => (
                      <span key={i} className="text-[10px] font-bold text-slate-500 uppercase tracking-tight"># {skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .custom-scrollbar::-webkit-scrollbar { height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
      `}</style>

      {/* MOBILE-OPTIMIZED MODAL */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/98 p-2 md:p-6 backdrop-blur-md h-[100dvh]" 
          onClick={closeModal}
        >
          {/* Navigation - Hidden on very small screens to avoid clutter, visible on MD+ */}
          <button onClick={handlePrev} className="absolute left-2 md:left-8 z-[110] p-3 text-white/70 bg-white/10 rounded-full hover:bg-white/20 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          <button onClick={handleNext} className="absolute right-2 md:right-8 z-[110] p-3 text-white/70 bg-white/10 rounded-full hover:bg-white/20 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>

          <div 
            className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal} 
              className="absolute top-3 right-3 z-[120] bg-slate-900/80 text-white p-2 rounded-full shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            {/* Content Container */}
            <div className="flex flex-col">
              <div className="p-1 md:p-2 bg-slate-50 flex justify-center items-center">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title} 
                  className="w-full h-auto max-h-[60vh] md:max-h-[80vh] object-contain rounded-lg" 
                />
              </div>
              
              <div className="p-5 md:p-8 bg-white text-center border-t border-slate-100">
                <h3 className="text-lg md:text-3xl font-bold text-slate-900 mb-1 leading-tight">
                  {selectedCert.title}
                </h3>
                <p className="text-blue-600 font-bold uppercase tracking-widest text-[10px] md:text-sm">
                  {selectedCert.issuer} — {selectedCert.date}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;