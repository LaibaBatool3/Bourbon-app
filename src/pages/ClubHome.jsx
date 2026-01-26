import { useNavigate } from "react-router-dom"
import "./ClubHome.css"
import bakersImage from "../assets/Bakers.png"
import settingsIcon from "../assets/settings.png"
import homeIcon from "../assets/Home.png"
import clubListIcon from "../assets/Club-list.png"
import whiskeyWednesdayImage from "../assets/Whiskey-wednesday.jpg"
import firstAccessImage from "../assets/First-access.jpg"
import specialGlassImage from "../assets/Special-glass.jpg"
import yourMarkImage from "../assets/Your-mark.jpg"
import lifetimeDiscountImage from "../assets/lifetime-discounts.jpg"

function ClubHome() {
  const navigate = useNavigate()

  return (
    <div className="club-home-page">
      {/* Header */}
      <header className="club-home-header">
        <h1 className="welcome-title">Welcome Back, Dimir</h1>
        <button className="settings-button" aria-label="Settings">
          <img src={settingsIcon} alt="Settings" className="settings-icon" />
        </button>
      </header>

      <main className="club-home-main">
        {/* Tasting Lists Progress Section */}
        <section className="progress-section">
          <h2 className="section-title">Tasting Lists Progress</h2>
          
          <div className="progress-bar-container">
            <div className="progress-bar-wrapper">
              <div className="progress-bar-track">
                <div className="progress-bar-fill" style={{ width: '10%' }}></div>
                <div className="progress-marker" style={{ left: '10%' }}>
                  <div className="marker-line"></div>
                  <span className="marker-label">10%</span>
                </div>
              </div>
            </div>
            <div className="progress-labels">
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>

          {/* Whiskey of the Month Card */}
          <div className="whiskey-card">
            <img src={bakersImage} alt="Baker's" className="whiskey-image" />
            <div className="whiskey-info">
              <div className="whiskey-category">Whiskey of the Month</div>
              <div className="whiskey-name">Baker's</div>
            </div>
            <div className="whiskey-checkbox">
              <input type="checkbox" id="bakers-check" />
              <label htmlFor="bakers-check"></label>
            </div>
          </div>

          <button className="continue-button" onClick={() => navigate("/single-barrel")}>
            Continue tasting
          </button>
        </section>

        {/* Why Bourbon Club Section */}
        <section className="benefits-section">
          <h2 className="section-title">Why Bourbon club?</h2>
          
          <div className="benefit-item">
            <div className="benefit-image-container">
              <img src={whiskeyWednesdayImage} alt="Whiskey Wednesday" className="benefit-image" />
            </div>
            <div className="benefit-content">
              <h3 className="benefit-title">Whiskey Wednesday</h3>
              <p className="benefit-description">
                Club members enjoy 20% off all day on Whiskey Wednesday.
              </p>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-image-container">
              <img src={firstAccessImage} alt="First Access" className="benefit-image" />
            </div>
            <div className="benefit-content">
              <h3 className="benefit-title">First Access</h3>
              <p className="benefit-description">
                Exclusive invites to VIP tastings, meet the distiller cocktail hours, release parties and special events
              </p>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="offers-section">
          <h2 className="section-title">What we offer</h2>
          
          <p className="offers-intro">
            Have a 2 oz. pour of all of the listed whiskey on this card and you will receive:
          </p>

          <div className="offer-item">
            <div className="offer-image-container">
              <img src={specialGlassImage} alt="Special glass" className="offer-image" />
            </div>
            <div className="offer-content">
              <h3 className="offer-title">Special glass</h3>
              <p className="offer-description">
                A custom engraved glass kept here at The Twisted Tail for your drinking pleasure
              </p>
            </div>
          </div>

          <div className="offer-item">
            <div className="offer-image-container">
              <img src={yourMarkImage} alt="Your mark" className="offer-image" />
            </div>
            <div className="offer-content">
              <h3 className="offer-title">Your mark</h3>
              <p className="offer-description">
                An engraved plaque with your name affixed to the bar
              </p>
            </div>
          </div>

          <div className="offer-item">
            <div className="offer-image-container">
              <img src={lifetimeDiscountImage} alt="20% Off" className="offer-image" />
            </div>
            <div className="offer-content">
              <h3 className="offer-title">20% Off</h3>
              <p className="offer-description">
                A 20% Discount for every bourbon in our restaurant any time
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button className="nav-button active">
          <img src={homeIcon} alt="Home" className="nav-icon" />
          <span className="nav-label">Home</span>
        </button>
        <button className="nav-button">
          <img src={clubListIcon} alt="Club List" className="nav-icon" />
          <span className="nav-label">Club List</span>
        </button>
      </nav>

      {/* Home Indicator */}
      <div className="home-indicator">
        <div className="indicator-bar"></div>
      </div>
    </div>
  )
}

export default ClubHome
