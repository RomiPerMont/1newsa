Description:
This repository is created for Yoobee Colleges CS203 Investigative Studio 1 Assessment 2, on May 2025
Submitted by: Jay Refugia 270319847@yoobeestudent.ac.nz and Romi Pereira Garcia Montejo 270250652@yoobeestudent.ac.nz

# 📰 1newsa (React.js)

A new look and modern, responsive React.js-based of the **1News.co.nz** with a homepage featuring breaking news, image galleries, search functionality, and basic authentication modals. This project is a front-end web application aimed at mimicking the layout and functionality of a typical news website, including dynamic routing and reusable components.

---

## 🚀 Features

- 🗞️ **Top Stories, Latest, and Games** sections
- 🔍 **Search functionality** to filter news by keywords
- 🧭 **Routing** via `react-router-dom` to multiple pages:
  - Home
  - Week in Pictures
  - Likes Page
  - Breaking News Page
- 💡 **Login & Registration modals**
- 📸 **"The Week in Pictures"** banner and routing
- 🎨 Custom components for news display, header, and modals

---

## 📁 Project Structure
1newsa/
├── node_modules/                     # Project Dependencies
├── public/                           # Static Assets (Images, Icons)
│   │   ├── all-blacks-2025.jpg
│   │   ├── ArtGallery.jpg
│   │   ├── AucklandLibrarian.jpg
│   │   ├── AustralianLotto.jpg
│   │   ├── aurora.jpg
│   │   ├── benefit-eligibility.jpg
│   │   ├── black-caps.jpg
│   │   ├── black-sticks.jpg
│   │   ├── blacksticks.jpg
│   │   ├── blue-pools-track.jpg
│   │   ├── breakers-signing.jpg
│   │   ├── cannabis-clinic.jpg
│   │   ├── Climate-Change.jpg
│   │   ├── Crusaders.jpg
│   │   ├── DameIritana.jpg
│   │   ├── Democracy.jpg
│   │   ├── Education-Reform.jpg
│   │   ├── erin-patterson.jpg
│   │   ├── EthicsAI.jpg
│   │   ├── fatigue-illness.jpg
│   │   ├── female-plumber.jpg
│   │   ├── food.jpg
│   │   ├── FutureWork.jpg
│   │   ├── gender-education.jpg
│   │   ├── germany-hospital-fire.jpg
│   │   ├── GenZ.jpg
│   │   ├── hero.jpg
│   │   ├── israelTarget.jpg
│   │   ├── italy.jpg
│   │   ├── karol-nawrocki.jpg
│   │   ├── KingBirthdayHonours.jpg
│   │   ├── kiwi-gymnast.jpg
│   │   ├── kiwi-sprinter.jpg
│   │   ├── kiwigymnast.jpg
│   │   ├── LocalNews.jpg
│   │   ├── MakeretiPapakura.jpg
│   │   ├── Manutahi.jpg
│   │   ├── MaoriLinguist.jpg
│   │   ├── MatarikiChchCathedral.jpg
│   │   ├── MentalHealth.jpg
│   │   ├── mind.jpg
│   │   ├── missing-cruise-passenger.jpg
│   │   ├── moko-kauae.jpg
│   │   ├── netflix-alltime.jpg
│   │   ├── nimbus-covid.jpg
│   │   ├── north-carolina-shooting.jpg
│   │   ├── nz-warriors.jpg
│   │   ├── nzbreakers.jpg
│   │   ├── PalestinianFlag.jpg
│   │   ├── pedro.jpg
│   │   ├── PitaTipene.jpg
│   │   ├── power-outage.jpg
│   │   ├── PrinceCharles.jpg
│   │   ├── ProfBevLawton.jpg
│   │   ├── rain.jpg
│   │   ├── rangatahi-gender-bill.jpg
│   │   ├── real story.jpg
│   │   ├── reclaiming-name.jpg
│   │   ├── RotoruaCouncil.jpg
│   │   ├── russia-bridge-collapse.jpg
│   │   ├── scott-mclaughlin.jpg
│   │   ├── silver-ferns.jpg
│   │   ├── silverfern.jpg
│   │   ├── SouthAfrica.jpg
│   │   ├── StamenicFootball.jpg
│   │   ├── tamaromorricasoup.jpg
│   │   ├── tamiroz-yacht.jpg
│   │   ├── team-nz-yacht.jpg
│   │   ├── teamnzamericascup.jpg
│   │   ├── TeHauOra.jpg
│   │   ├── TeMatatini.jpg
│   │   ├── TeTiiMarae.jpg
│   │   ├── TeTiritiMana.jpg
│   │   ├── terracotta-army.jpg
│   │   ├── TheWeekInPictures.jpg
│   │   ├── tour-southland.jpg
│   │   ├── TreatyOfWaitangi.jpg
│   │   ├── trump.jpg
│   │   ├── ufc-kiwi.jpg
│   │   ├── WellingtonKura.jpg
│   │   ├── worst-movies.jpg
│   │   └── young-women-celibate.jpg
├── src/                            # Source Code
│   ├── assets/                     # Images, fonts, etc.
│   │   ├── react.svg
│   ├── components/                 # React Components
│   │   ├── AccountMenu.jsx
│   │   ├── BreakingNewsBanner.jsx
│   │   ├── BreakingNewsPage.css
│   │   ├── BreakingNewsPage.jsx
│   │   ├── ColorBar.jsx
│   │   ├── DateDisplay.jsx
│   │   ├── Header.jsx
│   │   ├── LikesPage.jsx
│   │   ├── LoginModal.jsx
│   │   ├── Modal.css
│   │   ├── Modal.jsx
│   │   ├── NewsCards.jsx
│   │   ├── RegisterModal.jsx
│   │   ├── SideBar.css
│   │   ├── SideBar.jsx
│   │   ├── Weather.jsx
│   │   ├── WeekInPictures.css
│   │   └── WeekInPictures.jsx
│   ├── pages/                        # Main Page Routes
│   │   ├── Edit.jsx
│   │   ├── Edit.css
│   │   ├── Games.jsx
│   │   ├── Games.css
│   │   ├── Latest.jsx
│   │   ├── Latest.css
│   │   ├── NewZealand.jsx
│   │   ├── NewZealand.css
│   │   ├── News.jsx                 
│   │   ├── News.css
│   │   ├── Podcast.jsx
│   │   ├── Podcast.css
│   │   ├── Sports.jsx
│   │   ├── Sports.css
│   │   ├── TeAoMaori.jsx
│   │   ├── TeAoMaori.css
│   │   ├── TopStories.jsx
│   │   ├── TopStories.css
│   │   ├── WorldNews.css
│   │   └── WorldNews.jsx
│   ├── App.css                     # Main Application Styles
│   ├── App.jsx                     # Root Component
│   ├── index.css                   # Global Styles
│   ├── main.jsx                    # Application Entry Point
│   └── ReNews.css                  # News Styles
├── .gitattributes
├── .gitignore
├── eslint.config.js                # ESLint Configuration
├── index.html                      # Main HTML File
├── package-lock.json               # Dependency Lock File
├── package.json                    # Project Metadata and Dependencies
├── README.md                       # Project Documentation (this file)
└── vite.config.js                  # Vite Configuration

---

## 🛠️ Technologies Used

- **React (JSX)**
- **Vite (Build Tool)**
- **CSS (custom styling in `App.css`)**
- **JavaScript (ES6+)**

---

## 💻 Installation

### 1. Clone the repository
        git clone https: https://github.com/RomiPerMont/1newsa.git
        
    2. Install dependencies:
        npm install
        
    3. Run the development server
        npm run dev
        
    Open in browser http://localhost:5173/ in your browser to view the app or type capital letter O and ENTER to automatically open

📌 To-Do / Ideas for Future Work
✅ Integrate a backend 

📱 Mobile responsiveness improvements

🧪 Unit and integration tests

🤝 Contributing
Contributions are very welcome!....Please fork the repository and submit a pull request with your changes.

📄 License
This project is licensed under the MIT License.



