import React from 'react';
import './WorldNews.css';

function WorldNews() {
  const articles = [
    {
      title: "Death toll rises to at least 78 in South Africa floods",
      text: "The death toll in floods in one of South Africa’s poorest provinces rose to at least 78 today as a top official said rescue attempts in the first hours after the disaster had been paralysed by a lack of resources. Rescue teams spent a third day working through debris and floodwater to find missing people and retrieve bodies after heavy rain caused a river to burst its banks in the predawn hours of Wednesday. The worst floods hit the town of Mthatha and surrounding areas, sweeping away victims along with parts of their houses and cars. Oscar Mabuyane, the premier of Eastern Cape province, said the floods struck while many people were asleep. The water was 3-4 metres high in places when it flowed out of a river and into nearby communities, local authorities struggled to launch an effective rescue effort as the disaster happened in what he described as a region lacking resources.",
      image: "/SouthAfrica.jpg"
    },
    {
      title: "'Legendary': Australian Lotto winner yet to claim $100 million jackpot",
      text: "An Australian jackpot-winning lottery player could be blissfully unaware their bank balance is about to receive an AUS$100 million (NZ$107 million) bump. The mystery player held the only division-one winning entry in Thursday's Powerball jackpot draw. Lottery officials are waiting for the winner to come forward, as they have no way of contacting them because their ticket was not registered. The winning entry was bought from Bondi Junction Newsagency and Internet Cafe, in Sydney's eastern suburbs. An estimated 10 million Australians took a punt on winning the AUS$100 million top prize. While winners in NSW have six years to claim their prizes, The Lotto spokeswoman Eliza Wregg urged players to check their tickets.",
      image: "/AustralianLotto.jpg"
    },
    {
      title: "Israel says it has targeted Iran's Defense Ministry headquarters",
      text: "Israel launched an expanded assault on Iran, with direct strikes targeting its energy industry and defence ministry headquarters, while Tehran unleashed a fresh barrage of missiles blamed for the deaths of four people. The simultaneous strikes represented the latest salvo since a surprise attack by Israel two days earlier aimed at decimating Tehran’s rapidly advancing nuclear program. New explosions boomed across Tehran as Iranian missiles entered Israel’s skies in an attack that Israeli emergency officials said killed four people in a Galilee apartment building. Casualty figures were not immediately available in Iran, where Israel targeted its Defence Ministry headquarters in Tehran as well as sites that it alleged were associated with the country's nuclear program.",
      image: "/IsraelTarget.jpg"
    },
    {
      title: "David Beckham, Gary Oldman and Roger Daltrey knighted in King’s Birthday Honours",
      text: "Former England football captain David Beckham, Oscar-winning actor Gary Oldman and The Who front man Roger Daltrey are among the prominent figures awarded knighthoods in this year’s King’s Birthday Honours list. Beckham, 50, was recognized for his services to sport and charity. Beckham has represented England 115 times and clinched league titles across four countries. Co-founder and lead singer of legendary British rock band The Who, Daltrey, 81, was honoured for his services to charity. Alongside his storied musical career, Daltrey has served as a patron of the Teenage Cancer Trust since 2000. Oldman, 67, who played Harry Potter’s godfather Sirius Black in several of the movies in the franchise, was awarded a knighthood for services to drama. In 2018, the Hollywood star won an Oscar for his portrayal of Winston Churchill in the film Darkest Hour.",
      image: "/KingBirthdayHonours.jpg"
    },
    {
      title: "Activists stopped in Libya and Egypt ahead of planned march on Gaza",
      text: "The Global March on Gaza was slated to be among the largest demonstrations of its kind in recent years, coinciding with other efforts including a boat carrying activists and aid that was intercepted by Israel's military while on its way to Gaza earlier this week.Organisers said authorities confiscated the passports of 40 activists at what they called a toll both-turned-checkpoint being patrolled by riot gear-clad officers and armoured vehicles. They said security forces had begun detaining and using force to remove activists from the area and suppress protests. The group’s spokespeople urged officials from the activists’ home countries to push Egypt to release their citizens. Egypt’s Foreign Ministry did not immediately respond to requests for comment.",
      image: "/PalestinianFlag.jpg"
    },
    {
      title: "King Charles marks India plane tragedy at Trooping the Colour",
      text: "King Charles III and other members of the royal family in uniform wore black armbands and observed a moment of silence during his annual birthday parade Saturday as the monarch commemorated those who died in this week’s Air India plane crash. He requested the symbolic moves as a mark of respect for the lives lost, the families in mourning and all the communities affected by this awful tragedy, Buckingham Palace said. An Air India flight from the northwestern city of Ahmedabad to London crashed shortly after takeoff on Thursday, killing 241 people on board and at least 29 on the ground.The plane was carrying 169 Indians, 53 Britons, seven Portuguese and one Canadian, one man survived. In addition to being Britain’s head of state, Charles is the head of the Commonwealth, an organisation of independent states that includes India and Canada.",
      image: "/PrinceCharles.jpg"
    },
    {
      title: "Conservative Karol Nawrocki wins Poland's presidential election",
      text: "Poland's electoral commission has declared victory for conservative candidate Karol Nawrocki in the second round of the country's tightly contested presidential election.Securing 50.89% of the vote, Nawrocki defeated the liberal, pro-European Union candidate Rafal Trzaskowski by just over a percentage point. Nawrocki campaigned on a promise to defend traditional Polish values. His opponent Trzaskowski, who is the mayor of Warsaw, had vowed to push ahead with Prime Minister Donald Tusk's plans to reinstate judicial independence and liberalize abortion laws. But with major veto powers, Nawrocki is expected to block Tusk's government in pursuit of a more nationalist agenda, much like his predecessor and outgoing President Andrzej Duda..",
      image: "/karol-nawrocki.jpg"
    },
    {
      title: "Mushroom cook to enter witness box at murder trial",
      text: "Accused triple murderer Erin Patterson has spoken about battling low self-esteem, changes to her spirituality and becoming distant from her estranged husband's family. The 50-year-old was called as a defence witness on Monday afternoon in the sixth week of her Supreme Court triple-murder trial in regional Victoria. Her former in-laws, Don and Gail Patterson, 70, and Gail's sister Heather Wilkinson, 66, died in hospital from death cap mushroom poisoning days after a lunch served at her Leongatha home on July 29, 2023. She is also charged with the attempted murder of Heather's husband Ian Wilkinson, who became sick but survived the meal. Patterson has pleaded not guilty to all charges.",
      image: "/erin-patterson.jpg"
    },
    {
      title: "Three killed in Germany hospital fire, patient detained",
      text: "Three patients were killed, and many people were injured in a fire that broke out overnight at a hospital in the German city of Hamburg, authorities said today. Another patient was detained on suspicion of starting the blaze. Firefighters were alerted to the fire at the hospital, the Marienkrankenhaus, shortly after midnight. It broke out in a room in the geriatric ward, on the ground floor of the building, and spread to the facade of the floor above. Smoke spread across the building's four floors, German news agency dpa reported.The three people who died were men aged 84, 85 and 87, police said in a statement. Another 34 people were injured, one of whom was in a life-threatening condition.",
      image: "/germany-hospital-fire.jpg"
    },
    {
      title: "Tourist damages China's Terracotta Army display",
      text: "A domestic tourist climbed over a fence and jumped into a section of the world-famous display of China’s Terracotta Army, damaging two ancient clay warriors, authorities said Saturday. The 30-year-old was visiting the museum housing the Terracotta Army in the city of Xi’an on Friday when he climbed over the guardrail and the protective net and jumped, public security officials said in a statement. The man surnamed Sun was found to suffer from mental illness and the case is under investigation. He pushed and pulled the clay warriors and two were damaged to varying degrees, the statement said. He was controlled by security personnel. The pit he jumped into is up to 5.4 metres (18 feet) deep, according to the museum’s website.",
      image: "/terracotta-army.jpg"
    },
    {
      title: "House party shooting in North Carolina leaves 1 dead, 11 injured",
      text: "Gunfire erupted around a house party in western North Carolina early Sunday and one person was killed and 11 others were hurt, some with gunshot wounds and others with injuries from fleeing the shooting in a usually quiet residential neighbourhood, sheriff's deputies said. Authorities said at least 80 shots were fired in the shooting that began at about 12:45 a.m. People reported running, ducking for cover, and scrambling to their cars for safety. Hours later Sunday, law enforcement had made no arrests and was seeking tips from the public in the case. A statement from the Catawba County Sheriff's Office said a 58-year-old man, Shawn Patrick Hood, of Lenoir, was killed, the oldest of the victims who ranged in age from as young as 16.",
      image: "/north-carolina-shooting.jpg"
    },
    {
      title: "Two bridges collapse in western Russia, seven dead",
      text: " A road bridge came down in Bryansk, bringing several heavy trucks onto a moving passenger train late on Saturday, the regional governor said. At least seven people were killed and at least 71 were injured, Governor Alexander Bogomaz said. Pictures online from Bryansk showed mangled carriages and passengers helping each other climb out of the wreckage in the dark. Moscow's interregional transport prosecutor's office said an investigation had been launched. Authorities said the train's locomotive and several cars derailed when the road bridge fell on to it. Additional emergency workers, as well as rescue equipment and light towers for carrying out work at night have been sent to the area, according to Russian news agency TASS.",
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
