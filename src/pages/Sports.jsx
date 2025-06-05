// src/pages/Sports.jsx
import React from 'react';
import '../ReNews.css';

const sportsArticles = [
  {
    title: "Scott McLaughlin secures pole at Detroit Grand Prix",
    text: "New Zealand’s Scott McLaughlin has taken pole position for the IndyCar race in Detroit.",
    image: "/scott-mclaughlin.jpg"
  },
  {
    title: "All Blacks name squad for 2025 Rugby Championship",
    text: "A fresh squad has been named for the upcoming tournament, with some surprise selections.",
    image: "/all-blacks-2025.jpg"
  },
  {
    title: "Black Caps prepare for England tour",
    text: "The team is set to depart next week for their test series against England.",
    image: "/black-caps.jpg"
  },
  {
    title: "NZ Warriors climb into NRL top four",
    text: "With another dominant win, the Warriors are now ranked among the top four teams.",
    image: "/nz-warriors.jpg"
  },
  {
    title: "Kiwi UFC fighter wins by knockout in Las Vegas",
    text: "A huge night for the Kiwi fighter as they secure a knockout victory on the global stage.",
    image: "/ufc-kiwi.jpg"
  },
  {
    title: "Breakers confirm new signing ahead of 2025 season",
    text: "The NZ Breakers have bolstered their roster with a high-profile signing.",
    image: "/breakers-signing.jpg"
  },
  {
    title: "Silver Ferns aim for gold at Netball World Cup",
    text: "The Silver Ferns are optimistic ahead of their group-stage matches.",
    image: "/silver-ferns.jpg"
  },
  {
    title: "Team NZ launches new America’s Cup yacht",
    text: "Cutting-edge technology and bold design mark the launch of their new vessel.",
    image: "/team-nz-yacht.jpg"
  },
  {
    title: "Kiwi sprinter sets new Oceania record",
    text: "A remarkable performance at the athletics meet sets a new regional record.",
    image: "/kiwi-sprinter.jpg"
  },
  {
    title: "NZ cyclist wins Tour of Southland",
    text: "An impressive display of endurance secures the victory in the final stage.",
    image: "/tour-southland.jpg"
  },
  {
    title: "Young Kiwi gymnast selected for Olympic squad",
    text: "The 17-year-old will represent New Zealand at the Paris Olympics.",
    image: "/kiwi-gymnast.jpg"
  },
  {
    title: "Black Sticks eye redemption in Hockey World League",
    text: "Coach optimistic as the squad builds momentum ahead of the tournament.",
    image: "/black-sticks.jpg"
  },
];

const Sports = () => {
  return (
    <main className="re-news-section">
      <h2 style={{ padding: "1rem 0" }}>Sports</h2>
      <div className="re-news-grid">
        {sportsArticles.map((article, index) => (
          <div className="re-card" key={index}>
            <img src={article.image} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{article.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Sports;
