import React from 'react';
import './News.css';

const articles = [
  {
    title: "Why I'm reclaiming an indigenous name",
    summary: "Re: News spoke to two people about what it means to reclaim a name - and the healing that can come with it.",
    image: '/images/reclaiming-name.jpg',
    date: 'Wed, May 28',
  },
  {
    title: "No benefit if your parents can pay: Eligibility limits for 18- and 19-year-olds",
    summary: "The Government has announced plans to means test 18- and 19-year-old beneficiaries, introducing a new parental assistance test from July 2027.",
    image: '/images/benefit-eligibility.jpg',
    date: 'Thu, May 22',
  },
  {
    title: "Learning about gender: Is it appropriate for school students?",
    summary: "Re: News asked recent school leavers and a high school teacher what they think about the proposed changes to sex education.",
    image: '/images/gender-education.jpg',
    date: 'Thu, May 15',
  },
  {
    title: "Mysterious fatigue illness traps people in their bodies",
    summary: "Zoe Madden-Smith looks into the controversy around ME/Chronic fatigue syndrome for Re: Investigates.",
    image: '/images/fatigue-illness.jpg',
    date: 'Mon, May 12',
  },
  {
    title: "In Photos: How rangatahi are feeling in the wake of the gender bill",
    summary: "“I’m concerned about trans people being politicised in a way that’s really harmful to our communities.”",
    image: '/images/rangatahi-gender-bill.jpg',
    date: 'Sat, May 10',
  },
  {
    title: "Receiving my moko kauae at 24 - from disconnection to connection",
    summary: "Re: News followed Siobhan Moana Mary-Jean Grant’s journey to receiving her moko kauae.",
    image: '/images/moko-kauae.jpg',
    date: 'Wed, May 7',
  },
];

function News() {
  return (
    <div className="news-container">
      <h1>News</h1>
      <div className="news-grid">
        {articles.map((article, index) => (
          <div className="news-card" key={index}>
            <img src={article.image} alt={article.title} />
            <h2>{article.title}</h2>
            <p>{article.summary}</p>
            <span className="news-date">{article.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
