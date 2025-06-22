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
├── node_modules/          # Project Dependencies
├── public/                           # Static Assets (Images, Icons)
│   │   ├── AllBlacks2025.jpg
│   │   ├── ArtGallery.jpg
│   │   ├── AucklandBreak.jpg
│   │   ├── aurora.jpg
│   │   ├── benefit-eligibility.jpg
│   │   ├── black-caps.jpg
│   │   ├── blackfernscoach.jpg
│   │   ├── blacksticks.jpg
│   │   ├── blue-pools-track.jpg
│   │   ├── breakers-signing.jpg
│   │   ├── cannabis-clinic.jpg
│   │   ├── danielvitana.jpg
│   │   ├── erin-patterson.jpg
│   │   ├── fatigue-illness.jpg
│   │   ├── female-plumber.jpg
│   │   ├── food.jpg
│   │   ├── gender-education.jpg
│   │   ├── germany-hop-tail-fire.jpg
│   │   ├── globalrecycling.jpg
│   │   ├── hero.png
│   │   ├── italy.jpg
│   │   ├── karori-nowicki.jpg
│   │   ├── livinggymnast.jpg
│   │   ├── livingymnast.jpg
│   │   ├── logo.svg
│   │   ├── MakeRealPeopleKura.jpg
│   │   ├── Manuhaki.jpg
│   │   ├── MaoriLinguist.jpg
│   │   ├── mastertonfires.jpg
│   │   ├── MatarikiChurch.jpg
│   │   ├── memory.jpg
│   │   ├── mind.jpg
│   │   ├── missing-cruise-passenger.jpg
│   │   ├── moko-kauae.jpg
│   │   ├── north-carolina-shooting.jpg
│   │   ├── nobreakers.jpg
│   │   ├── norcyclist.jpg
│   │   ├── norwarriors.jpg
│   │   ├── omaruriver.jpg
│   │   ├── pedro.jpg
│   │   ├── PikiTyrone.jpg
│   │   ├── power-outage.jpg
│   │   ├── ProfBrawelson.jpg
│   │   ├── rain.jpg
│   │   ├── rangatahi-gender-bill.jpg
│   │   ├── real-story.jpg
│   │   ├── reclaiming-name.jpg
│   │   ├── RotoruaCouncil.jpg
│   │   ├── rugby.jpg
│   │   ├── russia-bridge-collapse.jpg
│   │   ├── scott-mclaughlin.jpg
│   │   ├── silverfern.jpg
│   │   ├── slave-farms.jpg
│   │   ├── tamaromorricasoup.jpg
│   │   ├── tamiroz-yacht.jpg
│   │   ├── TeHauOra.jpg
│   │   ├── TeMatatini.jpg
│   │   ├── tenacrots-army.jpg
│   │   ├── TeTiritiMana.jpg
│   │   ├── TheWeekInPictures.jpg
│   │   ├── tour-southland.jpg
│   │   ├── TreatyOfWaitangi.jpg
│   │   ├── trump.jpg
│   │   ├── utc-kiwi.jpg
│   │   ├── WellingtonKura.jpg
│   │   ├── young-women-celibate.jpg
│   │   └── favicon.ico
├── src/                   # Source Code
│   ├── assets/            # Images, fonts, etc.
│   ├── components/        # React Components
│   │   ├── AccountMenu.jsx
│   │   ├── BreakingNewsBanner.jsx
│   │   ├── BreakingNewsBanner.css
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
│   │   ├── News.jsx                  # (Alias: World News)
│   │   ├── News.css
│   │   ├── Podcast.jsx
│   │   ├── Podcast.css
│   │   ├── Sports.jsx
│   │   ├── Sports.css
│   │   ├── TeAoMaori.jsx
│   │   ├── TeAoMaori.css
│   │   ├── TopStories.jsx
│   │   └── TopStories.css
│   ├── App.css            # Main Application Styles
│   ├── App.jsx            # Root Component
│   ├── index.css          # Global Styles
│   └── main.jsx           # Application Entry Point
├── .gitattributes
├── .gitignore
├── eslint.config.js       # ESLint Configuration
├── index.html             # Main HTML File
├── package-lock.json      # Dependency Lock File
├── package.json           # Project Metadata and Dependencies
├── README.md              # Project Documentation (this file)
└── vite.config.js         # Vite Configuration

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
        
    Open in browser http://localhost:5173/ in your browser to view the app or type O and ENTER to automatically open

📌 To-Do / Ideas for Future Work
✅ Integrate a backend 

📱 Mobile responsiveness improvements

🧪 Unit and integration tests

🤝 Contributing
Contributions are very welcome!....Please fork the repository and submit a pull request with your changes.

📄 License
This project is licensed under the MIT License.



