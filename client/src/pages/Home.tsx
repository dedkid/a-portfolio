import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, ExternalLink, Download, Mail, Send, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";

/**
 * Professional Minimalist Design with Mobile Optimization:
 * - Clean, refined aesthetic inspired by premium tech companies
 * - Fully responsive: mobile-first approach with breakpoints at sm, md, lg
 * - Touch-friendly: larger tap targets (48px minimum), proper spacing
 * - Mobile navigation: hamburger menu for small screens
 * - Performance: optimized images, lazy loading, reduced animations on mobile
 * - Typography: responsive font sizes that scale appropriately
 */

import { useEffect, useRef } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Add these refs for accelerating inertia scrolling
  const velocityRef = useRef(0);
  const lastScrollTimeRef = useRef(0);
  const animationIdRef = useRef<number | null>(null);
  const scrollCountRef = useRef(0);

    // Add this useEffect hook for FAST accelerating inertia scrolling (DESKTOP ONLY)
  useEffect(() => {
    // Check if device is mobile
    const isMobile = () => {
      return window.innerWidth < 768 ||
             /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    // Only apply scroll effect on desktop
    if (isMobile()) {
      return;
    }

    const baseScrollSpeed = 0.5;
    const friction = 0.95;
    const minVelocity = 0.1;
    const maxAcceleration = 5;
    const accelerationDecay = 0.92; // Faster decay
    const accelerationMultiplier = 1; // Increased from 0.1 to 0.35 - reaches max speed faster

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }

      scrollCountRef.current += 1;
      
      // Faster acceleration calculation
      // With 0.35 multiplier: 
      // 1st scroll = 1.35x speed
      // 2nd scroll = 1.70x speed
      // 3rd scroll = 2.0x speed (max)
      const accelerationFactor = Math.min(1 + (scrollCountRef.current * accelerationMultiplier), maxAcceleration);

      const delta = event.deltaY;
      velocityRef.current = (delta * baseScrollSpeed * accelerationFactor) / 10;
      lastScrollTimeRef.current = Date.now();

      const animate = () => {
        velocityRef.current *= friction;
        scrollCountRef.current *= accelerationDecay;

        if (Math.abs(velocityRef.current) < minVelocity) {
          velocityRef.current = 0;
          scrollCountRef.current = 0;
          return;
        }

        window.scrollBy(0, velocityRef.current);
        animationIdRef.current = requestAnimationFrame(animate);
      };

      animate();
    };

    document.addEventListener('wheel', handleWheel, { passive: false });

    const handleResize = () => {
      if (isMobile()) {
        document.removeEventListener('wheel', handleWheel);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  // ... rest of your component

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container flex justify-between items-center h-16 px-4 md:px-8">
          <div className="text-lg font-bold text-blue-600">Akira<span className="mx-1"></span>Nieva</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-1 text-xl font-medium text-slate-600 ">
            <a href="#projects" className="hover:bg-slate-900 hover:text-white active:bg-blue-700 transition-colors py-4 px-12 rounded-lg">
              Projects
            </a>
            <a href="#experience" className="hover:bg-slate-900 hover:text-white active:bg-blue-700 transition-colors py-4 px-12 rounded-lg">
              Experience
            </a>
            <a href="#blog" className="hover:bg-slate-900 hover:text-white active:bg-blue-700 transition-colors py-4 px-12 rounded-lg">
              Blog
            </a>
            <a href="#contact" className="hover:bg-slate-900 hover:text-white active:bg-blue-700 transition-colors py-4 px-12 rounded-lg">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container px-4 py-4 flex flex-col gap-4 text-sm font-medium text-slate-600">
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-slate-900 transition-colors py-2">
                Projects
              </a>
              <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="hover:text-slate-900 transition-colors py-2">
                Experience
              </a>
              <a href="#blog" onClick={() => setMobileMenuOpen(false)} className="hover:text-slate-900 transition-colors py-2">
                Blog
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-slate-900 transition-colors py-2">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-start pt-20 md:pt-24"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663545922916/ZXWvuFGZfxJZCzfWbWUex5/hero-professional-bg-FUfS5QCopbXSuFtrmJAKG3.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/80" />
        <div className="container relative z-10 px-4 md:w-full">
          <AnimatedSection animation="fade-in-up" className="space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <p className="text-sm md:text-base font-bold text-blue-600 uppercase tracking-wide">Project Manager<span className="mx-8">|</span>Full-Stack Developer<span className="mx-8">|</span>Social Media Analyst</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
               Hi, I'm Akira Nieva!
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl leading-relaxed text-justify">
                Building simple programs for complex problems. I'm currently a Project Manager, but for most of my life, I've specialized in programming and modern web technologies. Coding has always been and will always be a passion as it has given me an outlet for my creativity through devising solutions for many problems; just like modern technology solving problems in the world.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-6">
              <a href="https://github.com/dedkid" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-700 font-semibold flex items-center justify-center gap-2 transition-smooth py-2 md:py-3 px-4 md:px-6 text-sm md:text-base">
                  <Github size={18} className="md:w-5 md:h-5" />
                  View on GitHub
                </Button>
              </a>
              <a href="mailto:nievaakira@gmail.com" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-slate-300 text-slate-900 hover:bg-slate-50 font-semibold flex items-center justify-center gap-2 transition-smooth py-2 md:py-3 px-4 md:px-6 text-sm md:text-base"
                >
                  Get In Touch
                  <ArrowRight size={18} className="md:w-5 md:h-5" />
                </Button>
              </a>
            </div>

            {/* Tech Stack */}
            <div className="pt-6 md:pt-8 space-y-3 md:space-y-4">
              <p className="text-xs md:text-sm font-semibold text-slate-600 uppercase tracking-wide">Languages I speak, and Frameworks I work with</p>
              <div className="flex gap-2 md:gap-3 flex-wrap">
                {["React", "TypeScript", "Node.js", "Python", "Selenium", "Flutter", "MySQL", "Javascript", "HTML", "CSS", "Bootstrap", "Java", "C#", "C++", "PHP", "Visual Basic"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 md:px-3 py-1 bg-blue-50 text-blue-700 text-xs md:text-sm font-medium rounded-full border border-blue-200 transition-smooth hover:bg-blue-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-8 w-full">
          <AnimatedSection animation="fade-in-up" className="max-w-3xl mb-12 md:mb-16">
            <p className="text-xs md:text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Featured Work</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 md:mb-4">Projects</h2>
            <p className="text-base md:text-lg text-slate-600">
              A selection of projects showcasing full-stack development, system design, and problem-solving across
              different domains.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" stagger className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "Attendance Management System",
                description:
                  "Full-stack marketplace with real-time inventory management, payment processing, and comprehensive admin dashboard. Built with React, Node.js, and PostgreSQL.",
                tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
                link: "https://github.com",
                demo: "https://example.com",
              },
              {
                title: "Project Tracker",
                description:
                  "Real-time data visualization platform processing 1M+ events daily. Features custom charts, advanced filtering, and data export functionality.",
                tech: ["React", "TypeScript", "D3.js", "AWS"],
                link: "https://github.com",
                demo: "https://example.com",
              },
              {
                title: "Task Management API",
                description:
                  "RESTful API with JWT authentication, role-based access control, and WebSocket support for real-time updates. Fully tested and documented.",
                tech: ["Node.js", "Express", "PostgreSQL", "Redis"],
                link: "https://github.com",
                demo: "https://example.com",
              },
              {
                title: "Content Management System",
                description:
                  "Headless CMS with GraphQL API, markdown support, and automated deployment pipeline. Supports multi-language content management.",
                tech: ["Next.js", "GraphQL", "MongoDB", "Docker"],
                link: "https://github.com",
                demo: "https://example.com",
              },
            ].map((project, idx) => (
              <Card
                key={idx}
                className="bg-white border border-gray-200 p-6 md:p-8 hover:shadow-elevated transition-smooth group"
              >
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-medium text-slate-500 bg-gray-100 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-gray-200">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button
                      size="sm"
                      className="w-full bg-blue-600 text-white hover:bg-blue-700 font-semibold transition-smooth text-xs md:text-sm py-2 md:py-3"
                    >
                      <Github size={16} className="mr-2" />
                      Repository
                    </Button>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full border-slate-300 text-slate-900 hover:bg-slate-50 font-semibold transition-smooth text-xs md:text-sm py-2 md:py-3"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section 
      <section id="skills" className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-8 w-full">
          <AnimatedSection animation="fade-in-up" className="max-w-3xl mb-12 md:mb-16">
            <p className="text-xs md:text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Expertise</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">Technical Skills</h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                category: "Frontend",
                skills: [
                  { name: "React", level: 95 },
                  { name: "TypeScript", level: 90 },
                  { name: "Tailwind CSS", level: 92 },
                  { name: "Next.js", level: 88 },
                ],
              },
              {
                category: "Backend",
                skills: [
                  { name: "Node.js", level: 93 },
                  { name: "PostgreSQL", level: 89 },
                  { name: "GraphQL", level: 85 },
                  { name: "REST APIs", level: 94 },
                ],
              },
              {
                category: "DevOps & Tools",
                skills: [
                  { name: "Docker", level: 87 },
                  { name: "AWS", level: 86 },
                  { name: "CI/CD", level: 90 },
                  { name: "Git", level: 96 },
                ],
              },
            ].map((skillGroup, idx) => (
              <div key={idx} className="space-y-6">
                <h3 className="text-lg md:text-xl font-bold text-slate-900">{skillGroup.category}</h3>
                {skillGroup.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm md:text-base font-medium text-slate-700">{skill.name}</span>
                      <span className="text-xs md:text-sm font-semibold text-blue-600">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>*/}

       {/* Experience Timeline Section */}
      <section id="experience" className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-8 w-full">
          <AnimatedSection animation="fade-in-up" className="max-w-3xl mb-12 md:mb-16">
            <p className="text-xs md:text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Career Path</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">Experience</h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" stagger className="space-y-8 md:space-y-12 max-w-3xl mx-auto w-full">
            {[
              {
                role: "Associate Research Manager",
                company: "DocDelta Research",
                period: "2025 - Present",
                description: "Leading development of scalable web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.",
                highlights: ["Led 5+ major projects", "Improved performance by 40%", "Mentored 3 developers"],
              },
              {
                role: "Project Manager",
                company: "Quadrant Alpha Technology Solutions, Inc.",
                period: "2024 - 2025",
                description: "Developed and maintained full-stack applications using React and Node.js. Implemented CI/CD pipelines and improved deployment efficiency.",
                highlights: ["Built 10+ features", "Reduced bugs by 35%", "Automated deployment"],
              },
              {
                role: "Quality Assurance Tester",
                company: "Quadrant Alpha Technology Solutions, Inc.",
                period: "2024 - 2025",
                description: "Started career building responsive web interfaces and backend APIs. Learned best practices in code quality and team collaboration.",
                highlights: ["First production app", "Learned full-stack", "Team player"],
              },
              {
                role: "Business Analyst",
                company: "Quadrant Alpha Technology Solutions, Inc.",
                period: "2024 - 2025",
                description: "Started career building responsive web interfaces and backend APIs. Learned best practices in code quality and team collaboration.",
                highlights: ["First production app", "Learned full-stack", "Team player"],
              },
              {
                role: "Technical Sales Representative",
                company: "Quadrant Alpha Technology Solutions, Inc.",
                period: "2024 - 2025",
                description: "Started career building responsive web interfaces and backend APIs. Learned best practices in code quality and team collaboration.",
                highlights: ["First production app", "Learned full-stack", "Team player"],
              },
              {
                role: "Client Service Representative",
                company: "Quadrant Alpha Technology Solutions, Inc.",
                period: "2024 - 2025",
                description: "Started career building responsive web interfaces and backend APIs. Learned best practices in code quality and team collaboration.",
                highlights: ["First production app", "Learned full-stack", "Team player"],
              },
            ].map((exp, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-10 md:pl-12 border-l-2 border-blue-200 hover:border-blue-600 transition-colors">
                <div className="absolute -left-4 sm:-left-5 md:-left-6 top-0 w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-full border-4 border-white" />
                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900">{exp.role}</h3>
                    <span className="text-sm md:text-base font-semibold text-blue-600">{exp.period}</span>
                  </div>
                  <p className="text-sm md:text-base font-medium text-slate-600">{exp.company}</p>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed mt-2">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.highlights.map((highlight) => (
                      <span key={highlight} className="text-xs md:text-sm px-3 py-1 bg-blue-50 text-blue-700 rounded-full font-medium">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-8 w-full">
          <AnimatedSection animation="fade-in-up" className="max-w-3xl mb-12 md:mb-16">
            <p className="text-xs md:text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Credentials</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">Certificates</h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Building Scalable React Applications",
                date: "Mar 15, 2024",
                excerpt:
                  "Exploring patterns and best practices for scaling React applications to handle millions of users without performance degradation.",
                tags: ["React", "Performance", "Architecture"],
              },
              {
                title: "Database Optimization Strategies",
                date: "Mar 8, 2024",
                excerpt:
                  "Deep dive into query optimization, indexing strategies, and caching patterns that improved our system throughput by 300%.",
                tags: ["PostgreSQL", "DevOps", "Optimization"],
              },
              {
                title: "Microservices: When and Why",
                date: "Feb 28, 2024",
                excerpt:
                  "Analyzing the trade-offs of microservices architecture and when monolithic systems are the better choice for your team.",
                tags: ["Architecture", "DevOps", "Best Practices"],
              },
            ].map((article, idx) => (
              <Card
                key={idx}
                className="bg-white border border-gray-200 p-6 md:p-8 hover:shadow-elevated transition-smooth cursor-pointer group"
              >
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">{article.date}</p>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">{article.excerpt}</p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
                  {article.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-8 max-w-3xl w-full">
          <AnimatedSection animation="fade-in-up" className="mb-12 md:mb-16">
            <p className="text-xs md:text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Let's Connect</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Get In Touch</h2>
            <p className="text-base md:text-lg text-slate-600">
              Have a project in mind or want to collaborate? I'd love to hear from you. Drop me a message and I'll get
              back to you within 24 hours.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 mb-12">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Name</label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white border-gray-300 text-slate-900 placeholder-slate-400 transition-smooth py-2 md:py-3 px-3 md:px-4 text-sm md:text-base"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white border-gray-300 text-slate-900 placeholder-slate-400 transition-smooth py-2 md:py-3 px-3 md:px-4 text-sm md:text-base"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white border-gray-300 text-slate-900 placeholder-slate-400 min-h-32 transition-smooth py-2 md:py-3 px-3 md:px-4 text-sm md:text-base"
                  placeholder="Your message..."
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 text-white hover:bg-blue-700 font-semibold py-3 md:py-4 flex items-center justify-center gap-2 transition-smooth text-sm md:text-base"
              >
                <Send size={18} />
                Send Message
              </Button>
            </form>

            <div className="grid sm:grid-cols-3 gap-6 md:gap-8 pt-12 border-t border-gray-200">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Email</p>
                <a href="mailto:nievaakira@gmail.com" className="text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm md:text-base break-all">
                  nievaakira@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Resume</p>
                <a href="#" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm md:text-base">
                  <Download size={16} />
                  Download PDF
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Social</p>
                <div className="flex gap-4">
                  <a href="https://github.com/dedkid" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm md:text-base">
                    GitHub
                  </a>
                  <a href="https://facebook.com/nievalouki" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm md:text-base">
                    Facebook
                  </a>
                  <a href="--" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm md:text-base">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 md:py-12">
        <div className="container px-4 md:px-8 text-center text-xs md:text-sm">
          <p>© 2026 Akira Nieva. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
