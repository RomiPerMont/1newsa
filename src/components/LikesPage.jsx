import NewsCard from './NewsCards';

function LikesPage({ likedArticles, onLikeToggle }) {
  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center' }}>❤️ Likes</h2>
      {likedArticles.length === 0 ? (
        <p style={{ textAlign: 'center' }}>You haven't liked any articles yet.</p>
      ) : (
        <div className="liked-articles-grid">
          {likedArticles.map((article, index) => (
            <NewsCard
              key={index}
              news={article}
              isLiked={true}
              onLikeToggle={onLikeToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default LikesPage;
