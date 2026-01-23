import "./BourbonProfile.css"
import bourbonBg from "../assets/bourbon.png"
import { useNavigate } from "react-router-dom"

function BourbonProfile() {
  const navigate = useNavigate()

  return (
    <div className="bourbon-profile-page">
      <div 
        className="background-image"
        style={{ backgroundImage: `url(${bourbonBg})` }}
      ></div>
      
      <div className="overlay">
        {/* Header */}
        <header className="profile-header">
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
          <h1 className="header-title">Bourbon Profile</h1>
          <div className="header-spacer" />
        </header>

        {/* Main Content */}
        <main className="profile-content">
          {/* Bourbon Info Section */}
          <div className="bourbon-info">
            <div className="bourbon-header">
              <div className="bourbon-name-section">
                <h2 className="bourbon-name">Baker's</h2>
                <div className="likes-section">
                  <svg className="heart-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span className="likes-count">8</span>
                </div>
              </div>
              <div className="price-section">
                <span className="price">40$</span>
              </div>
            </div>
            
            <p className="distillery">Jim Beam Distillery</p>

            {/* Stats Cards */}
            <div className="stats-container">
              <div className="stat-card">
                <div className="stat-label">Proof</div>
                <div className="stat-value">107</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Age</div>
                <div className="stat-value">4 years</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Mash bill</div>
                <div className="stat-value">IN-style rye</div>
              </div>
            </div>

            {/* Description */}
            <p className="description">
              Baker's Bourbon is produced by the Jim Beam distillery in Clermont, Kentucky. it offers a flavor profile with notes of vanilla, caramel, and toasted nuts, complemented by hints of oak, fruit, and spice. Known for a robust yet smooth, medium-bodied character, it's enjoyed neat, over ice, or in cocktails.
            </p>

            {/* Action Buttons */}
            <div className="action-buttons">
              <button className="taste-button">Taste</button>
              <button className="back-button-secondary" onClick={() => navigate(-1)}>
                Back
              </button>
            </div>

            {/* Community Notes Section */}
            <div className="community-section">
              <h3 className="community-title">Community Notes</h3>
              
              <div className="add-comment-container">
                <input 
                  type="text" 
                  placeholder="Add a comment" 
                  className="comment-input"
                />
                <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>

              <div className="review-buttons">
                <button className="review-button community-review">
                  <svg className="review-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  <span>Community Review</span>
                </button>
                <button className="review-button private-review">
                  <svg className="review-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  <span>Private Review</span>
                </button>
              </div>

              {/* User Comments */}
              <div className="comments-section">
                <div className="comment-item">
                  <div className="comment-header">
                    <span className="comment-author">Kyle</span>
                    <div className="comment-actions">
                      <svg className="flag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                        <line x1="4" y1="22" x2="4" y2="15"/>
                      </svg>
                      <svg className="edit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                      </svg>
                    </div>
                  </div>
                  <p className="comment-text">Fantastic pour, my new favorite</p>
                </div>
                
                <div className="comment-item">
                  <div className="comment-header">
                    <span className="comment-author">Kyle</span>
                    <div className="comment-actions">
                      <svg className="flag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                        <line x1="4" y1="22" x2="4" y2="15"/>
                      </svg>
                      <svg className="edit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                      </svg>
                    </div>
                  </div>
                  <p className="comment-text">Fantastic pour, my new favorite</p>
                </div>

                <div className="comment-item">
                  <div className="comment-header">
                    <span className="comment-author">Kyle</span>
                    <div className="comment-actions">
                      <svg className="flag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                        <line x1="4" y1="22" x2="4" y2="15"/>
                      </svg>
                      <svg className="edit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                      </svg>
                    </div>
                  </div>
                  <p className="comment-text">Fantastic pour, my new favorite</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default BourbonProfile
