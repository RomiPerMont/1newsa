// src/pages/TeAoMaori.jsx
import React from 'react';
import '../ReNews.css';

const teAoMaoriArticles = [
  {
    title: "Matariki: 'Evocative' display lights up Christ Church Cathedral",
    text: "The Christ Church Cathedral has been lit up to mark the Māori new year with its façade used as an impressive backdrop to Hurihanga, a powerful light display telling stories of renewal and remembrance. Alongside Matariki, the display celebrates the star Puanga, or Puaka, as the main marker for Māori in Te Waipounamu.Created by the Offline Collective’s Sam Emerson (Ngāi Tahu) in collaboration with Michael Duggan and Charlie Pitts, the project took three months to complete. ",
    image: "/MatarikiChchCathedral.jpg"
  },
  {
    title: "Pita Tipene to step down as Waitangi National Trust chairperson",
    text: "The Waitangi National Trust's Pita Tipene is stepping down as trust chairperson after serving on the board for almost a decade.Tīpene has been a member of the board for nine years, the maximum length set out in the Waitangi National Trust Board Act 1932 before board members must step down.Fellow board members Jane Fletcher and Mita Harris will also close out their time with on the board.",
    image: "/PitaTipene.jpg"
  },
  {
    title: "Te Matatini risks alienating regions – Māori ward councillor",
    text: "Te Matatini risks alienating the regions with its decision not to host the 2027 event in Te Tauhihu, Whakatū Nelson’s Māori Ward councillor has warned. It was announced on Monday that the next national kapa haka competition will not be hosted in the Top of the South as had been planned since 2013. Society heamana (chair) Tā Herewini Parata said the decision was not a reflection on Te Tauihu (the Top of the South Island).",
    image: "/TeMatatini.jpg"
  },
  {
    title: "Why Te Tii Marae lifted the media ban at Waitangi",
    text: "Analysis: The crowds have dispersed, and the tide has receded, marking the end of another year at Waitangi. Yet, the marae at its core stands steadfast, forever tied to the land where a pivotal moment in our country’s history began. Te Tii Marae is a special place. It is where He Whakaputanga, the Declaration of Independence was signed in 1835, and where Rangatira wrestled with the decision of whether to sign Te Tiriti o Waitangi five years later.",
    image: "/TeTiiMarae.jpg"
  },
  {
    title: "'Right and proper': Rotorua council agrees to return land to whanau",
    text: "Ownership of a public reserve in Ngongotahā will be gifted back to the whānau who donated it decades ago. Backers of the move included former Te Pāti Māori co-leader Te Ururoa Flavell, who said it was once part of the family farm. Rotorua Lakes Council agreed to dispose of the surplus 810sq m section in April after a majority of public submissions supported this. Last week, councillors voted to gift the land back to descendants of the original owners, without charge.",
    image: "/RotoruaCouncil.jpg"
  },
  {
    title: "Treaty Principles Bill voted down amid fiery MP debate",
    text: "The Government's Treaty Principles Bill has been defeated at its second reading, concluding more than a year of contention over the controversial legislation.The noes are 112. The motion is lost, said Speaker Gerry Brownlee. The only party to support the bill was ACT with its 11 votes. Opposition MPs and some in the public gallery stood and applauded the result. A waiata, which was permitted by Brownlee, followed from the gallery. The voting down of the bill came after a fiery debate between MPs.",
    image: "/TreatyOfWaitangi.jpg"
  },
  {
    title: "Fear of confusion sparks Manutahi Park name rethink",
    text: "Worries about a new Manutahi Park being mistaken for another Manutahi an hour's drive away has New Plymouth's council considering adding the name of a British Military Settler. The park is a planned green space in Lepperton village, about 15km from New Plymouth, on the site of a hall demolished three years ago. New Plymouth District Council asked mana whenua about a name for the park, and Manutahi was suggested by Puketapu hapū. Manutahi remembers the name of the Māori village where Lepperton now stands.",
    image: "/Manutahi.jpg"
  },
  {
    title: "Māori linguist Te Haumihiata Mason recognised with highest academic honour",
    text: "Renowned te reo Māori translator and linguist Te Haumihiata Mason (Ngāi Tūhoe, Te Arawa, Ngāti Pango) has been bestowed an honorary doctorate from the University of Waikato. Mason, whose translation works include The Diary of Anne Frank and Shakespeare’s Romeo and Juliet, was conferred yesterday in a graduation ceremony presided by former Governor-General and University of Waikato Chancellor Sir Anand Satyanand.",
    image: "/MaoriLinguist.jpg"
  },
  {
    title: "Te reo Māori champion Dame Iritana Tāwhiwhirangi dies aged 95",
    text: "Dame Iritana Tāwhiwhirangi, who spearheaded the Kōhanga Reo movement and helped thousands grow up immersed in te reo Māori, has died at the age of 95.Tāwhiwhirangi (Ngāti Porou, Ngāti Kahungunu and Ngāpuhi) passed away peacefully on Saturday surrounded by whānau at home. Born in Hicks Bay, Gisborne in 1929, Tāwhiwhirangi became involved in the kōhanga reo movement in the 1980s when there was growing concern around the state of te reo Māori.",
    image: "/DameIritana.jpg"
  },
  {
    title: "Professor Bev Lawton named New Zealander of the Year",
    text: "The awards honour the achievements and contributions of inspirational Kiwis who have made positive contributions to the country. Lawton (Ngāti Porou) is recognised as a pioneering force in women’s health in New Zealand and is the founder of Te Tātai Hauora o Hine (National Centre for Women’s Health Research Aotearoa). Along with driving critical advancements in screening for cervical cancer, maternal health, and indigenous health equity.",
    image: "/ProfBevLawton.jpg"
  },
  {
    title: "Posthumous Oxford degree for Māori scholar Mākereti Papakura",
    text: "Mākereti Papakura, the first indigenous woman to study at the University of Oxford, will receive a posthumous degree from the institution nearly a hundred years after attending.She died in 1930, just weeks before her thesis was due, and her whānau have been fighting for recognition of her achievements for decades. A small group of her female descendants from Tūhourangi and Ngāti Wāhiao gathered today at Whakarewarewa Thermal Village in Rotorua to celebrate and talk about their Kui Maggie. For Bella Mike, hearing the news made for a wonderful day.",
    image: "/MakeretiPapakura.jpg"
  },
  {
    title: "Wellington kura nears end of 31-year wait for major upgrade",
    text: "A kura kaupapa Māori in Wellington is set to get a long-awaited upgrade to its buildings after decades of operating from dilapidated and rundown classrooms. Education Minister Erica Stanford made the announcement at Te Kura Kaupapa Māori o Ngā Mokopuna in Seatoun. Construction on the new build is expected to start before the end of the year and be completed within in two years. Tumuaki (principal) Rawiri Wright, who is also co-chairperson of the national body for kura kaupapa Māori, Te Rūnanga Nui o Ngā Kura Kaupapa Māori o Aotearoa, said today’s announcement for Ngā Mokopuna is hugely significant.",
    image: "/WellingtonKura.jpg"
  },
  {
     title: "'Please walk on me’ – flag artwork sparks outrage again",
    text: "An artistic invitation to please walk on the New Zealand flag is continuing to offend gallery visitors 30 years after it was first displayed. 'Flagging the Future' is just one of several artworks currently on display at Nelson’s Suter Art Gallery as part of an exhibition showcasing the multimedia works of Diane Prince who has a long history of Māori activism. Recreated by Prince last year, the artwork features a surveying tripod, a talismanic symbol of territorial conquest, by the Crown against Māori, according to the artist – made from flax stalks to symbolise Māori reclamation of their land.",
    image: "/ArtGallery.jpg"
  },
  {
     title: "Robotic device could break down eyecare barriers in remote areas",
    text: "A portable robotic eye-testing device could provide care for people in remote communities who currently face obstacles to treatment. Difficulties with transport, childcare and general costs can all get in the way of people receiving the care they need. A trial of the prototype machine - made from a 3D printer and with a specialised camera - is now underway in Northland. Specialists can hold a consultation with the patient remotely while they are having the test. The trial is being run by iwi health provider Te Hau Ora o Ngāpuhi.",
    image: "/TeHauOra.jpg"
  },
  {
     title: "Auckland librarian will help share Te Matatini with Mandarin speakers",
    text: "This Saturday Lidu Gong will be interpreting and explaining what is happening on stage in Mandarin. Gong, originally from China, works as a librarian at Te Wānanga o Aotearoa in Mangere. He said he learned Te Reo for two reasons. The first reason is I am working in a Māori organisation. To work well, I should be integrating myself into the Māori world, and te reo is a very important means of getting involved in the Māori world. Gong said his second reason was to find the best way to learn a language, as he had been teaching language for many years.",
    image: "/AucklandLibrarian.jpg"
  }

];

const TeAoMaori = () => {
  return (
    <main className="re-news-section">
      <h2 style={{ padding: "1rem 0" }}>Te Ao Māori</h2>
      <div className="re-news-grid">
        {teAoMaoriArticles.map((article, index) => (
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

export default TeAoMaori;