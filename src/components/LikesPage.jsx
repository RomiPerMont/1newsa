import './LikesPage.css';

function LikesPage({ likedArticles, onLikeToggle }) {
  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center' }}>❤️ Likes</h2>

      {likedArticles.length === 0 ? (
        <p style={{ textAlign: 'center' }}>
          You haven't liked any articles yet.
        </p>
      ) : (
        <div className="likes-grid">
          {likedArticles.map((article, index) => (
            <div className="likes-card" key={index}>
              <img src={article.url} alt={article.title} />
              <div className="likes-overlay">
                <p className="likes-title">{article.title}</p>
                <span
                  className="likes-heart"
                  onClick={() => onLikeToggle(article)}
                >
                  ❤️
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LikesPage;
