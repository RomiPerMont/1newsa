import React, { useState, useRef, useEffect } from 'react';
import './Podcast.css';

function Podcast() {
  const [playingId, setPlayingId] = useState(null);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(new Audio());
  const intervalRef = useRef(null);

  const podcasts = [
    {
      id: 1,
      title: "Cyberspeak Weekly With Romi",
      description: "Sharp, insightful takes on emerging trends, breaking news, and game-changing innovations. Host Romi cuts through the noise, delivering expert analysis and actionable insights in every episode..",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      coverArt: "/cyberspeak.jpeg"
    },
    {
      id: 2,
      title: "The Chaos In Your Consciousness",
      description: "Dig deep into the tangled labyrinth of the human mind. Explore the mysteries of mental health, neuroscience, and the unseen forces shaping our thoughts, emotions, and behaviours.",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      coverArt: "/mind.jpg"
    },
    {
      id: 3,
      title: "From Zero To Hero Diaries",
      description: "The founder's journey from sleepless nights to sold-out products. Dive deep into the highs, lows, and hard-won lessons of building a brand from scratch.",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      coverArt: "/hero.jpg"
    },
    {
      id: 4,
      title: "Chef Jay's Untold Italy",
      description: "Exploring the best ways to get around, favourite food spots, cultural insights and much more. This is the Italy you won't find in the guidebooks.",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
      coverArt: "/italy.jpg"
    },
    {
      id: 5,
      title: "We Are What We Eat",
      description: "Bite-sized insights and your guide to the new science of eating well. Unlock the science of a healthier you. Your body is talking. Are you listening?...",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
      coverArt: "/food.jpg"
    },
    {
      id: 6,
      title: "Unfiltered African Safari",
      description: "Real stories. Real conversations. Real Africa. The African safari in its raw, unpredictable, and breathtaking reality.",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
      coverArt: "/real story.jpg"
    }
  ];

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    if (playingId !== null) {
      intervalRef.current = setInterval(updateProgress, 500);
    }

    return () => clearInterval(intervalRef.current);
  }, [playingId]);

  const handlePlayPause = (podcast) => {
    const audio = audioRef.current;

    if (playingId === podcast.id) {
      audio.pause();
      audio.currentTime = 0;
      setPlayingId(null);
      setProgress(0);
    } else {
      audio.src = podcast.audioUrl;
      audio.play();
      setPlayingId(podcast.id);
      setProgress(0);
    }
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const seekTo = (e.target.value / 100) * audio.duration;
    audio.currentTime = seekTo;
    setProgress(e.target.value);
  };

  return (
    <div className="podcast-page">
      <h2>Podcast on Demand</h2>

      {playingId !== null && (
        <div className="now-playing">
          <div className="audio-visualizer">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
          Now Playing: {podcasts.find(p => p.id === playingId)?.title}
        </div>
      )}

      <div className="podcast-grid">
        {podcasts.map(podcast => (
          <div key={podcast.id} className="podcast-card">
            <img
              src={podcast.coverArt}
              alt={`${podcast.title} cover`}
              className="podcast-cover"
            />
            <div>
              <h3>{podcast.title}</h3>
              <p>{podcast.description}</p>

              {playingId === podcast.id && (
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={handleSeek}
                  className="podcast-slider"
                />
              )}

              <button
                onClick={() => handlePlayPause(podcast)}
                className={`podcast-button ${playingId === podcast.id ? 'stop-button' : 'play-button'}`}
              >
                {playingId === podcast.id ? 'Stop' : 'Play'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Podcast;
