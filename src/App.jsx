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
          {results.map((item, index) => (
            <div className="featured-card" key={index}>
              <h4 className="section-title">
                <Link to={`/${item.section.toLowerCase().replace(/\s+/g, '-')}`} className="section-link">
                  {item.section}
                </Link>
              </h4>
              <NewsCard news={item} />
              <p className="short-text">{item.short_text}</p>
            </div>
          ))}
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
      </Routes>
    </Router>
  );
}

export default App;
