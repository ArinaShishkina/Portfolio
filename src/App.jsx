import React, { useEffect, useRef } from 'react';

const GRADUATION_IMG =
  'https://files.manuscdn.com/user_upload_by_module/session_file/310519663417547159/HFSrcRnaWdrCThFd.jpg';
const projectVideo = fileName => `${import.meta.env.BASE_URL}videos/${fileName}`;
const YOUTUBE_1 = 'https://www.youtube.com/embed/d_rhRVEV77c?rel=0&modestbranding=1';
const YOUTUBE_2 = 'https://www.youtube.com/embed/qpCutsM-9Hc?rel=0&modestbranding=1';
const VIDEO_3 = projectVideo('zavarka.mp4');

const skillCards = [
  {
    icon: '🎨',
    title: 'Branding',
    desc: 'Creating cohesive brand identities that resonate with target audiences and drive recognition across all touchpoints.',
    badges: ['Brand Strategy', 'Visual Identity'],
  },
  {
    icon: '🌐',
    title: 'Website Development',
    desc: 'Building responsive, user-friendly websites that combine aesthetics with functionality and performance.',
    badges: ['HTML/CSS', 'UX Design'],
  },
  {
    icon: '📊',
    title: 'Strategy',
    desc: 'Developing comprehensive marketing strategies backed by data analysis and market research to achieve business goals.',
    badges: ['Market Research', 'Analytics'],
  },
  {
    icon: '💰',
    title: 'Paid Ads',
    desc: 'Managing and optimising paid advertising campaigns across multiple platforms to maximise ROI and reach.',
    badges: ['Google Ads', 'Facebook Ads'],
  },
  {
    icon: '📢',
    title: 'PR & Communications',
    desc: 'Crafting compelling narratives and managing communications that build brand reputation and media relationships.',
    badges: ['Press Releases', 'Media Relations'],
  },
  {
    icon: '✉️',
    title: 'Email Marketing',
    desc: 'Designing and executing targeted email campaigns that engage subscribers and drive conversions.',
    badges: ['Campaign Design', 'Segmentation'],
  },
];

const tools = [
  { icon: '🎨', name: 'Figma' },
  { icon: '🖼', name: 'Canva' },
  { icon: '📊', name: 'Google Analytics' },
  { icon: '📈', name: 'Tableau' },
  { icon: '💻', name: 'SQL' },
  { icon: '📱', name: 'Office 365' },
];

const workCards = [
  {
    type: 'embed',
    embedSrc: YOUTUBE_1,
    category: 'Brand Video',
    title: 'Emerald Brand Project',
    desc: 'Creative brand video showcasing visual storytelling, colour grading, and professional video production for a luxury brand concept.',
  },
  {
    type: 'embed',
    embedSrc: YOUTUBE_2,
    category: 'Engagement Strategy',
    title: 'UCD Smurfit Interview Reel',
    desc: 'Data-driven interview content created after analysing trending formats and engagement patterns. Optimised for social media reach and audience interaction.',
  },
  {
    type: 'video',
    src: VIDEO_3,
    category: 'Product Demo',
    title: 'Product Showcase',
    desc: 'Product demonstration content designed to highlight key features and benefits while maintaining high production quality and engagement.',
  },
  {
    type: 'video',
    src: '',
    category: 'Social Media',
    title: 'Social Media Campaign',
    desc: 'Multi-platform social media campaign designed to drive engagement and brand awareness across Instagram, TikTok, and Facebook.',
  },
  {
    type: 'video',
    src: '',
    category: 'Brand Design',
    title: 'Visual Identity Package',
    desc: 'Comprehensive visual identity design including logo, colour palette, typography, and brand guidelines for a new business launch.',
  },
  {
    type: 'emoji',
    emoji: '📈',
    category: 'Analytics & Strategy',
    title: 'Digital Marketing Strategy',
    desc: 'Full digital marketing strategy with SEO recommendations, content calendar, and performance tracking framework for a food brand.',
  },
];

const mottos = [
  'Consistency builds visibility',
  'Strong visuals create identity',
  'Audience insights drive performance',
  'Variety keeps content engaging',
  'Quality creates impact',
];

function useFadeUp(ref) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = ref.current?.querySelectorAll('.fade-up');
    elements?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [ref]);
}

function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(30,18,10,0.97)' : 'rgba(30,18,10,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        transition: 'background 0.3s',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 64,
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 22,
            color: '#7EC8E3',
            textDecoration: 'none',
            letterSpacing: 2,
          }}
        >
          ARINA
        </a>

        <div style={{ display: 'flex', gap: 40 }} className="desktop-nav">
          {['About', 'Skills', 'Work', 'Contact'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: 'rgba(255,255,255,0.75)',
                textDecoration: 'none',
                fontSize: 15,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.target.style.color = '#7EC8E3')}
              onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,0.75)')}
            >
              {item}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: 24,
            cursor: 'pointer',
          }}
          className="mobile-menu-btn"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div
          style={{
            background: 'rgba(30,18,10,0.98)',
            padding: '16px 32px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
          className="mobile-menu"
        >
          {['About', 'Skills', 'Work', 'Contact'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                fontSize: 16,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 32px 60px',
      }}
    >
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.9s ease, transform 0.9s ease',
        }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(48px, 8vw, 96px)',
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.1,
            margin: '0 0 16px',
          }}
        >
          Digital Marketing
        </h1>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(40px, 7vw, 88px)',
            fontWeight: 700,
            color: '#7EC8E3',
            lineHeight: 1.1,
            margin: '0 0 32px',
          }}
        >
          &amp; Social Media
        </h1>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 18,
            color: 'rgba(255,255,255,0.65)',
            maxWidth: 520,
            margin: '0 auto 48px',
            lineHeight: 1.6,
          }}
        >
          Creative strategist turning data into stories that connect with audiences
        </p>
        <div
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}
        >
          <a
            href="#contact"
            style={{
              padding: '14px 32px',
              borderRadius: 50,
              background: '#7EC8E3',
              color: '#1a0f07',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 15,
              textDecoration: 'none',
              transition: 'transform 0.2s, background 0.2s',
            }}
            onMouseEnter={e => {
              e.target.style.background = '#5db5d0';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.target.style.background = '#7EC8E3';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Get In Touch
          </a>
          <a
            href="#work"
            style={{
              padding: '14px 32px',
              borderRadius: 50,
              background: 'transparent',
              color: '#e855a0',
              border: '2px solid #e855a0',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 15,
              textDecoration: 'none',
              transition: 'transform 0.2s, background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => {
              e.target.style.background = '#e855a0';
              e.target.style.color = '#fff';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#e855a0';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            View My Work
          </a>
        </div>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            ['📊', 'Data-Driven'],
            ['🎨', 'Creative'],
            ['📱', 'Social Media'],
            ['🌍', 'Global Mindset'],
          ].map(([emoji, label]) => (
            <span
              key={label}
              style={{
                padding: '8px 18px',
                borderRadius: 50,
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.7)',
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
              }}
            >
              {emoji} {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const ref = useRef(null);
  useFadeUp(ref);
  return (
    <section id="about" ref={ref} style={{ padding: '100px 32px', background: 'rgba(255,255,255,0.02)' }}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'start',
        }}
        className="about-grid"
      >
        <div className="fade-up">
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: 700,
              color: '#fff',
              marginBottom: 8,
              lineHeight: 1.1,
            }}
          >
            About <span style={{ fontStyle: 'italic', color: '#7EC8E3' }}>//Me</span>
          </h2>
          <div style={{ width: 60, height: 3, background: '#7EC8E3', marginBottom: 36, borderRadius: 2 }} />
          {[
            "I started my marketing journey with curiosity more than certainty - I knew I was drawn to creativity, but I didn't yet know how many ways I could use it. That curiosity led me to complete a Bachelor's degree in Digital Marketing with Analytics at SETU Carlow, where I built a strong foundation across web development, email marketing, international marketing, B2B, PR, event management, brand management, and analytics.",
            "Wanting to push myself further, I recently completed my Master's in Marketing Practice (MDP) at UCD Smurfit. This experience was where everything really came together. Over the course of the year, I worked on six real client projects across a variety of industries, including food, pharmacy, charity, and co-education. It was here that I not only expanded my knowledge but truly applied it - learning how to think strategically, adapt quickly, and deliver real solutions in real-world situations.",
            "What I've discovered along the way is that I'm at my best when I'm combining both sides of marketing - the analytical and the creative. I love using data to understand people, but even more, I enjoy turning those insights into stories that bring brands to life and connect with audiences in a meaningful way.",
          ].map((p, i) => (
            <p
              key={i}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.8,
                marginBottom: 20,
              }}
            >
              {p}
            </p>
          ))}
        </div>
        <div
          className="fade-up"
          style={{ borderRadius: 20, overflow: 'hidden', aspectRatio: '3/4', boxShadow: '0 40px 80px rgba(0,0,0,0.5)' }}
        >
          <img src={GRADUATION_IMG} alt="Arina Shishkina graduation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const ref = useRef(null);
  useFadeUp(ref);
  return (
    <section id="skills" ref={ref} style={{ padding: '100px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="fade-up" style={{ textAlign: 'center', marginBottom: 64 }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: '#7EC8E3',
              marginBottom: 12,
            }}
          >
            Expertise
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 700,
              color: '#fff',
              marginBottom: 16,
            }}
          >
            Skills &amp; <span style={{ fontStyle: 'italic', color: '#7EC8E3' }}>Expertise</span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>
            Built for attention, designed for impact
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 24,
            marginBottom: 60,
          }}
        >
          {skillCards.map((card, i) => (
            <div
              key={i}
              className="fade-up skill-card-hover"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 16,
                padding: 28,
                transition: 'transform 0.3s, border-color 0.3s, background 0.3s',
                cursor: 'default',
              }}
            >
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 12 }}>
                {card.icon} {card.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.7,
                  marginBottom: 16,
                }}
              >
                {card.desc}
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {card.badges.map(b => (
                  <span
                    key={b}
                    style={{
                      padding: '4px 12px',
                      borderRadius: 50,
                      background: 'rgba(126,200,227,0.12)',
                      border: '1px solid rgba(126,200,227,0.25)',
                      color: '#7EC8E3',
                      fontSize: 12,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="fade-up"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 20,
            padding: '40px 40px 32px',
          }}
        >
          <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: 20, fontWeight: 600, color: '#fff', marginBottom: 28 }}>
            🛠 Tools &amp; Software
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 16 }}>
            {tools.map(t => (
              <div
                key={t.name}
                style={{
                  textAlign: 'center',
                  padding: '20px 12px',
                  background: 'rgba(255,255,255,0.04)',
                  borderRadius: 12,
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  const ref = useRef(null);
  useFadeUp(ref);
  return (
    <section id="work" ref={ref} style={{ padding: '100px 32px', background: 'rgba(255,255,255,0.02)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="fade-up" style={{ textAlign: 'center', marginBottom: 64 }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: '#7EC8E3',
              marginBottom: 12,
            }}
          >
            Portfolio
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 700,
              color: '#fff',
              marginBottom: 16,
            }}
          >
            Example <span style={{ fontStyle: 'italic', color: '#7EC8E3' }}>//Content</span>
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16,
              color: 'rgba(255,255,255,0.5)',
              maxWidth: 600,
              margin: '0 auto',
            }}
          >
            A selection of projects and content I&apos;ve created that showcase my approach to marketing, design, and storytelling.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 28 }}>
          {workCards.map((card, i) => (
            <div
              key={i}
              className="fade-up work-card-hover"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 16,
                overflow: 'hidden',
                transition: 'transform 0.3s, border-color 0.3s',
              }}
            >
              {card.type === 'video' && card.src ? (
                <video
                  style={{ width: '100%', height: 250, objectFit: 'cover', display: 'block', background: '#000' }}
                  controls
                  controlsList="nodownload"
                  preload="metadata"
                >
                  <source src={card.src} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              ) : card.type === 'embed' && card.embedSrc ? (
                <iframe
                  src={card.embedSrc}
                  title={card.title}
                  style={{ width: '100%', height: 250, border: 0, display: 'block', background: '#000' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <div
                  style={{
                    height: 250,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(126,200,227,0.05)',
                    gap: 12,
                  }}
                >
                  <span style={{ fontSize: 40 }}>🎬</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>
                    Add file in public/videos and set card src
                  </span>
                </div>
              )}
              <div style={{ padding: '24px 24px 28px' }}>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: 50,
                    background: 'rgba(126,200,227,0.12)',
                    border: '1px solid rgba(126,200,227,0.25)',
                    color: '#7EC8E3',
                    fontSize: 12,
                    fontFamily: "'Inter', sans-serif",
                    marginBottom: 12,
                  }}
                >
                  {card.category}
                </span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 600, color: '#fff', marginBottom: 10 }}>
                  {card.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="fade-up"
          style={{
            marginTop: 80,
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 20,
            padding: '48px 40px',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }} className="motto-grid">
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 32, color: '#7EC8E3', marginBottom: 24 }}>
                My Motto
              </h3>
              <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 20 }}>
                How I Approach Social Media Growth
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {mottos.map((m, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 15,
                      color: 'rgba(255,255,255,0.7)',
                    }}
                  >
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#7EC8E3', flexShrink: 0 }} />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  display: 'inline-flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: 20,
                  padding: '32px 40px',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div style={{ position: 'relative', width: 120, height: 120, marginBottom: 16 }}>
                  <svg width="120" height="120" style={{ transform: 'rotate(-90deg)' }}>
                    <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="url(#grad)"
                      strokeWidth="8"
                      strokeDasharray="280"
                      strokeDashoffset="40"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#e855a0" />
                        <stop offset="100%" stopColor="#7EC8E3" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 11,
                        color: 'rgba(255,255,255,0.5)',
                        marginBottom: 2,
                      }}
                    >
                      Views
                    </span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 22, fontWeight: 700, color: '#fff' }}>38,906</span>
                  </div>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
                  Last 30 days - 22 Feb to 23 Mar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ padding: '100px 32px' }}>
      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#7EC8E3',
            marginBottom: 16,
          }}
        >
          Get In Touch
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: 12,
            fontStyle: 'italic',
          }}
        >
          Contact Me
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 18,
            color: '#7EC8E3',
            fontStyle: 'italic',
            marginBottom: 48,
            lineHeight: 1.6,
          }}
        >
          Let&apos;s create meaningful connections between your brand and your customers.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center', marginBottom: 48 }}>
          {[
            { emoji: '📸', label: 'INST: SHISHKARIC_', href: 'https://instagram.com/shishkaric_' },
            { emoji: '📞', label: '+353 83 022 1043', href: 'tel:+353830221043' },
            { emoji: '✉️', label: 'SHISHKINA.ARINA.25@GMAIL.COM', href: 'mailto:shishkina.arina.25@gmail.com' },
          ].map(item => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '14px 32px',
                borderRadius: 50,
                border: '1px solid rgba(255,193,7,0.5)',
                color: 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                fontWeight: 500,
                transition: 'border-color 0.2s, color 0.2s, background 0.2s',
                letterSpacing: 0.5,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#FFC107';
                e.currentTarget.style.color = '#FFC107';
                e.currentTarget.style.background = 'rgba(255,193,7,0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,193,7,0.5)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <span>{item.emoji}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ padding: '24px 32px', borderTop: '1px solid rgba(255,255,255,0.07)', textAlign: 'center' }}>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
        &copy; 2026 Arina Shishkina. All rights reserved.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{ background: '#1e120a', minHeight: '100vh', color: '#fff' }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
