import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, BadgeCheck, BookOpen, Check, CheckCircle2, ChevronLeft,
  ChevronRight, CircleDot, ClipboardCheck, Code2, Copy, Download, Github,
  Linkedin, Mail, Menu, Network, ShieldCheck, Terminal, X, Wrench, Globe
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import "./index.css";

const projects = [
  {
    title: "PigAI Watch",
    subtitle: "AI-Based Farrowing Monitoring & Alert System",
    category: "AI",
    label: "AI / Vision & QA",
    images: ["/img/projects/pig-ai-1.jpeg", "/img/projects/pig-ai-2.jpeg"],
    cover: "/img/projects/pig-ai-1.jpeg",
    coverFallback: "https://placehold.co/600x400/14171F/F59E0B?text=PigAI+Watch+Dashboard",
    gallery: [
      ["/img/projects/pig-ai-1.jpeg", "https://placehold.co/1000x650/14171F/F59E0B?text=PigAI+Vision+Monitor"],
      ["/img/projects/pig-ai-2.jpeg", "https://placehold.co/1000x650/14171F/F59E0B?text=PigAI+Test+Evidence"]
    ],
    overview: "A capstone computer vision system that monitors sows during farrowing, counts piglets, helps prevent crushing, and alerts farmers in real time.",
    stack: ["Python", "YOLOv11", "OpenCV", "ONNX", "Raspberry Pi", "RTSP"],
    contribution: "Validated detection scenarios, checked alert reliability, and documented edge cases across camera and network conditions.",
    github: "https://github.com/durendal11/Prisma-atlas.git"
  },
  {
    title: "Fetch",
    subtitle: "Errand & Delivery Application",
    category: "Mobile",
    label: "Mobile & Testing",
    images: ["/img/projects/fetch-1.jpeg", "/img/projects/fetch-2.jpeg"],
    cover: "/img/projects/fetch-1.jpeg",
    coverFallback: "https://placehold.co/600x400/14171F/F59E0B?text=Fetch+Android+App+UI",
    gallery: [
      ["/img/projects/fetch-1.jpeg", "https://placehold.co/1000x650/14171F/F59E0B?text=Fetch+Rider+Flow"],
      ["/img/projects/fetch-2.jpeg", "https://placehold.co/1000x650/14171F/F59E0B?text=Fetch+Test+Run"]
    ],
    overview: "An Android application connecting customers with riders for convenient delivery and errand services.",
    stack: ["Android Studio", "Java", "Firebase", "Retrofit", "Gson", "Google Places"],
    contribution: "Designed test cases for authentication, delivery state transitions, rider location persistence, and offline/network handoffs.",
    github: "https://github.com/Sciatzy/Fetch.git"
  },
  {
    title: "Online Barbershop Booking and Management System (SaaS)",
    subtitle: "Booking & Business Operations Platform",
    category: "Web",
    label: "Web & Business",
    images: ["/img/projects/barbershop-1.jpeg", "/img/projects/barbershop-2.jpeg", "/img/projects/barbershop-3.jpeg"],
    cover: "/img/projects/barbershop-1.jpeg",
    coverFallback: "https://placehold.co/600x400/14171F/F59E0B?text=Barbershop+Booking+System",
    gallery: [
      ["/img/projects/barbershop-1.jpeg", "https://placehold.co/1000x650/14171F/F59E0B?text=Barbershop+Dashboard"],
      ["/img/projects/barbershop-2.jpeg", "https://placehold.co/1000x650/14171F/F59E0B?text=Barbershop+Booking+Flow"],
      ["/img/projects/barbershop-3.jpeg", "https://placehold.co/1000x650/14171F/F59E0B?text=Barbershop+Business+View"]
    ],
    overview: "A web-based management system streamlining appointment scheduling and everyday barbershop operations.",
    stack: ["JavaScript", "HTML5", "CSS3", "REST APIs"],
    contribution: "Verified booking workflows, input validation, responsive layouts, and API error states for staff and customer journeys.",
    github: "https://github.com/Sciatzy/BarbershopSaas.git"
  },
  {
    title: "Pawfect Match",
    subtitle: "Pet Adoption Matching Application",
    category: "Web",
    label: "Mobile",
    images: ["/img/projects/pawfect-match-1.jpeg", "/img/projects/pawfect-match-2.jpeg", "/img/projects/pawfect-match-3.jpeg"],
    cover: "/img/projects/pawfect-match-1.jpeg",
    coverFallback: "https://placehold.co/600x400/14171F/F59E0B?text=Pawfect+Match+App",
    gallery: [
      ["/img/projects/pawfect-match-1.jpeg", "https://placehold.co/1000x650/14171F/F59E0B?text=Pawfect+Match+Flow"],
      ["/img/projects/pawfect-match-2.jpeg", "https://placehold.co/1000x650/14171F/F59E0B?text=Pawfect+Match+Profiles"],
      ["/img/projects/pawfect-match-3.jpeg", "https://placehold.co/1000x650/14171F/F59E0B?text=Pawfect+Match+Details"]
    ],
    overview: "A pet-matching application helping shelters and users discover suitable pets for adoption.",
    stack: ["Android Studio", "Java", "Firebase"],
    contribution: "Tested profile filtering, image loading, form validation, and reliable user flows across common Android screen sizes.",
    github: "https://github.com/Sciatzy/Pawfect-Match.git"
  }
];

const certifications = [
  {
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "Issued: Jul 13, 2026",
    details: "Covered network communication concepts, IP addressing (IPv4/IPv6), network connectivity testing tools, and secure wireless router configuration.",
    image: "/img/certs/networking-basics-1.png",
    imageFallback: "https://placehold.co/800x600/14171F/F59E0B?text=Cisco+Networking+Basics+Certificate"
  },
  {
    title: "Microsoft Cybersecurity Course: Security, Compliance, and Identity Fundamentals",
    issuer: "Technical Education and Skills Development Authority (TESDA Online Program)",
    date: "Issued: July 12, 2026",
    details: "Covered foundational cybersecurity principles, security, compliance, and identity concepts.",
    image: "/img/certs/tesda-microsoft-cybersecurity.jpeg",
    imageFallback: "https://placehold.co/800x600/14171F/F59E0B?text=TESDA+Microsoft+Cybersecurity+Certificate"
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy (Bukidnon State University)",
    date: "Completed: Dec 23, 2025",
    details: "Covered switching technologies, VLAN configuration, inter-VLAN routing, redundancy protocols, and wireless LAN setup.",
    image: "/img/certs/ccna-1.jpeg",
    imageFallback: "https://placehold.co/800x600/14171F/F59E0B?text=CCNA+Switching+Routing+and+Wireless+Essentials+Certificate"
  }
];

const navItems = [
  ["About", "about"], ["Education", "education"], ["Skills", "skills"],
  ["Projects", "projects"], ["Certificates", "certificates"], ["Contact", "contact"]
];

function ImageWithFallback({ src, fallbackSrc, alt, className = "" }) {
  const [image, setImage] = useState(src);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setImage(src);
    setFailed(false);
  }, [src]);

  return (
    <img
      src={image}
      alt={alt}
      className={className}
      onError={() => {
        if (!failed) {
          setFailed(true);
          setImage(fallbackSrc);
        }
      }}
    />
  );
}

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><span className="eyebrow-line" />{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}

function Modal({ children, onClose, label = "Close dialog" }) {
  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose]);

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <motion.div
        className="modal-shell"
        initial={{ opacity: 0, y: 22, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 22 }}
        role="dialog"
        aria-modal="true"
      >
        <button className="icon-button modal-close" aria-label={label} onClick={onClose}><X size={20} /></button>
        {children}
      </motion.div>
    </motion.div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [projectFilter, setProjectFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [showTestCase, setShowTestCase] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(true);
  const [copied, setCopied] = useState("");
  const visibleProjects = projectFilter === "All"
    ? projects
    : projects.filter((project) => project.category === projectFilter);

  useEffect(() => {
    const sections = ["hero", ...navItems.map(([, id]) => id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top);
        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id === "hero" ? "" : visibleSections[0].target.id);
        }
      },
      { rootMargin: "-24% 0px -62% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const openProject = (project) => {
    setSelectedProject(project);
    setGalleryIndex(0);
  };

  const scrollToSection = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (!section) return;

    const headerHeight = 74;
    const sectionPaddingTop = parseFloat(window.getComputedStyle(section).paddingTop) || 0;
    const breathingRoom = 8;
    const targetPosition = section.getBoundingClientRect().top
      + window.scrollY
      - headerHeight
      - sectionPaddingTop
      + breathingRoom;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
    window.history.replaceState(null, "", `#${id}`);
    setActiveSection(id);
    setMenuOpen(false);
  };

  const copyContact = async (label, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      window.setTimeout(() => setCopied(""), 1800);
    } catch {
      setCopied("");
    }
  };

  return (
    <div className="app-shell">
      <nav className="navbar">
        <a href="#top" className="brand"><span className="brand-mark">SR</span><span>DEV &amp; QA PORTFOLIO</span></a>
        <button className="mobile-menu icon-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {navItems.map(([label, id]) => (
            <a key={id} className={activeSection === id ? "active" : ""} href={`#${id}`} onClick={(event) => scrollToSection(event, id)}>{label}</a>
          ))}
        </div>
      </nav>

      <main id="top">
        <section id="hero" className="hero page-section">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="status-dot" />Available for internship · 2027</p>
              <p className="hero-kicker">SCIATZY MARIE A. RABINA</p>
              <h1>Quality Assurance<br /><span>& IT Support</span></h1>
              <p className="hero-lede">An aspiring <strong>QA & IT Support Specialist</strong> focused on reliable software, thoughtful test cases, and systems that work for people.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">Explore projects <ArrowUpRight size={17} /></a>
                <a className="text-link" href="/CV_RABINA.pdf" download="CV_RABINA.pdf">Download resume <Download size={15} /></a>
              </div>
              <div className="hero-meta"><span><CircleDot size={13} /> Malaybalay City, PH</span><span className="meta-divider" /><span>Open to remote & hybrid</span></div>
            </div>
            <div className={`hero-terminal ${terminalOpen ? "is-open" : "is-collapsed"}`}>
              <button className="terminal-top" onClick={() => setTerminalOpen(!terminalOpen)} aria-expanded={terminalOpen}>
                <span><i /><i /><i /></span><small><Terminal size={12} /> qa_profile.json</small><span className="terminal-state">● SYS_STATUS: OPTIMAL</span>
              </button>
              <AnimatePresence initial={false}>
                {terminalOpen && (
                  <motion.div className="terminal-content" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                    <p><span className="code-muted">01</span> <b className="code-key">const</b> <span className="code-name">engineer</span> = {"{"}</p>
                    <p><span className="code-muted">02</span>&nbsp;&nbsp; name: <span className="code-string">'Sciatzy Marie'</span>,</p>
                    <p><span className="code-muted">03</span>&nbsp;&nbsp; target: <span className="code-string">'QA + IT Support'</span>,</p>
                    <p><span className="code-muted">04</span>&nbsp;&nbsp; focus: [</p>
                    <p><span className="code-muted">05</span>&nbsp;&nbsp;&nbsp;&nbsp; <span className="code-string">'quality assurance'</span>,</p>
                    <p><span className="code-muted">06</span>&nbsp;&nbsp;&nbsp;&nbsp; <span className="code-string">'system reliability'</span>,</p>
                    <p><span className="code-muted">07</span>&nbsp;&nbsp;&nbsp;&nbsp; <span className="code-string">'IT support'</span></p>
                    <p><span className="code-muted">08</span>&nbsp;&nbsp; ],</p>
                    <p><span className="code-muted">09</span>&nbsp;&nbsp; status: <span className="code-string">'learning · testing · improving'</span></p>
                    <p><span className="code-muted">10</span>{"}"}</p>
                    <div className="terminal-cursor" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className="hero-scroll"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /></div>
        </section>

        <section id="about" className="page-section about-section">
          <SectionHeading eyebrow="01 / ABOUT ME" title={<>Curious by nature.<br /><em>Precise by practice.</em></>} />
          <div className="about-grid">
            <div className="about-visual">
              <div className="image-frame"><ImageWithFallback src="/img/profile.jpeg" fallbackSrc="https://placehold.co/400x400/14171F/F59E0B?text=Sciatzy+Profile+Photo" alt="Sciatzy Marie Rabina - Portrait" className="profile-image" /><span className="image-corner tl" /><span className="image-corner br" /></div>
              <div className="profile-caption"><span className="status-dot" />Currently building better systems</div>
            </div>
            <div className="about-copy"><p className="lead-paragraph">I enjoy finding the small details that make a big difference: a test case that catches an edge condition, a clear bug report that saves a team hours, or a troubleshooting step that gets someone back on track.</p><p>As a BSIT student, I’m developing a strong foundation in software quality, test case development, bug hunting, networking, and IT support. My goal is to bring a calm, methodical mindset to an internship team where I can learn fast and contribute with care.</p><div className="about-metadata">{[["Full name", "Sciatzy Marie A. Rabina"], ["Location", "Bukidnon, Philippines"], ["Target role", "QA & IT Support Intern"], ["Availability", "2027 Internship"]].map(([label, value]) => <div className="metadata-item" key={label}><span>{label}</span><b>{value}</b></div>)}</div></div>
          </div>
        </section>

        <section id="education" className="page-section education-section">
          <SectionHeading eyebrow="02 / ACADEMIC JOURNEY" title={<>The foundation behind<br /><em>the work.</em></>} />
          <div className="education-layout">
            <div className="education-card"><div className="card-icon"><BookOpen size={22} /></div><p className="card-label">Degree</p><h3>Bachelor of Science<br />in Information Technology</h3><div className="education-foot"><span>Bukidnon State University</span><span className="year-badge">Expected 2027</span></div></div>
            <div className="coursework"><p className="card-label">Relevant coursework</p><div className="course-grid">{["Software Quality Assurance & Testing", "Networking 1 & Networking 2", "Database Management", "Web and Mobile Application Development", "Systems Analysis & Design", "Artificial Intelligence & Computer Vision"].map((item, index) => <div className="course-item" key={item}><span>0{index + 1}</span><b>{item}</b></div>)}</div></div>
          </div>
        </section>

        <section id="skills" className="page-section skills-section">
          <SectionHeading eyebrow="03 / CAPABILITY MAP" title={<>Tools for the real<br /><em>world.</em></>} copy="A practical toolkit built around asking the right questions, documenting clearly, and solving problems systematically." />
          <div className="skills-grid">
            {[
              ["Quality Assurance", ClipboardCheck, ["Manual testing", "Test case design", "Bug reporting", "Regression testing", "User acceptance testing"]],
              ["IT Support & Networking", Network, ["TCP/IP & IP addressing", "Network troubleshooting", "Hardware diagnostics", "System configuration", "Technical documentation"]],
              ["Development & Tools", Code2, ["Java & Python", "JavaScript & HTML/CSS", "Firebase & REST APIs", "Git & GitHub", "Android Studio & VS Code"]]
            ].map(([title, Icon, items]) => <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }} className="skill-card" key={title}><div className="skill-card-head"><span className="card-icon"><Icon size={20} /></span><h3>{title}</h3></div><ul>{items.map((item) => <li key={item}><CheckCircle2 size={15} />{item}</li>)}</ul></motion.div>)}
          </div>
          <button className="test-case-banner" onClick={() => setShowTestCase(true)}><div className="tc-icon"><ShieldCheck size={23} /></div><div><p className="card-label">Interactive QA artifact</p><h3>Test Case Sample Viewer <span>TC-FETCH-089</span></h3></div><ArrowUpRight className="banner-arrow" /></button>
        </section>

        <section id="projects" className="page-section projects-section">
          <SectionHeading eyebrow="04 / SELECTED WORK" title={<>Proof in the<br /><em>process.</em></>} copy="A selection of projects where I’ve practiced building, testing, troubleshooting, and improving." />
          <div className="filter-row">{["All", "Mobile", "AI", "Web"].map((filter) => <button key={filter} className={projectFilter === filter ? "filter active" : "filter"} onClick={() => setProjectFilter(filter)}>{filter}<span>{filter === "All" ? projects.length : projects.filter((project) => project.category === filter).length}</span></button>)}</div>
          <div className="projects-grid">{visibleProjects.map((project, index) => <motion.article layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} key={project.title} className="project-card" onClick={() => openProject(project)}><div className="project-image-wrap"><ImageWithFallback src={project.cover} fallbackSrc={project.coverFallback} alt={`${project.title} cover`} className="project-image" /><span className="project-number">0{index + 1}</span><span className="view-project">View project <ArrowUpRight size={16} /></span></div><div className="project-card-body"><div><p className="project-label">{project.label}</p><h3>{project.title}</h3><p>{project.subtitle}</p><div className="project-stack-preview">{project.stack.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div></div><ArrowUpRight className="project-arrow" size={20} /></div></motion.article>)}</div>
        </section>

        <section id="certificates" className="page-section certificates-section">
          <SectionHeading eyebrow="05 / CERTIFICATIONS & PROOF" title={<>Always learning.<br /><em>Always validating.</em></>} copy="Training that strengthens my technical foundation and gives me more ways to help a team." />
          <div className="cert-grid">{certifications.map((cert) => <article className="cert-card" key={cert.title}><button className="cert-image-button" onClick={() => setSelectedCert(cert)}><ImageWithFallback src={cert.image} fallbackSrc={cert.imageFallback} alt={`${cert.title} certificate`} className="cert-image" /><span className="zoom-label">View scan <ArrowUpRight size={15} /></span></button><div className="cert-body"><div className="cert-icon"><BadgeCheck size={19} /></div><div><p className="card-label">{cert.issuer}</p><h3>{cert.title}</h3><p className="cert-details">{cert.details}</p><span className="cert-date">{cert.date}</span></div></div></article>)}</div>
        </section>

        <section id="contact" className="contact-section page-section">
          <div className="contact-inner">
            <p className="eyebrow"><span className="eyebrow-line" />06 / LET'S CONNECT</p>
            <h2>Let’s make<br /><em>quality visible.</em></h2>
            <p>Have an internship opportunity, a testing question, or a system that needs troubleshooting? Send a note and I’ll get back to you.</p>
            <div className="direct-actions">
              <div className="direct-action-grid">
                <div className="direct-action-card email-action">
                  <div className="direct-action-icon"><Mail size={20} /></div>
                  <div className="direct-action-copy"><span>Email me</span><a href="mailto:sciatzymarierabina@gmail.com">sciatzymarierabina@gmail.com</a></div>
                  <div className="direct-action-buttons"><a className="action-link" href="https://mail.google.com/mail/?view=cm&fs=1&to=sciatzymarierabina@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Open Gmail compose window">Open <ArrowUpRight size={15} /></a><button onClick={() => copyContact("Email", "sciatzymarierabina@gmail.com")} aria-label="Copy email address" className="copy-button">{copied === "Email" ? <><Check size={15} /> Copied</> : <><Copy size={15} /> Copy</>}</button></div>
                </div>
                <a className="direct-action-card" href="https://linkedin.com/in/sciatzy-rabina-95350b437" target="_blank" rel="noreferrer">
                  <div className="direct-action-icon"><Linkedin size={20} /></div>
                  <div className="direct-action-copy"><span>LinkedIn profile</span><b>Connect professionally</b></div>
                  <ArrowUpRight className="direct-action-arrow" size={18} />
                </a>
                <a className="direct-action-card" href="https://github.com/Sciatzy" target="_blank" rel="noreferrer">
                  <div className="direct-action-icon"><Github size={20} /></div>
                  <div className="direct-action-copy"><span>GitHub repositories</span><b>Review my project work</b></div>
                  <ArrowUpRight className="direct-action-arrow" size={18} />
                </a>
                <div className="direct-action-card portfolio-action">
                  <div className="direct-action-icon"><Globe size={20} /></div>
                  <div className="direct-action-copy"><span>Portfolio</span><a className="portfolio-link" href="https://sciatzy-rabina-portfolio.vercel.app" target="_blank" rel="noopener noreferrer">View My Portfolio ↗</a></div>
                </div>
                <a className="direct-action-card resume-action" href="/CV_RABINA.pdf" download="CV_RABINA.pdf">
                  <div className="direct-action-icon"><Download size={20} /></div>
                  <div className="direct-action-copy"><span>Resume / CV</span><b>Download my credentials</b></div>
                  <Download className="direct-action-arrow" size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer><span>© 2027 Sciatzy Marie A. Rabina</span><span>Designed & built with intention <span className="amber">✦</span></span><div className="footer-links"><a href="https://github.com/Sciatzy" aria-label="GitHub"><Github size={17} /></a><a href="https://linkedin.com/in/sciatzy-rabina-95350b437" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="mailto:sciatzymarierabina@gmail.com" aria-label="Email"><Mail size={17} /></a></div></footer>

      <AnimatePresence>{selectedCert && <Modal onClose={() => setSelectedCert(null)} label="Close certificate preview"><div className="lightbox-content"><p className="eyebrow">Certificate scan</p><h2>{selectedCert.title}</h2><ImageWithFallback src={selectedCert.image} fallbackSrc={selectedCert.imageFallback} alt={selectedCert.title} className="lightbox-image" /></div></Modal>}</AnimatePresence>
      <AnimatePresence>{selectedProject && <Modal onClose={() => setSelectedProject(null)} label="Close project details"><div className="project-modal"><div className="project-modal-gallery"><ImageWithFallback src={selectedProject.gallery[Math.min(galleryIndex, selectedProject.gallery.length - 1)][0]} fallbackSrc={selectedProject.gallery[Math.min(galleryIndex, selectedProject.gallery.length - 1)][1]} alt={`${selectedProject.title} gallery view ${galleryIndex + 1}`} className="gallery-image" />{selectedProject.gallery.length > 1 && <><button className="gallery-control previous" onClick={(event) => { event.stopPropagation(); setGalleryIndex((current) => (current - 1 + selectedProject.gallery.length) % selectedProject.gallery.length); }}><ChevronLeft /></button><button className="gallery-control next" onClick={(event) => { event.stopPropagation(); setGalleryIndex((current) => (current + 1) % selectedProject.gallery.length); }}><ChevronRight /></button><div className="gallery-dots">{selectedProject.gallery.map((_, index) => <button key={index} className={index === galleryIndex ? "gallery-dot active" : "gallery-dot"} onClick={(event) => { event.stopPropagation(); setGalleryIndex(index); }} aria-label={`View image ${index + 1}`} />)}</div></>}</div><div className="project-modal-copy"><p className="project-label">{selectedProject.label}</p><h2>{selectedProject.title}</h2><p className="modal-overview">{selectedProject.overview}</p><p className="card-label">Stack</p><div className="stack-tags">{selectedProject.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="contribution"><Wrench size={17} /><div><p className="card-label">QA & technical contribution</p><p>{selectedProject.contribution}</p></div></div><a className="button button-primary" href={selectedProject.github} target="_blank" rel="noreferrer">View repository <Github size={16} /></a></div></div></Modal>}</AnimatePresence>
      <AnimatePresence>{showTestCase && <Modal onClose={() => setShowTestCase(false)} label="Close test case"><div className="test-modal"><div className="tc-heading"><div className="tc-icon"><ShieldCheck size={24} /></div><div><p className="eyebrow">QA artifact · TC-FETCH-089</p><h2>Validate Rider Location<br /><em>Persistence under Network Handoff</em></h2></div></div><div className="test-meta"><span><b>Priority</b> High</span><span><b>Type</b> Functional / Recovery</span><span><b>Status</b> <i className="status-badge">Passed</i></span></div><div className="test-steps"><div><span>01</span><div><b>Precondition</b><p>Rider is authenticated and actively sharing location while connected to Wi-Fi.</p></div></div><div><span>02</span><div><b>Action</b><p>Move outside Wi-Fi range and allow the device to hand off to mobile data.</p></div></div><div><span>03</span><div><b>Expected result</b><p>Location updates continue without duplicate markers, stale coordinates, or a rider status reset.</p></div></div><div><span>04</span><div><b>Observed result</b><p className="passed-text"><CheckCircle2 size={15} /> Location persisted correctly after handoff. No data loss observed.</p></div></div></div></div></Modal>}</AnimatePresence>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
