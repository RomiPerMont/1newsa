// src/pages/Sports.jsx
import React from 'react';
import '../ReNews.css';

const sportsArticles = [
  {
    title: "Scott McLaughlin secures pole at Detroit Grand Prix",
    text: "Scott McLaughlin has locked in the best possible starting position for the season opener on the streets of St. Petersburg. The Team Penske driver—who crashed on Friday—set the fastest time in the final minute of the Firestone Fast 6, finishing nearly two-tenths of a second ahead of Colton Herta, who secured second place. Rinus VeeKay pulled off a surprise by qualifying for the Fast 12 session and will start the race from twelfth position. After Marcus Ericsson set the fastest time in the morning practice session, the field was split into two groups based on that session. Notably, the first qualifying group was particularly strong, featuring all three Penske and McLaren cars, both AJ Foyt Racing entries, and Colton Herta..",
    image: "/scott-mclaughlin.jpg"
  },
  {
    title: "All Blacks name squad for 2025 Rugby Championship",
    text: "Uncapped Hurricanes and Wellington back Ruben Love and 95 Test loose forward Sam Cane highlight the youth and experience that features in the All Blacks 36-strong Lipovitan-D Rugby Championship squad named for six Tests against Argentina, South Africa and Australia. Love and Cane join outside back Will Jordan and versatile midfielder David Havili as the four players named for the Rugby Championship, who did not feature during the first three Tests of the season. Halfback Noah Hotham and lock Sam Darry retain their places in the squad after being called into the Steinlager Ultra Low Carb Series squad as replacement players then impressing during their respective Test debuts against Fiji in San Diego.",
    image: "/all-blacks-2025.jpg"
  },
  {
    title: "Black Caps prepare for England tour",
    text: ".The Black Caps are set to depart next week for a three-Test series against England, with Kane Williamson returning to the squad after injury. The first Test of the series against England is set to begin on Thursday, November 28, at Christchurch's Hagley Oval. The subsequent matches will be held at Wellington’s Basin Reserve and Hamilton’s Seddon Park on December 6 and December 14, respectively. The Black Caps are entering this series after performing strongly in their last outing against India, winning a remarkable 3-0 series sweep, which has built confidence in the team going into this challenging series.The selection for the series also includes debutants Nathan Smith and Jacob Duffy, adding fresh talent to the squad",
    image: "/black-caps.jpg"
  },
  {
    title: "NZ Warriors climb into NRL top four",
    text: "With a dominant victory over the Newcastle Knights, the NZ Warriors have jumped into the top three of the NRL standings, marking their fifth win in the last six matches. In their latest match, the Warriors secured a 26-12 win against the Newcastle Knights at Apollo Projects Stadium in Christchurch. Key contributions came from Jackson Ford and Adam Pompey, who each scored two tries, helping the team consolidate their position among the league's elite. This win pushes the Warriors to an impressive record, standing at 10 wins this season, positioning them just behind fellow contenders in the race for the minor premiership. Luke Metcalf has been a pivotal player, orchestrating the attack effectively, which has contributed significantly to their current top-four standing.",
    image: "/nz-warriors.jpg"
  },
  {
    title: "Kiwi UFC fighter wins by knockout in Las Vegas",
    text: "Kiwi UFC fighter Justin Tafa scored a first-round knockout against Harry Hunsucker in Las Vegas, showcasing a stunning head kick. On the final UFC card of the year, Justin Tafa landed a decisive head kick that finished Harry Hunsucker early in their fight, marking an impressive performance. Despite facing several challenges leading up to the fight, including issues with making weight, Tafa entered the octagon determined and focused. The fight began with Hunsucker attempting to take Tafa to the ground, leveraging his grappling background. However, Tafa successfully defended against his takedown attempt and took control on the feet, wobbling Hunsucker multiple times before landing the knockout blow..",
    image: "/ufc-kiwi.jpg"
  },
  {
    title: "Breakers confirm new signing ahead of 2025 season",
    text: "The NZ Breakers have confirmed the signing of shooting guard Mojave King, enhancing their roster ahead of the 2025 season. Drafted 47th overall by the Los Angeles Lakers in the 2023 NBA Draft, King was traded to the Indiana Pacers and spent the past season with the Indiana Mad Ants in the G-League. The 21-year-old has shown promise but struggled with consistency during his time in the States. Breakers head coach Mody Maor expressed optimism about King’s potential, highlighting that his skills and attributes, including size, shooting, and athleticism, are expected to develop further in the right environment.",
    image: "/nzbreakers.jpg"
  },
  {
    title: "Silver Ferns aim for gold at Netball World Cup",
    text: "The Silver Ferns will play for gold against old rivals Australia after holding their nerve to beat England 47-45 in the Vitality Netball World Cup semi-finals on Sunday morning (NZ time). Holding the upper hand through the first and third quarters, the Silver Ferns absorbed the rollercoaster ride and a last-ditch fightback from England, retaining their composure to keep the dogged home side at bay. Built on a staunch defensive effort, the injection of Shannon Saunders during the third quarter, an impressive outing from Katrina Rore, at wing defence, and the shooting of Ameliaranne Ekenasio, who built into the game before delivering a nerveless 25 goals from 26 attempt.",
    image: "/silverfern.jpg"
  },
  {
    title: "Team NZ launches new America’s Cup yacht",
    text: "Emirates Team New Zealand has launched its new America’s Cup yacht, named 'Taihoro,' showcasing cutting-edge technology and innovative design as they prepare to defend the 37th America’s Cup. The design and construction of 'Taihoro' involved over 45 boat builders dedicating more than 85,000 hours to its creation. The team pushed the envelope, incorporating advanced aerodynamics and new technologies that enhance performance and speed. This yacht represents a continuation of Emirates Team New Zealand's commitment to innovation in the realm of competitive sailing, leveraging insights from their extensive experience in previous America's Cup challenges.",
    image: "/teamnzamericascup.jpg"
  },
  {
    title: "Kiwi sprinter sets new Oceania record",
    text: "Kiwi sprinter Zoe Hobbs has powered into the 100m semi-finals at the world championships, breaking her own Oceania record in the process. Hobbs crossed the line in 11.08sec in her heat at the event in Eugene, Oregon. The mark bettered the 11.09sec mark she set at the Oceania championships in Australia last month and saw her take second place in her heat to automatically progress in the event. Hobbs has been in fantastic form all season as she builds towards the Commonwealth Games - lowering the New Zealand's women's 100m mark five times since December.",
    image: "/kiwi-sprinter.jpg"
  },
  {
    title: "NZ cyclist wins Tour of Southland",
    text: "Winning a second Tour of Southland in the space of three years is something that will take some time to sink in for Josh Burnett. The 24-year-old produced a strong final day in the 68th edition of the Southland tour, to add his name to an elite list of riders who have won the fabled event multiple times. Burnett was third in the morning's individual time trial in Winton, before his teammates delivered him safely to Invercargill's Queens Park over the final 77km stage, in gale winds, to collect the title. The win sees him join the likes of Warwick Dalton, Tino Tabak, Stephen Cox, Jack Swart, Brian Fowler, Gordon McCauley, Hayden Roulston and Aaron Gate.",
    image: "/nzcyclist.png"
  },
  {
    title: "Young Kiwi gymnast selected for Olympic squad",
    text: "Georgia-Rose Brown, a 29-year-old gymnast, has been selected to represent New Zealand at the Paris 2024 Olympics, marking a significant milestone in her long-standing Olympic journey. She has a remarkable history in gymnastics, having initially represented Australia before switching her allegiance to New Zealand, influenced by her Kiwi heritage through her mother. Known for her skills in the uneven bars, she successfully earned her spot for the Paris Olympics by topping the rankings at the 2024 apparatus World Cup series. Despite facing several challenges throughout her career.",
    image: "/kiwigymnast.jpg"
  },
  {
    title: "Black Sticks eye redemption in Hockey World League",
    text: "The Vantage Black Sticks women's hockey team is currently focused on a crucial two-match series against the USA, which serves as a significant step in their pursuit of redemption ahead of the Hockey World League. Coach Phil Burrows expressed optimism about the team's momentum and preparations for upcoming tournaments. The Black Sticks are set to face the USA in a vital preparatory series starting this Sunday in Auckland. This series is pivotal as they build towards key competitions, including the Nations Cup and the eventual qualification for the World Cup against Australia in August 2025.",
    image: "/blacksticks.jpg"
  },
  {
    title: "Crusaders hold off Blues to extend streak in semi-final thriller",
    text: "They have done it again. The Crusaders have extended their Super Rugby home playoffs record to 31-0 with a thrilling 21-14 victory over the Blues after defending their line for the final five minutes-plus. It means the red and blacks have qualified for a home final next weekend against either the Chiefs or the Brumbies, who will play in Hamilton tomorrow, after scoring 21 unanswered points against a Blues side which got to within a hair’s breadth from forcing the match into extra-time tonight.",
    image: "/Crusaders.jpg"
  },
  {
    title: "Stamenic hits target as All Whites fall to Ukraine",
    text: "Ukraine, ranked 25th in the world, have beaten the 86th-ranked All Whites 2-1 in a Canadian Shield match in Toronto today. In what was a highly competitive match tied 0-0 at the break, Arsenal midfielder Oleksandr Zinchenko scored the decisive goal in the 75th minute. Soon after coming on as a replacement, Zinchenko lashed a first-time left-foot shot past New Zealand goalkeeper Max Crocombe for what turned out to be a deserved winner. Earlier, Marko Stamenic had scored an equaliser in the 59th minute for the All Whites from a near perfect set piece.",
    image: "/StamenicFootball.jpg"
  },
  {
    title: "Black Caps batsman breaks world record for most sixes in a T20",
    text: "Black Caps opener Finn Allen has broken the world record for most sixes in the T20 innings, smashing 19 to move past the mark held by West Indies blaster Chris Gayle. Allen broke several records in his innings of 151 for his San Francisco Unicorns franchise against Washington Freedom in the opening match of the US Major League Cricket championship in Oakland, California. San Francisco won the match by 153 runs, built almost entirely around the remarkable 151 off 51 balls — at a strike rate of 296 — from right-handed power-hitter Allen. .",
    image: "/BlackCapsT20.jpg"
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
