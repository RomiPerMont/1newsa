function NewsCard({ news }) {
    return (
      <div className="news-card">
        <img src={news.url} alt={news.title} className="news-image" />
        <div className="news-info">
          <h3>{news.title}</h3>
        </div>
      </div>
    );
  }
  
  export default NewsCard;