import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import AppointmentForm from './components/AppointmentForm';

const heroBg = '/images/hero-bg.png';
const image2 = '/images/image2.png';

function App() {
  const [isAppointmentFormOpen, setIsAppointmentFormOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Refs for sections to be animated
  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Setup intersection observer for animations
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    animatedElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      animatedElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  // Smooth scroll for navigation links
  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    setIsMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${heroBg})`
  };

  const warriorsImageStyle = {
    backgroundImage: `url(${image2})`
  };

  return (
    <div className="App">
      <header className={isScrolled ? 'scrolled' : ''}>
        <div className="header-logo">PIOTR S.</div>
        
        <div className={`mobile-menu-button ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <a href="#hero" className="nav-link" onClick={(e) => handleNavClick(e, 'hero')}>Homepage</a>
          <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>O Mnie</a>
          <a href="#services" className="nav-link" onClick={(e) => handleNavClick(e, 'services')}>Wartości</a>
          <a href="#contact" className="join-button-mobile" onClick={(e) => handleNavClick(e, 'contact')}>Kontakt</a>
        </nav>
        
        <a href="#contact" className="join-button desktop-only" onClick={(e) => handleNavClick(e, 'contact')}>Kontakt</a>
      </header>

      <main>
        <section id="hero" className="hero" style={heroStyle}>
          <h1>Piotr Siegoczyński – Mistrz Świata w Kickboxingu</h1>
          <h2>Zawodnik. Trener. Motywator.</h2>
          <p className="motto">"Mistrza nie rodzi się w ringu – mistrza rodzi się na treningu."</p>
          
          <div className="power-blocks">
            <div className="power-block">
              <span className="power-icon">🥇</span>
              <h3>Mistrz Świata</h3>
              <p>Wielokrotny mistrz świata w kickboxingu</p>
            </div>
            <div className="power-block">
              <span className="power-icon">🧠</span>
              <h3>Mentor i Trener</h3>
              <p>Doświadczony trener i mentor</p>
            </div>
            <div className="power-block">
              <span className="power-icon">🥊</span>
              <h3>Doświadczenie</h3>
              <p>Ponad 30 lat w kickboxingu</p>
            </div>
          </div>
        </section>

        <section id="about" ref={aboutRef} className="content-section">
          <div className="content-text fade-in">
            <h2>Moja droga do mistrzostwa</h2>
            <p>
              Rozpocząłem swoją karierę sportową w latach 80-tych, a pierwsze sukcesy przyszły szybko - zarówno na arenie krajowej, jak i międzynarodowej. Na przestrzeni lat zdobyłem tytuły mistrza Polski, Europy i świata w kickboxingu.
            </p>
            <p>
              Dziś, oprócz własnego treningu, dzielę się swoim doświadczeniem z innymi - jako trener, mentor i ambasador zdrowego stylu życia. Uczę nie tylko technik walki, ale także odwagi, pokory i konsekwencji.
            </p>
            <a 
              href="https://pl.wikipedia.org/wiki/Piotr_Siegoczy%C5%84ski" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="button-style"
            >
              Poznaj Moją Historię
            </a>
          </div>
          <div className="content-video-container fade-in fade-in-delay-1">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/3fZjPy8eaeE?si=y793AcYkv3atl9ll"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section id="services" ref={servicesRef} className="warriors-section">
          <div className="warriors-image fade-in" style={warriorsImageStyle} />
          <div className="warriors-content fade-in fade-in-delay-1">
            <p className="subtitle">WARTOŚCI</p>
            <h2>Wojownicy Piotra: Przekraczając Granice, Osiągając Zwycięstwo!</h2>
            <p>Wierzę, że prawdziwa siła pochodzi z dyscypliny, determinacji i nieustannego dążenia do doskonałości. Moje motto to nie tylko słowa, to filozofia życia i treningu.</p>
            <ul className="icon-list">
              <li className="fade-in fade-in-delay-1"><span>👁️</span> <strong>Wizja:</strong> Inspirować i kształtować kolejne pokolenia mistrzów.</li>
              <li className="fade-in fade-in-delay-2"><span>🎯</span> <strong>Misja:</strong> Dostarczać najwyższej jakości trening, budując siłę fizyczną i mentalną.</li>
              <li className="fade-in fade-in-delay-3"><span>❤️</span> <strong>Motto:</strong> Trenuj ciężej, walcz mądrzej, nigdy się nie poddawaj.</li>
            </ul>
          </div>
        </section>

        <section id="stats" ref={statsRef} className="stats-bar">
          <div className="stat-item fade-in">
            <span className="stat-number">10+</span>
            <span className="stat-label">Tytułów Mistrza Świata</span>
          </div>
          <div className="stat-item fade-in fade-in-delay-1">
            <span className="stat-number">30+</span>
            <span className="stat-label">Lat Doświadczenia</span>
          </div>
          <div className="stat-item fade-in fade-in-delay-2">
            <span className="stat-number">1000+</span>
            <span className="stat-label">Wyszkolonych Zawodników</span>
          </div>
          <div className="stat-item fade-in fade-in-delay-3">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Pasja i Zaangażowanie</span>
          </div>
        </section>

        <section id="story" ref={storyRef} className="learn-story">
           <h2 className="fade-in">Moja Droga Do Mistrzostwa</h2>
           <p className="fade-in fade-in-delay-1">Zapraszam Cię do świata sportu, gdzie pokonywanie własnych ograniczeń staje się codziennością. Odkryj historię pasji, determinacji i sukcesu.</p>
           <a 
              href="http://kickcenter.pl/zawodnicy/piotr-siegoczynski/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="button-style fade-in fade-in-delay-2"
            >
              Czytaj Dalej
            </a>
        </section>

        <section id="training" className="cta">
          <h2>Gotowy na Trening z Mistrzem?</h2>
          <p>Zrób pierwszy krok ku lepszej formie, większej pewności siebie i mistrzowskiej technice.</p>
          <button 
            className="button-style"
            onClick={() => setIsAppointmentFormOpen(true)}
          >
            Umów Się Na Trening
          </button>
        </section>

        <section id="contact" ref={contactRef} className="contact-section">
          <h2 className="fade-in">Kontakt</h2>
          <p className="fade-in fade-in-delay-1">Skontaktuj się ze mną w sprawie treningów, współpracy lub wydarzeń</p>
          <div className="contact-info">
            <div className="contact-item fade-in fade-in-delay-1">
              <span className="contact-icon">📩</span>
              <h3>Email</h3>
              <p><a href="mailto:kontakt@piotrsiegoczynski.pl">kontakt@piotrsiegoczynski.pl</a></p>
            </div>
            <div className="contact-item fade-in fade-in-delay-2">
              <span className="contact-icon">📱</span>
              <h3>Telefon</h3>
              <p><a href="tel:+48123456789">+48 123 456 789</a></p>
            </div>
            <div className="contact-item fade-in fade-in-delay-3">
              <span className="contact-icon">📍</span>
              <h3>Lokalizacja</h3>
              <p>Warszawa, Polska</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Piotr Siegoczyński. Wszelkie prawa zastrzeżone.</p>
        <p>Created by Adewumi Oluwayanmi Stephen</p>
      </footer>

      <AppointmentForm 
        isOpen={isAppointmentFormOpen}
        onClose={() => setIsAppointmentFormOpen(false)}
      />
    </div>
  );
}

export default App;
