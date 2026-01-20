'use client'

import "./Welcome.css"
import bg from "../assets/cup.jpg"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import AlmostThereModal from "../components/AlmostThereModal"

function Welcome() {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  // Show modal automatically on page load (for testing)
  useEffect(() => {
    const dontShow = localStorage.getItem("dontShowAlmostThere")
    if (!dontShow) {
      setShowModal(true)
    }
  }, [])

  return (
    <div className="welcome-page">
      <header className="welcome-header">
        <button
          className="back-button"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <svg
            className="chevron-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <h1 className="welcome-title">Welcome to The Club, Dimir</h1>

        <div className="header-spacer" />
      </header>

      <main className="welcome-main">
        <div className="hero">
          <img
            className="hero-image"
            src={bg}
            alt="Bourbon glass"
          />
        </div>
        
        <section className="bottom-card">
          <h2 className="card-title">Bourbon Club</h2>

          <p className="card-body">
            The Bourbon Club is the most exclusive way to try, taste and fall in
            love with bourbon, from specialty tastings to VIP cocktails with
            master distillers, the Bourbon Club is at the heart of the tail and
            our undying dedication to the great American Spirit!
          </p>

          <button 
            className="continue-button" 
            type="button"
            onClick={() => setShowModal(true)}
          >
            Continue
          </button>
        </section>

        <div className="home-indicator">
          <div className="indicator-bar" />
        </div>
      </main>

      <AlmostThereModal 
        isOpen={showModal} 
        onClose={() => {
          setShowModal(false)
          navigate("/single-barrel")
        }} 
      />
    </div>
  )
}

export default Welcome
