import { useState } from 'react';

function NewsCard({ news, onLikeToggle, isLiked }) {
  return (
    <div className="news-card">
      <img src={news.url} alt={news.title} className="news-image" />
      <div className="news-info">
        <h3>{news.title}</h3>
        <span
          onClick={() => onLikeToggle(news)}
          style={{ cursor: 'pointer', fontSize: '1.5rem' }}
        >
          {isLiked ? '❤️' : '🤍'}
        </span>
      </div>
    </div>
  );
}

export default NewsCard;
