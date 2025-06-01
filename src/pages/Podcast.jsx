import './Podcast.css';

function Podcast() {
const categories = [
  { title: "Podcast Charts", color: "#007bff" },
  { title: "New Releases", color: "#b276d2" },
  { title: "True Crime", color: "#ff5722" },
  { title: "Chatting with Friends", color: "#e91e63" },
  { title: "Video Podcast", color: "#8e2424" },
  { title: "Educational", color: "#ce4ecc" },
  { title: "Wellness & Self-Help", color: "#2196f3" },
  { title: "Pop Culture", color: "#007960" },
  { title: "Comedy", color: "#4caf50" },
  { title: "Docos", color: "#f44336" },
  { title: "Interviews", color: "#ff9800" },
  { title: "First Nations", color: "#8e44ad" },
  { title: "News & Politics", color: "#8bc34a" },
  { title: "Sports", color: "#00796b" },
  { title: "Kids & Family", color: "#ff5722" },
  { title: "Fiction", color: "#9c27b0" }
];

  return (
<div className="podcast-grid">
  {categories.map((cat, idx) => (
    <div key={idx} className="podcast-card" style={{ backgroundColor: cat.color }}>
      {cat.title}
    </div>
  ))}
</div>

  );
}

export default Podcast;
