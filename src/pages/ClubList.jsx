import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./ClubList.css"
import image1 from "../assets/1.png"
import image2 from "../assets/2.png"
import homeIcon from "../assets/Home.png"
import clubListIcon from "../assets/Club-list.png"
import halloweenIcon from "../assets/Halloween.png"
import proofIcon from "../assets/proof.png"
import distilleryIcon from "../assets/distillery.png"
import ageIcon from "../assets/age.png"
import mashBillIcon from "../assets/mash-bill.png"
import chevronIcon from "../assets/Combined Shape.png"
import buttonIcon from "../assets/Button.png"
import whiskey2Icon from "../assets/whiskey2.png"

function ClubList() {
  const navigate = useNavigate()
  const [expandedSections, setExpandedSections] = useState({})

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  const singleBarrelSections = [
    {
      id: 1,
      tag: "Completed",
      bourbons: [
        { name: "Baker's", hasWOM: true, image: image2, price: 10, completed: true },
        { name: "Baker's", hasWOM: true, image: image2, price: 12, completed: true },
        { name: "Baker's", hasWOM: true, image: image2, price: 10, completed: true },
        { name: "Baker's", hasWOM: true, image: image2, price: 12, completed: true },
      ],
      moreCount: 2
    },
    {
      id: 2,
      tag: "2 oz pour",
      isTextTag: true,
      bourbons: [
        { name: "Baker's", hasWOM: true, image: image2, price: 10, completed: false },
      ],
      moreCount: 0
    }
  ]

  return (
    <div className="club-list-page">
      {/* Status Bar */}
      <div className="status-bar">
        <span className="status-time">9:41</span>
        <div className="status-icons">
          <span className="status-icon">📶</span>
          <span className="status-icon">🔋</span>
          <span className="status-battery">70</span>
        </div>
      </div>

      {/* Header */}
      <header className="club-list-header">
        <h1 className="page-title">Club List</h1>
      </header>

      <main className="club-list-main">
        {/* Event Cards */}
        <div className="event-cards">
          <div className="event-card whiskey-wednesday-card">
            <img src={whiskey2Icon} alt="Whiskey" className="event-icon" />
            <div className="event-content">
              <h3 className="event-title">Whiskey Wednesday</h3>
              <p className="event-subtitle">Members only</p>
            </div>
            <div className="event-arrow-circle">
              <img src={chevronIcon} alt="Arrow" className="event-arrow-icon" />
            </div>
          </div>
          <div className="event-card halloween-card">
            <img src={halloweenIcon} alt="Halloween" className="event-icon" />
            <div className="event-content">
              <h3 className="event-title">Halloween Party</h3>
              <p className="event-subtitle">Tap here for more info</p>
            </div>
            <img src={buttonIcon} alt="Button" className="event-button-icon" />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          <button className="filter-btn">
            <img src={proofIcon} alt="Proof" className="filter-icon" />
            <span className="filter-text">Proof</span>
            <span className="filter-arrow">▼</span>
          </button>
          <button className="filter-btn">
            <img src={distilleryIcon} alt="Distillery" className="filter-icon" />
            <span className="filter-text">Distillery</span>
            <span className="filter-arrow">▼</span>
          </button>
          <button className="filter-btn">
            <img src={ageIcon} alt="Age" className="filter-icon" />
            <span className="filter-text">Age</span>
            <span className="filter-arrow">▼</span>
          </button>
          <button className="filter-btn">
            <img src={mashBillIcon} alt="Mash bill" className="filter-icon" />
            <span className="filter-text">Mash bill</span>
            <span className="filter-arrow">▼</span>
            <span className="filter-count">0</span>
          </button>
        </div>

        {/* Single Barrel Sections */}
        {singleBarrelSections.map((section) => (
          <div key={section.id} className="single-barrel-section">
            <div className="section-header">
              <h2 className="section-title">SINGLE BARREL</h2>
              {section.tag && (
                section.isTextTag ? (
                  <span className="section-text-tag">{section.tag}</span>
                ) : (
                  <span className="section-tag">{section.tag}</span>
                )
              )}
            </div>
            
            <div className="bourbons-list">
              {(expandedSections[section.id] 
                ? section.bourbons 
                : section.bourbons.slice(0, 2)
              ).map((bourbon, index) => (
                <div key={index} className="bourbon-item">
                  <img 
                    src={bourbon.image} 
                    alt={bourbon.name}
                    className="bourbon-image"
                  />
                  <div className="bourbon-info">
                    <div className="bourbon-name-row">
                      <span className="bourbon-name">{bourbon.name}</span>
                      {bourbon.hasWOM && (
                        <span className="wom-tag">WOM</span>
                      )}
                    </div>
                    <a 
                      href="#" 
                      className="bourbon-profile-link"
                      onClick={(e) => {
                        e.preventDefault()
                        if (bourbon.name === "Blanton's") {
                          navigate("/blantons-description")
                        } else {
                          navigate("/bourbon-description")
                        }
                      }}
                    >
                      Bourbon profile →
                    </a>
                  </div>
                  <div className="bourbon-price">
                    {bourbon.originalPrice && (
                      <span className="original-price">${bourbon.originalPrice}</span>
                    )}
                    <span className="current-price">${bourbon.price}</span>
                  </div>
                </div>
              ))}
            </div>

            {section.bourbons.length > 2 && (
              <div className="section-footer">
                <button 
                  className="view-more-btn"
                  onClick={() => toggleSection(section.id)}
                >
                  View {section.moreCount} more {expandedSections[section.id] ? "✓" : ""}
                </button>
                <button className="view-selection-btn">
                  View Selection
                </button>
              </div>
            )}
          </div>
        ))}
      </main>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button 
          className="nav-button active"
          onClick={() => navigate("/club-home")}
        >
          <img src={homeIcon} alt="Home" className="nav-icon" />
          <span className="nav-label">Home</span>
        </button>
        <button className="nav-button" onClick={() => navigate("/pamphlet")}>
          <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <line x1="9" y1="3" x2="9" y2="21" />
            <line x1="15" y1="3" x2="15" y2="21" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="3" y1="15" x2="21" y2="15" />
          </svg>
          <span className="nav-label">Pamphlet</span>
        </button>
      </nav>

      {/* Home Indicator */}
      <div className="home-indicator">
        <div className="indicator-bar"></div>
      </div>
    </div>
  )
}

export default ClubList
