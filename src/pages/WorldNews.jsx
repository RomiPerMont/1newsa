import React from 'react';
import './WorldNews.css';

function WorldNews() {
  const articles = [
    {
      title: "Mokopuna with moko kauae – the next generation",
      text: "Moko kauae is growing in visibility. But what does it mean for tamariki growing up with parents and whānau who wear moko?",
      image: "/moko-kauae.jpg"
    },
    {
      title: "Rangatahi want schools to be inclusive of gender-diverse students",
      text: "Te Whatu Ora says teachers should be supported to foster inclusive environments for all students.",
      image: "/rangatahi-gender-bill.jpg"
    },
    {
      title: "Could fatigue be the next pandemic?",
      text: "Long Covid, burnout, and economic pressure are pushing more people into chronic exhaustion. Re: investigates.",
      image: "/fatigue-illness.jpg"
    },
    {
      title: "How gender affects our education",
      text: "A breakdown of how gender bias can impact learning environments from early childhood through university.",
      image: "/gender-education.jpg"
    },
    {
      title: "Why some people are ineligible for benefits",
      text: "Thousands of New Zealanders fall through the cracks in our social welfare system. Here's why.",
      image: "/benefit-eligibility.jpg"
    },
    {
      title: "Reclaiming my name after colonisation",
      text: "A personal journey of returning to a name that holds whakapapa, identity and power.",
      image: "/reclaiming-name.jpg"
    },
    {
      title: "Conservative Karol Nawrocki wins Poland's presidential election",
      text: "Nawrocki secured 50.89% of the votes, narrowly defeating liberal Warsaw Mayor Rafał Trzaskowski.",
      image: "/karol-nawrocki.jpg"
    },
    {
      title: "Mushroom cook to enter witness box at murder trial",
      text: "Erin Patterson pleads not guilty to three murders after serving a toxic beef Wellington.",
      image: "/erin-patterson.jpg"
    },
    {
      title: "Three killed in Germany hospital fire, patient detained",
      text: "A fire at a Hamburg hospital leaves three dead and 34 injured; a patient is in custody.",
      image: "/germany-hospital-fire.jpg"
    },
    {
      title: "Tourist damages China's Terracotta Army display",
      text: "An incident at the Terracotta Army exhibit results in damage to two ancient figures.",
      image: "/terracotta-army.jpg"
    },
    {
      title: "House party shooting in North Carolina leaves 1 dead, 11 injured",
      text: "A mass shooting at a house party in Hickory, NC, results in one death and multiple injuries.",
      image: "/north-carolina-shooting.jpg"
    },
    {
      title: "Two bridges collapse in western Russia, seven dead",
      text: "Explosions cause the collapse of two bridges in Russia's Kursk region, killing seven.",
      image: "/russia-bridge-collapse.jpg"
    }
  ];

  return (
    <div className="world-news-page">
      <h1 className="world-news-title">World News</h1>
      <div className="world-news-grid">
        {articles.map((article, index) => (
          <div className="world-news-card" key={index}>
            <img
              src={article.image}
              alt={article.title}
              className="world-news-image"
            />
            <div className="world-news-content">
              <h2 className="world-news-heading">{article.title}</h2>
              <p className="world-news-text">{article.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorldNews;
