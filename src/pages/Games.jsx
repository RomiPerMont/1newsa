import React from 'react';
import './Games.css'; // Ensure this file exists for styling

function Games() {
  return (
    <div className="games-container">
      <img
        src="/pedro.jpg"
        alt="Pedro Pascal as Joel in The Last of Us"
        className="games-image"
      />
      <h1 className="games-title">
        Is The Last of Us Coming Back for Season 3?
      </h1>
      <p className="games-byline">
        By 1News Reporters – Mon, 2 June
      </p>
      <div className="games-content">
        <p>
          HBO has officially confirmed that <em>The Last of Us</em> will return for a third season. The renewal was announced on April 10, 2025, just before the premiere of season two. Showrunner Craig Mazin expressed enthusiasm about continuing the story, highlighting the exceptional work of the cast and crew.
        </p>
        <p>
          While a release date for season three has not been announced, it's anticipated that production may begin in 2026, considering the delays experienced during the second season due to industry strikes.
        </p>
        <p>
          The series, based on the acclaimed video game franchise developed by Naughty Dog, follows Joel and Ellie as they navigate a post-apocalyptic United States ravaged by a fungal infection. The show's narrative has closely followed the games, with season two adapting <em>The Last of Us Part II</em>.
        </p>
        <p>
          Fans speculate that season three may delve deeper into the character of Abby, a central figure in the second game, potentially exploring her backstory and perspective. This shift could provide a fresh narrative angle and deepen the series' exploration of its complex characters.
        </p>
        <p>
          As anticipation builds, viewers are encouraged to stay tuned for updates on the upcoming season's development and release schedule.
        </p>
      </div>
    </div>
  );
}

export default Games;
