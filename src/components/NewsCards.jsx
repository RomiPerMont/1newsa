function NewsCard({ news }) {
    return (
      <div className="news-card">
        <img src={news.url} alt={news.title} className="news-image" />
        <div className="news-info">
          <h3>{news.title}</h3>
          <p className="category-label">{news.short_text}</p>
        </div>
      </div>
    );
  }
  
  export default NewsCard;
  