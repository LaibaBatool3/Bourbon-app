'use client'
import "./SingleBarrel.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SingleBarrel() {
  const navigate = useNavigate()
  const [selectedBourbons, setSelectedBourbons] = useState([true, true, true, true, true, true])
  const completedCount = 3
  const totalCount = 6

  const bourbons = [
    { name: "Blanton's", hasWOM: true, image: "blantons" },
    { name: "Baker's", hasWOM: false, image: "bakers" },
    { name: "Blanton's", hasWOM: true, image: "blantons" },
    { name: "Baker's", hasWOM: false, image: "bakers" },
    { name: "Blanton's", hasWOM: true, image: "blantons" },
    { name: "Baker's", hasWOM: false, image: "bakers" },
  ]

  const toggleBourbon = (index) => {
    const newSelection = [...selectedBourbons]
    newSelection[index] = !newSelection[index]
    setSelectedBourbons(newSelection)
  }

  const handleConfirm = () => {
    console.log("Confirming selection")
  }

  const progressPercentage = (completedCount / totalCount) * 100

  return (
    <div className="single-barrel-page">
      {/* Header */}
      <header className="single-barrel-header">
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
        <h1 className="header-title">SINGLE BARREL</h1>
        <div className="header-spacer"></div>
      </header>

      <main className="single-barrel-main">
        {/* Tasting Progress Card */}
        <div className="progress-card">
          <h2 className="progress-title">Tasting progress</h2>
          <div className="progress-bar-container">
            <div className="progress-bar-track">
              <div
                className="progress-bar-fill"
                style={{ width: `${progressPercentage}%` }}
              ></div>
              <div
                className="progress-marker"
                style={{ left: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="progress-labels">
              <span>0%</span>
              <span>20%</span>
              <span>100%</span>
            </div>
          </div>
          <div className="progress-count">{completedCount}/{totalCount}</div>
        </div>

        {/* Bourbons to Taste Section */}
        <div className="bourbons-section">
          <h2 className="bourbons-title">Bourbons to taste</h2>
          <p className="bourbons-description">
            Rich, oak-aged bourbons with caramel and spice notes.
          </p>

          <div className="bourbons-list">
            {bourbons.map((bourbon, index) => (
              <div
                key={index}
                className={`bourbon-item ${selectedBourbons[index] ? "selected" : ""}`}
              >
                <div className="bourbon-image-container">
                  <div className="bourbon-image-placeholder">
                    {bourbon.name.charAt(0)}
                  </div>
                </div>
                <div className="bourbon-info">
                  <div className="bourbon-name-row">
                    <span className="bourbon-name">{bourbon.name}</span>
                    {bourbon.hasWOM && (
                      <span className="wom-tag">WOM</span>
                    )}
                  </div>
                  <a href="#" className="bourbon-profile-link">
                    Bourbon profile →
                  </a>
                </div>
                <div className="bourbon-checkbox-container">
                  <div className="yellow-dot"></div>
                  <button
                    className={`bourbon-checkbox ${selectedBourbons[index] ? "checked" : ""}`}
                    onClick={() => toggleBourbon(index)}
                    aria-label={`Toggle ${bourbon.name}`}
                  >
                    {selectedBourbons[index] && (
                      <svg
                        className="checkmark"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Confirm Selection Button */}
        <button className="confirm-button" onClick={handleConfirm}>
          Confirm selection
        </button>
      </main>

      {/* Home Indicator */}
      <div className="home-indicator">
        <div className="indicator-bar"></div>
      </div>
    </div>
  )
}

export default SingleBarrel
