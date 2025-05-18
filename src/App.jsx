import './App.css';
import Header from './components/Header';
import NewsCard from './components/NewsCards';
import BreakingNewsBanner from './components/BreakingNewsBanner';
import ColorBar from './components/ColorBar';
import WeekInPictures from './components/WeekInPictures';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function HomePage() {
  const featured = [
    {
      section: 'Top Stories',
      title: 'Meet the Republicans regretting they ever supported Donald Trump',
      short_text: 'Donald Trump has been competing with himself for the title of the president with the lowest approval numbers, in the wake of tariff chaos, and the apparent 180 degree turn on America’s support of Ukraine to defend itself against Russia’s invasion. Logan Church meets Republicans regretting their vote.',
      url: 'https://tvnz-1-news-prod.cdn.arcpublishing.com/resizer/v2/trump-maga-background-76WS6C7URJA33CXKKTQ3FR3GK4.jpg?auth=3497d9beee69cfe3fb4fe24993f56f31bdd3f8791f3db9f29dee2cdd0e4fd0bd&quality=70&width=767&height=431&focal=960%2C540'
    },
    {
      section: 'Latest',
      title: 'Thunderstorms for Auckland and Northland - wind warning in Wellington',
      short_text: 'Severe weather is expected to lash the North Island today, with possible thunderstorms, gales of up to 120km/h in parts and heavy rain forecast to affect several regions.',
      url: 'https://tvnz-1-news-prod.cdn.arcpublishing.com/resizer/v2/rainy-weather-file-image-stock-file-generic-storm-stormy-rai-MNR7XWMAD5BUNOU42KGYTFXAHM.jpg?auth=9b9bdda77a739c14390d3483dd72e8a398368e4d98f0d58a8bf901b4122a5a47&quality=70&width=767&height=431&focal=959%2C614'
    },
    {
      section: 'Games',
      title: 'Is The Last of Us Coming Back for Season 3?',
      short_text: 'This weekend, The Last of Us will finally make its massive season 2 debut. The second season is so monumental, in fact, that HBO already renewed its post-apocalyptic drama for season 3. I hope Pedro Pascal and Bella Ramsey have both recovered from the shocking season 1 finale, because it seems they have a few more years of high-stakes clicker-killing out in Jackson, Wyoming.',
      url: 'https://hips.hearstapps.com/hmg-prod/images/bella-ramsey-isabela-merced-67f6d05419a7a.jpg?crop=0.774xw:0.653xh;0.0629xw,0.0714xh&resize=980:*'
    }
  ];

  return (
    <>
      <ColorBar />
      <BreakingNewsBanner />
      <ColorBar />

      <main className="main-content">
        <section className="featured-section">
          {featured.map((item, index) => (
            <div className="featured-card" key={index}>
              <h4 className="section-title">{item.section}</h4>
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
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/week-in-pictures" element={<WeekInPictures />} />
      </Routes>
    </Router>
  );
}

export default App;
