import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./BourbonDescription.css"
import bourbonImage from "../assets/bourbon.png"
import flagIcon from "../assets/flag.png"
import pencilIcon from "../assets/pencil (2).png"
import communityReviewIcon from "../assets/community-review.png"
import privateReviewIcon from "../assets/private-review.png"

function BourbonDescription() {
  const navigate = useNavigate()
  const [isTasted, setIsTasted] = useState(false)

  return (
    <div className="bourbon-description-page">
      <header className="bourbon-description-header">
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
        <h1 className="header-title">BOURBON PROFILE</h1>
        <div className="header-spacer"></div>
      </header>

      <main className="bourbon-description-main">
        {/* Image Section */}
        <div className="bourbon-image-section">
          <img 
            src={bourbonImage} 
            alt="Bourbon" 
            className="bourbon-main-image"
          />
        </div>

        {/* Content Section */}
        <div className="bourbon-content-section">
          {/* Header with name and price */}
          <div className="bourbon-header-info">
            <div className="bourbon-name-section">
              <h2 className="bourbon-name">Baker's</h2>
              <div className="likes-section">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                <span>8</span>
              </div>
            </div>
            <div className="bourbon-price">40$</div>
          </div>

          {/* Distillery */}
          <p className="bourbon-distillery">Jim Beam Distillery</p>

          {/* Divider */}
          <div className="bourbon-divider"></div>

          {/* Stats Cards */}
          <div className="bourbon-stats-container">
            <div className="bourbon-stat-card">
              <div className="stat-label">Proof</div>
              <div className="stat-value">107</div>
            </div>
            <div className="bourbon-stat-card">
              <div className="stat-label">Age</div>
              <div className="stat-value">4 years</div>
            </div>
            <div className="bourbon-stat-card">
              <div className="stat-label">Mash bill</div>
              <div className="stat-value">IN-style rye</div>
            </div>
          </div>

          {/* Description */}
          <p className="bourbon-description-text">
            Baker's Bourbon is produced by the Jim Beam distillery in Clermont,<br />
             Kentucky.<br /><br/>
            it offers a flavor profile with notes of vanilla, caramel, and toasted nuts, <br />
            complemented by hints of oak, fruit, and spice. Known for a robust yet <br />
            smooth, medium-bodied character, it's enjoyed neat, over ice, or in cocktails.
          </p>

          {/* Action Buttons */}
          <div className="bourbon-action-buttons">
            <button 
              className={`tasted-button ${isTasted ? 'tasted' : ''}`}
              onClick={() => setIsTasted(!isTasted)}
            >
              {isTasted ? (
                <>
                  Tasted <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </>
              ) : (
                'Taste'
              )}
            </button>
            <button className="back-action-button" onClick={() => navigate(-1)}>
              Back
            </button>
          </div>

          {/* Community Notes Section */}
          <div className="community-notes-section">
            <h3 className="community-notes-heading">Community Notes</h3>
            
            {/* Add Comment Input */}
            <div className="add-comment-input">
              <span className="add-comment-text">Add a comment</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>

            {/* Review Buttons */}
            <div className="review-buttons">
              <button className="community-review-button">
                <img src={communityReviewIcon} alt="Community Review" className="review-icon" />
                Community Review
              </button>
              <button className="private-review-button">
                <img src={privateReviewIcon} alt="Private Review" className="review-icon" />
                Private review
              </button>
            </div>

            {/* Comments List */}
            <div className="comments-list">
              {[1, 2, 3].map((item) => (
                <div key={item} className="comment-item">
                  <div className="comment-content">
                    <div className="comment-author">Kyle</div>
                    <div className="comment-text">Fantastic pour, my new favorite</div>
                  </div>
                  <div className="comment-actions">
                    <img src={flagIcon} alt="Flag" className="comment-action-icon" />
                    <img src={pencilIcon} alt="Edit" className="comment-action-icon" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Home Indicator */}
      <div className="home-indicator">
        <div className="indicator-bar"></div>
      </div>
    </div>
  )
}

export default BourbonDescription
