import './App.css';
import Header from './components/Header';
import NewsCard from './components/NewsCards';
import BreakingNewsBanner from './components/BreakingNewsBanner';
import WeekInPictures from './components/WeekInPictures';
import LikesPage from './pages/LikesPage';
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
import Sports from './pages/Sports';
import TeAoMaori from './pages/TeAoMaori';
import Edit from './pages/Edit';

import './ReNews.css';

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

function HomePage({ results, likedArticles, onLikeToggle }) {
  const reNewsArticles = [
    {
      title: 'Mokopuna with moko kauae – the next generation',
      url: '/moko-kauae.jpg',
      short_text: 'Moko kauae is growing in visibility. But what does it mean for tamariki growing up with parents and whānau who wear moko?'
    },
    {
      title: 'Rangatahi want schools to be inclusive of gender-diverse students',
      url: '/rangatahi-gender-bill.jpg',
      short_text: 'Te Whatu Ora says teachers should be supported to foster inclusive environments for all students.'
    },
    {
      title: 'Could fatigue be the next pandemic?',
      url: '/fatigue-illness.jpg',
      short_text: 'Long Covid, burnout, and economic pressure are pushing more people into chronic exhaustion. Re: investigates.'
    },
    {
      title: 'How gender affects our education',
      url: '/gender-education.jpg',
      short_text: 'A breakdown of how gender bias can impact learning environments from early childhood through university.'
    },
    {
      title: 'Why some people are ineligible for benefits',
      url: '/benefit-eligibility.jpg',
      short_text: 'Thousands of New Zealanders fall through the cracks in our social welfare system. Here’s why.'
    },
    {
      title: 'Reclaiming my name after colonisation',
      url: '/reclaiming-name.jpg',
      short_text: 'A personal journey of returning to a name that holds whakapapa, identity and power.'
    },
    {
      title: 'Why some young women are choosing to be celibate',
      url: '/young-women-celibate.jpg',
      short_text: 'From trauma to empowerment and avoiding distractions — why more women are turning to celibacy in their 20s.'
    },
    {
      title: '‘Why would you want to do a man\'s job?’ Life as a female plumber',
      url: '/female-plumber.jpg',
      short_text: 'Women in trades like plumbing say they’re still facing daily sexism. Here’s how they’re navigating the job site.'
    },
    {
      title: 'Cannabis clinics: glorified dispensaries or filling patient need?',
      url: '/cannabis-clinic.jpg',
      short_text: 'As the industry grows, cannabis clinics are becoming more common — but are they legitimate healthcare providers?'
    },
    {
      title: 'Power outage in Southland continues – nearly 400 homes remain without electricity',
      url: '/power-outage.jpg',
      short_text: 'Hundreds of homes remain without power in Southland following a weather-related outage, with crews working to restore service.'
    },
    {
      title: 'Woman reported missing after failing to reboard Auckland cruise ship safe and well',
      url: '/missing-cruise-passenger.jpg',
      short_text: 'A woman who failed to reboard a cruise ship in Auckland sparked concern but was later found safe and well, police say.'
    },
    {
      title: 'DOC reopens Blue Pools Track after two years of repairs',
      url: '/blue-pools-track.jpg',
      short_text: 'The popular Blue Pools Track has officially reopened after extensive repairs, welcoming trampers back to the scenic spot.'
    },
    {
      title: 'Netflix’s biggest movie of 2025 watched 74,200,000 times in only two weeks',
      url: '/netflix-alltime.jpg',
      short_text: 'Netflix are used to producing original content that does rather well for them and strikes a chord with their audience.'
    },
    {
      title: 'Nimbus Covid variant doubles in a month',
      url: '/nimbus-covid.jpg',
      short_text: 'A highly contagious Covid variant is on the rise in the UK, with official data suggesting infections have doubled.'
    },
    {
      title: 'The worst movies of all time',
      url: '/worst-movies.jpg',
      short_text: 'A journey through the annals of celluloid catastrophe, featuring atrocious acting and terrible special effects.'
    }
  ];

  return (
    <>
      <BreakingNewsBanner />
      <main className="main-content">
        <section className="featured-section">
          {results.map((item, index) => {
            const sectionPath = `/${item.section.toLowerCase().replace(/\s+/g, '-')}`;
            const isLiked = likedArticles.some(article => article.title === item.title);
            return (
              <div className="featured-card" key={index}>
                <h4 className="section-title">
                  <Link to={sectionPath} className="section-link">
                    {item.section}
                  </Link>
                </h4>
                <NewsCard news={item} isLiked={isLiked} onLikeToggle={onLikeToggle} />
                <p className="short-text">
                  <Link to={sectionPath} className="section-link">
                    {item.short_text}
                  </Link>
                </p>
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
            {reNewsArticles.map((article, index) => {
              const isLiked = likedArticles.some((a) => a.title === article.title);
              return (
                <div className="re-card" key={index}>
                  <img src={article.url} alt={article.title} />
                  <h3>{article.title}</h3>
                  <p>{article.short_text}</p>
                  <span
                    onClick={() => onLikeToggle(article)}
                    style={{
                      cursor: 'pointer',
                      fontSize: '1.5rem',
                      display: 'block',
                      marginTop: '0.5rem',
                    }}
                  >
                    {isLiked ? '❤️' : '🤍'}
                  </span>
                </div>
              );
            })}
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
  const [likedArticles, setLikedArticles] = useState([]);

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

  const handleLikeToggle = (article) => {
    setLikedArticles((prev) => {
      const alreadyLiked = prev.some((a) => a.title === article.title);
      return alreadyLiked
        ? prev.filter((a) => a.title !== article.title)
        : [...prev, article];
    });
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
        <Route path="/" element={
          <HomePage
            results={results}
            likedArticles={likedArticles}
            onLikeToggle={handleLikeToggle}
          />
        } />
        <Route path="/likes" element={<LikesPage likedArticles={likedArticles} onLikeToggle={handleLikeToggle} />} />
        <Route path="/week-in-pictures" element={<WeekInPictures />} />
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
