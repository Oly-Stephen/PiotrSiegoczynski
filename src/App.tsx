import React, { useState } from 'react';
import './App.css';
import AppointmentForm from './components/AppointmentForm';

const heroBg = '/images/hero-bg.png';
const image2 = '/images/image2.png';

function App() {
  const [isAppointmentFormOpen, setIsAppointmentFormOpen] = useState(false);

  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${heroBg})`
  };

  const warriorsImageStyle = {
    backgroundImage: `url(${image2})`
  };

  return (
    <div className="App">
      <header>
        <div className="header-logo">PIOTR S.</div>
        <nav className="main-nav">
          <a href="#hero" className="nav-link">Homepage</a>
          <a href="#about" className="nav-link">O Mnie</a>
          <a href="#services" className="nav-link">Wartości</a>
        </nav>
        <a href="#contact" className="join-button">Kontakt</a>
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

        <section id="about" className="content-section">
          <div className="content-text">
            <h2>Moja droga do mistrzostwa</h2>
            <p>
              Rozpocząłem swoją karierę sportową w latach 80-tych, a pierwsze sukcesy przyszły szybko - zarówno na arenie krajowej, jak i międzynarodowej. Na przestrzeni lat zdobyłem tytuły mistrza Polski, Europy i świata w kickboxingu.
            </p>
            <p>
              Dziś, oprócz własnego treningu, dzielę się swoim doświadczeniem z innymi - jako trener, mentor i ambasador zdrowego stylu życia. Uczę nie tylko technik walki, ale także odwagi, pokory i konsekwencji.
            </p>
            <button className="button-style">Poznaj Moją Historię</button>
          </div>
          <div className="content-video-container">
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

        <section id="services" className="warriors-section">
          <div className="warriors-image" style={warriorsImageStyle} />
          <div className="warriors-content">
            <p className="subtitle">WARTOŚCI</p>
            <h2>Wojownicy Piotra: Przekraczając Granice, Osiągając Zwycięstwo!</h2>
            <p>Wierzę, że prawdziwa siła pochodzi z dyscypliny, determinacji i nieustannego dążenia do doskonałości. Moje motto to nie tylko słowa, to filozofia życia i treningu.</p>
            <ul className="icon-list">
              <li><span>👁️</span> <strong>Wizja:</strong> Inspirować i kształtować kolejne pokolenia mistrzów.</li>
              <li><span>🎯</span> <strong>Misja:</strong> Dostarczać najwyższej jakości trening, budując siłę fizyczną i mentalną.</li>
              <li><span>❤️</span> <strong>Motto:</strong> Trenuj ciężej, walcz mądrzej, nigdy się nie poddawaj.</li>
            </ul>
          </div>
        </section>

        <section id="stats" className="stats-bar">
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Tytułów Mistrza Świata</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">30+</span>
            <span className="stat-label">Lat Doświadczenia</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1000+</span>
            <span className="stat-label">Wyszkolonych Zawodników</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Pasja i Zaangażowanie</span>
          </div>
        </section>

        <section id="story" className="learn-story">
           <h2>Moja Droga Do Mistrzostwa</h2>
           <p>Zapraszam Cię do świata sportu, gdzie pokonywanie własnych ograniczeń staje się codziennością. Odkryj historię pasji, determinacji i sukcesu.</p>
           <button className="button-style">Czytaj Dalej</button>
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

        <section id="contact" className="contact-section">
          <h2>Skontaktuj się ze mną</h2>
          <p>Masz pytania? Chcesz zaprosić mnie na wydarzenie, przeprowadzić trening lub nawiązać współpracę?</p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📩</span>
              <p>Email: <a href="mailto:kontakt@piotrsiegoczynski.pl">kontakt@piotrsiegoczynski.pl</a></p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <p>Telefon: <a href="tel:+48123456789">+48 123 456 789</a></p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <p>Warszawa</p>
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
