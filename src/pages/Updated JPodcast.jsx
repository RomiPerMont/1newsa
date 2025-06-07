// ./pages/Podcast.jsx created and edited by Jay - with visualizer effect

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
      description: "Insights on emerging trends and news in technology.",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      coverArt: "/cyberspeak.jpeg"
    },
    {
      id: 2,
      title: "The Chaos In Your Consciousness",
      description: "Unlocking the mysteries of the mind and mental health.",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      coverArt: "/mind.jpg"
    },
    {
      id: 3,
      title: "From Zero To Hero Diaries",
      description: "The founder's journey from sleepless nights to sold-out products.",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      coverArt: "/hero.jpg"
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
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          Now Playing: {podcasts.find(p => p.id === playingId)?.title}
        </div>
      )}

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
  );
}

export default Podcast;

