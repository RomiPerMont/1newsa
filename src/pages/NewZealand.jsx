import React from 'react';
import './NewZealand.css'; 

function NewZealand() {
  return (
    <div className="new-zealand-container" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>New Zealand News</h1>

      <div style={{ marginBottom: '2rem' }}>
        <img
          src="/aurora.jpg"
          alt="Aurora over New Zealand"
          style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }}
        />
        <h2>Stunning aurora may dazzle southern skies again tonight</h2>
        <p style={{ fontStyle: 'italic' }}>By 1News Reporters – Mon, 2 June</p>
        <p>
          An aurora that lit up the South Island and reached as far north as Auckland last night could make another appearance on Monday night, though it's not expected to be visible as far north this time. South Islanders witnessed the light show earlier on Sunday night, while some North Islanders were also said to be experiencing the spectacle.
        </p>
        <p>
          Yesterday, the National Oceanic and Atmospheric Administration (NOAA) Space Weather Prediction Centre predicted the phenomenon was expected to be seen overnight and continuing into Monday. The sun is currently at the peak of its 11-year activity cycle when there are more solar storms, aurorae, and sunspots.
        </p>
      </div>

      {/* Add more articles similarly */}
    </div>
  );
}

export default NewZealand;
