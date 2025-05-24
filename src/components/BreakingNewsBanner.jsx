import { Link } from 'react-router-dom';

function BreakingNewsBanner() {
  const breakingNews = "BREAKING NEWS: Severe weather warning in place for Northland and Auckland.";

  return (
    <div className="breaking-banner">
      <Link to="/breaking-news" className="breaking-link">
        <p>{breakingNews}</p>
      </Link>
    </div>
  );
}

export default BreakingNewsBanner;
