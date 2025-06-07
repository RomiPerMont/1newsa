import './App.css';
import Header from './components/Header';
import NewsCard from './components/NewsCards';
import BreakingNewsBanner from './components/BreakingNewsBanner';
import ColorBar from './components/ColorBar';
import WeekInPictures from './components/WeekInPictures';
import LikesPage from './components/LikesPage';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import BreakingNewsPage from './components/BreakingNewsPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

import TopStories from './pages/TopStories';
import Latest from './pages/Latest';
import Games from './pages/Games';
import Podcast from './pages/Podcast';
import NewZealand from './pages/NewZealand'; 
import WorldNews from './pages/WorldNews'; 
import './ReNews.css';
import Sports from './pages/Sports';
import TeAoMaori from './pages/TeAoMaori';
import Edit from './pages/Edit';


const allArticles = [
  {
    section: 'Top Stories',
    title: 'Meet the Republicans regretting they ever supported Donald Trump',
    short_text: 'Donald Trump has been competing with himself for the title of the president with the lowest approval numbers...',
    url: '/trump.jpg'
  },
  {
    section: 'Latest',
    title: 'Thunderstorms for Auckland and Northland - wind warning in Wellington',
    short_text: 'Severe weather is expected to lash the North Island today...',
    url: '/rain.jpg'
  },
  {
    section: 'Games',
    title: 'Is The Last of Us Coming Back for Season 3?',
    short_text: 'The Last of Us season 2 is almost here, and season 3 has already been confirmed by HBO.',
    url: '/pedro.jpg'
  }
];

function HomePage({ results }) {
  return (
    <>
      <BreakingNewsBanner />

      <main className="main-content">
        <section className="featured-section">
          {results.map((item, index) => {
            const sectionPath = `/${item.section.toLowerCase().replace(/\s+/g, '-')}`;
            return (
              <div className="featured-card" key={index}>
                <h4 className="section-title">
                  <Link to={sectionPath} className="section-link">
                    {item.section}
                  </Link>
                </h4>
                <Link to={sectionPath}>
                  <NewsCard news={item} />
                </Link>
                <p className="short-text">{item.short_text}</p>
              </div>
            );
          })}
        </section>

        <Link to="/week-in-pictures" className="week-banner-link">
          <div className="week-banner">
            <div className="text-group">
              <span className="week-bold">THE WEEK</span>
              <span className="week-italic"> in pictures</span>
            </div>
            <span className="week-credit">By 1News</span>
          </div>
        </Link>
        <section className="re-news-section">
          <div className="re-news-grid">
            <div className="re-card">
              <img src="/moko-kauae.jpg" alt="Mokopuna with moko kauae" />
              <h3>Mokopuna with moko kauae – the next generation</h3>
              <p>Moko kauae is growing in visibility. But what does it mean for tamariki growing up with parents and whānau who wear moko?</p>
            </div>

            <div className="re-card">
              <img src="/rangatahi-gender-bill.jpg" alt="Rangatahi and gender inclusion" />
              <h3>Rangatahi want schools to be inclusive of gender-diverse students</h3>
              <p>Te Whatu Ora says teachers should be supported to foster inclusive environments for all students.</p>
            </div>

            <div className="re-card">
              <img src="/fatigue-illness.jpg" alt="Fatigue as a pandemic" />
              <h3>Could fatigue be the next pandemic?</h3>
              <p>Long Covid, burnout, and economic pressure are pushing more people into chronic exhaustion. Re: investigates.</p>
            </div>

            <div className="re-card">
              <img src="/gender-education.jpg" alt="Gender bias in education" />
              <h3>How gender affects our education</h3>
              <p>A breakdown of how gender bias can impact learning environments from early childhood through university.</p>
            </div>

            <div className="re-card">
              <img src="/benefit-eligibility.jpg" alt="Welfare benefits" />
              <h3>Why some people are ineligible for benefits</h3>
              <p>Thousands of New Zealanders fall through the cracks in our social welfare system. Here’s why.</p>
            </div>

            <div className="re-card">
              <img src="/reclaiming-name.jpg" alt="Reclaiming my name" />
              <h3>Reclaiming my name after colonisation</h3>
              <p>A personal journey of returning to a name that holds whakapapa, identity and power.</p>
            </div>

            <div className="re-card">
              <img src="/young-women-celibate.jpg" alt="Young women choosing celibacy" />
              <h3>Why some young women are choosing to be celibate</h3>
              <p>From trauma to empowerment and avoiding distractions — why more women are turning to celibacy in their 20s.</p>
            </div>

            <div className="re-card">
              <img src="/female-plumber.jpg" alt="Female plumber in trades" />
              <h3>‘Why would you want to do a man's job?’ Life as a female plumber</h3>
              <p>Women in trades like plumbing say they’re still facing daily sexism. Here’s how they’re navigating the job site.</p>
            </div>

            <div className="re-card">
              <img src="/cannabis-clinic.jpg" alt="Cannabis clinics" />
              <h3>Cannabis clinics: glorified dispensaries or filling patient need?</h3>
              <p>As the industry grows, cannabis clinics are becoming more common — but are they legitimate healthcare providers?</p>
            </div>

            <div className="re-card">
  <img src="/power-outage.jpg" alt="Power outage in Southland" />
  <h3>Power outage in Southland continues – nearly 400 homes remain without electricity</h3>
  <p>Hundreds of homes remain without power in Southland following a weather-related outage, with crews working to restore service.</p>
</div>

<div className="re-card">
  <img src="/missing-cruise-passenger.jpg" alt="Missing cruise passenger found safe" />
  <h3>Woman reported missing after failing to reboard Auckland cruise ship safe and well</h3>
  <p>A woman who failed to reboard a cruise ship in Auckland sparked concern but was later found safe and well, police say.</p>
</div>

<div className="re-card">
  <img src="/blue-pools-track.jpg" alt="Blue Pools Track reopens" />
  <h3>DOC reopens Blue Pools Track after two years of repairs</h3>
  <p>The popular Blue Pools Track has officially reopened after extensive repairs, welcoming trampers back to the scenic spot.</p>
</div>
          </div>
        </section>
      </main>
    </>
  );
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(allArticles);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleSearch = () => {
    const filtered = allArticles.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.short_text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filtered);
  };

  const resetSearch = () => {
    setSearchTerm('');
    setResults(allArticles);
  };

  return (
    <Router>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
        resetSearch={resetSearch}
        onAccountClick={() => setShowLogin(true)}
      />

      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onSwitch={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
        />
      )}

      {showRegister && (
        <RegisterModal
          onClose={() => setShowRegister(false)}
          onSwitch={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
        />
      )}

      <Routes>
        <Route path="/" element={<HomePage results={results} />} />
        <Route path="/week-in-pictures" element={<WeekInPictures />} />
        <Route path="/likes" element={<LikesPage />} />
        <Route path="/breaking-news" element={<BreakingNewsPage />} />
        <Route path="/top-stories" element={<TopStories />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/games" element={<Games />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/new-zealand" element={<NewZealand />} />
        <Route path="/world-news" element={<WorldNews />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/te-ao-maori" element={<TeAoMaori />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
