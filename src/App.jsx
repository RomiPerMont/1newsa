import './App.css';
import Header from './components/Header';
import NewsCard from './components/NewsCards';

function App() {
  const featured = [
    {
      section: 'Top Stories',
      title: 'Trump interview highlights key issues',
      short_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod.',
      url: 'https://via.placeholder.com/400x300'
    },
    {
      section: 'Latest',
      title: 'NZ Olympian reflects on Tokyo Games',
      short_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod.',
      url: 'https://via.placeholder.com/400x300'
    },
    {
      section: 'Games',
      title: 'The Last of Us 3 Rumors Surface',
      short_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod.',
      url: 'https://via.placeholder.com/400x300'
    }
  ];

  return (
    <>
      <Header />
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
      </main>
    </>
  );
}

export default App;
