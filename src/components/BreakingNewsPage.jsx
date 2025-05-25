import BreakingNewsBanner from './BreakingNewsBanner';
import './BreakingNewsPage.css'; // make sure this path is correct

function BreakingNewsPage() {
  return (
    <>
      <BreakingNewsBanner />
      <div className="breaking-news-container">
        <div className="breaking-news-content">
          <img
            src="/rain.jpg"
            alt="Severe Weather"
            className="breaking-image"
          />
          <h2>Severe Weather Warning in Northland and Auckland</h2>
          <p>
            Heavy rain and strong winds are expected to hit the northern regions. Residents are advised to stay indoors
            and secure outdoor objects. Emergency services are on high alert.
          </p>
        </div>
      </div>
    </>
  );
}

export default BreakingNewsPage;

