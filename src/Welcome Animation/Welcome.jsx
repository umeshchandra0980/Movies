import React from 'react'
import './welcome.css'

export default function Welcome() {
  return (
    <div className="welcome-screen" id="welcome">
      <audio id="welcomeSound" src="/welcome.mp3" preload="auto" autoPlay></audio>
      <h1 className="animated-text">
        Welcome to <span className="highlight">Movies</span>
      </h1>
    </div>
  )
}
