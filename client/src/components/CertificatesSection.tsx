import React, { useState, useRef } from 'react';

const CertificatesSection = () => {
  // State for the modal popup
  const [selectedCert, setSelectedCert] = useState<any>(null);
  
  // Ref for the scrollable container
  const scrollRef = useRef<HTMLDivElement>(null);

  const certificates = [
    {
      title: "Intro to Python",
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
      title: "StackLeague x AWS Tech Session: Serverless and Containers",
      issuer: "StackLeague",
      date: "2021",
      image: "certificates/stackleague.png",
      skills: ["AWS", "Serverless Technology", "Containers"],
    },
    {
      title: "SMART Technopreneurship 101",
      issuer: "TESDA",
      date: "2021",
      image: "certificates/techtes.png",
      skills: ["Business Analysis", "Technology Entrepreneurship", "Strategic Planning"],
    },
    {
      title: "An Introduction: Philippines Data Privacy Act of 2012",
      issuer: "WebsitesAdvice",
      date: "2021",
      image: "certificates/webdes.png",
      skills: ["Cybersecurity", "Proper Data Handling", "Safe Browsing"],
    },
    {
      title: "Complete Python Developer",
      issuer: "Udemy / Zero To Mastery",
      date: "2024",
      image: "certificates/pup1.png",
      skills: ["Python", "Automation", "Selenium"],
    },
    {
      title: "Complete Python Developer",
      issuer: "Udemy / Zero To Mastery",
      date: "2024",
      image: "certificates/pup1.png",
      skills: ["Python", "Automation", "Selenium"],
    },
    {
      title: "Complete Python Developer",
      issuer: "Udemy / Zero To Mastery",
      date: "2024",
      image: "certificates/pup1.png",
      skills: ["Python", "Automation", "Selenium"],
    },
    // Add more certificates here as needed
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Calculate scroll distance (about one card's width + gap)
      const scrollAmount = clientWidth > 768 ? 450 : 320;
      const scrollTo = direction === 'left' 
        ? scrollLeft - scrollAmount 
        : scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const closeModal = () => setSelectedCert(null);

  return (
    <section id="certificates" className="py-8 md:py-12 bg-gray-50 overflow-hidden">
      <div className="container px-4 md:px-8 w-full max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-8 text-left px-2">
          <p className="text-xs md:text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-2">
            Credentials
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Certifications
          </h2>
        </div>

        {/* --- RELATIVE WRAPPER FOR SIDE BUTTONS --- */}
        <div className="relative group px-2">
          
          {/* Left Navigation Button */}
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-2 lg:-left-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-700 shadow-xl hover:bg-blue-600 hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:flex hover:scale-110 active:scale-95"
            aria-label="Scroll Left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          {/* Right Navigation Button */}
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-2 lg:-right-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-700 shadow-xl hover:bg-blue-600 hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:flex hover:scale-110 active:scale-95"
            aria-label="Scroll Right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>

          {/* Main Horizontal Scroll Container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-12 px-2 snap-x snap-mandatory no-scrollbar custom-scrollbar"
          >
            {certificates.map((cert, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedCert(cert)}
                className="flex-none w-[280px] sm:w-[380px] md:w-[420px] snap-start group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                {/* Image Section */}
                <div className="relative h-48 md:h-56 w-full overflow-hidden bg-slate-100">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                     <span className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                       Expand View
                     </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded">
                      {cert.issuer}
                    </span>
                    <span className="text-xs font-medium text-slate-400">{cert.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 leading-tight mb-4 group-hover:text-blue-600 transition-colors">
                    {cert.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100">
                    {cert.skills.map((skill, i) => (
                      <span key={i} className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                        # {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styling */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .custom-scrollbar::-webkit-scrollbar { height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { 
            background: #e2e8f0; 
            border-radius: 10px; 
            border: 2px solid transparent;
            background-clip: content-box;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background-color: #3b82f6; }
      `}</style>

      {/* MODAL (Popup) */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-5xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-slate-800 text-white p-2 rounded-full hover:bg-slate-900 transition-colors shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <div className="p-2 md:p-4 bg-slate-50">
                <img 
                src={selectedCert.image} 
                alt={selectedCert.title} 
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-inner"
                />
            </div>
            
            <div className="p-8 bg-white text-center border-t border-slate-100">
              <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2">{selectedCert.title}</h3>
              <p className="text-blue-600 font-bold uppercase tracking-widest">{selectedCert.issuer} — {selectedCert.date}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;