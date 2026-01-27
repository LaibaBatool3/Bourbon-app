import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Pamphlet.css"
import image1 from "../assets/1.png"
import image2 from "../assets/2.png"
import homeIcon from "../assets/Home.png"
import halloweenIcon from "../assets/Halloween.png"
import proofIcon from "../assets/proof.png"
import distilleryIcon from "../assets/distillery.png"
import ageIcon from "../assets/age.png"
import mashBillIcon from "../assets/mash-bill.png"
import chevronIcon from "../assets/Combined Shape.png"
import buttonIcon from "../assets/Button.png"

function Pamphlet() {
  const navigate = useNavigate()
  const [expandedSections, setExpandedSections] = useState({})
  const [openDropdown, setOpenDropdown] = useState(null)
  const [selectedDistillery, setSelectedDistillery] = useState("Buffalo Trace")

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
        { name: "Baker's", hasWOM: false, image: image2, price: 12, originalPrice: 15, completed: true },
        { name: "Blanton's", hasWOM: true, image: image1, price: 12, completed: false },
        { name: "Baker's", hasWOM: false, image: image2, price: 12, originalPrice: 15, completed: true },
        { name: "Blanton's", hasWOM: true, image: image1, price: 12, completed: false },
      ],
      moreCount: 2
    },
    {
      id: 2,
      tag: "Completed",
      bourbons: [
        { name: "Baker's", hasWOM: false, image: image2, price: 12, originalPrice: 15, completed: true },
        { name: "Blanton's", hasWOM: true, image: image1, price: 12, completed: false },
        { name: "Baker's", hasWOM: false, image: image2, price: 12, originalPrice: 15, completed: true },
        { name: "Blanton's", hasWOM: true, image: image1, price: 12, completed: false },
      ],
      moreCount: 2
    }
  ]

  return (
    <div className="pamphlet-page">
      {/* Status Bar */}
      <div className="status-bar">
        <span className="status-time">9:41</span>
        <span className="status-date">Mon Jun 9</span>
        <div className="status-icons">
          <span className="status-icon">🔋</span>
        </div>
      </div>

      {/* Header */}
      <header className="pamphlet-header">
        <h1 className="page-title">Pamphlet</h1>
      </header>

      <main className="pamphlet-main">
        {/* Event Cards */}
        <div className="event-cards">
          <div className="event-card halloween-card">
            <img src={halloweenIcon} alt="Halloween" className="event-icon" />
            <div className="event-content">
              <h3 className="event-title">Halloween Party</h3>
              <p className="event-subtitle">Tap here for more info</p>
            </div>
            <img src={buttonIcon} alt="Button" className="event-button-icon" />
          </div>
          <div className="event-card discount-card">
            <div className="event-content">
              <h3 className="event-title">-20% All Whiskey</h3>
              <p className="event-subtitle">Every wednesday</p>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          <div className="filter-btn-wrapper">
            <button 
              className={`filter-btn ${openDropdown === 'proof' ? 'active' : ''}`}
              onClick={() => setOpenDropdown(openDropdown === 'proof' ? null : 'proof')}
            >
              <img src={proofIcon} alt="Proof" className="filter-icon" />
              <span className="filter-text">Proof</span>
              <span className={`filter-arrow ${openDropdown === 'proof' ? 'open' : ''}`}>▼</span>
            </button>
            {openDropdown === 'proof' && (
              <div className="filter-dropdown">
                <button className="dropdown-item">80–89</button>
                <button className="dropdown-item">90–99</button>
                <button className="dropdown-item">100–109</button>
                <button className="dropdown-item">110–119</button>
                <button className="dropdown-item">120+</button>
              </div>
            )}
          </div>
          <div className="filter-btn-wrapper">
            <button 
              className={`filter-btn ${openDropdown === 'distillery' ? 'active' : ''}`}
              onClick={() => setOpenDropdown(openDropdown === 'distillery' ? null : 'distillery')}
            >
              <img src={distilleryIcon} alt="Distillery" className="filter-icon" />
              <span className="filter-text">Distillery</span>
              <span className={`filter-arrow ${openDropdown === 'distillery' ? 'open' : ''}`}>▼</span>
            </button>
            {openDropdown === 'distillery' && (
              <div className="filter-dropdown">
                <button 
                  className={`dropdown-item ${selectedDistillery === 'Buffalo Trace' ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedDistillery('Buffalo Trace')
                    setOpenDropdown(null)
                  }}
                >
                  Buffalo Trace
                  {selectedDistillery === 'Buffalo Trace' && <span className="checkmark">✓</span>}
                </button>
                <button 
                  className={`dropdown-item ${selectedDistillery === 'Rye forward bourbon' ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedDistillery('Rye forward bourbon')
                    setOpenDropdown(null)
                  }}
                >
                  Rye forward bourbon
                  {selectedDistillery === 'Rye forward bourbon' && <span className="checkmark">✓</span>}
                </button>
                <button 
                  className={`dropdown-item ${selectedDistillery === 'Makers Mark' ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedDistillery('Makers Mark')
                    setOpenDropdown(null)
                  }}
                >
                  Makers Mark
                  {selectedDistillery === 'Makers Mark' && <span className="checkmark">✓</span>}
                </button>
              </div>
            )}
          </div>
          <div className="filter-btn-wrapper">
            <button 
              className={`filter-btn ${openDropdown === 'age' ? 'active' : ''}`}
              onClick={() => setOpenDropdown(openDropdown === 'age' ? null : 'age')}
            >
              <img src={ageIcon} alt="Age" className="filter-icon" />
              <span className="filter-text">Age</span>
              <span className={`filter-arrow ${openDropdown === 'age' ? 'open' : ''}`}>▼</span>
            </button>
            {openDropdown === 'age' && (
              <div className="filter-dropdown">
                <button className="dropdown-item">No age</button>
                <button className="dropdown-item">under 4 years</button>
                <button className="dropdown-item">4yrs-6yrs</button>
                <button className="dropdown-item">6yrs-8yrs</button>
                <button className="dropdown-item">8yrs-10ys</button>
                <button className="dropdown-item">10ys-12yrs</button>
                <button className="dropdown-item">12yrs+</button>
              </div>
            )}
          </div>
          <div className="filter-btn-wrapper">
            <button 
              className={`filter-btn ${openDropdown === 'mashbill' ? 'active' : ''}`}
              onClick={() => setOpenDropdown(openDropdown === 'mashbill' ? null : 'mashbill')}
            >
              <img src={mashBillIcon} alt="Mash bill" className="filter-icon" />
              <span className="filter-text">Mash bill</span>
              <span className={`filter-arrow ${openDropdown === 'mashbill' ? 'open' : ''}`}>▼</span>
            </button>
            {openDropdown === 'mashbill' && (
              <div className="filter-dropdown">
                <button className="dropdown-item">Wheated bourbon</button>
                <button className="dropdown-item">Rye forward bourbon</button>
                <button className="dropdown-item">High Rye bourbon</button>
                <button className="dropdown-item">Wheat whiskey</button>
                <button className="dropdown-item">Four grain whiskey</button>
                <button className="dropdown-item">KY- style Rye</button>
                <button className="dropdown-item">PA- style Rye</button>
                <button className="dropdown-item">IN- style Rye</button>
                <button className="dropdown-item">American Single Malt</button>
              </div>
            )}
          </div>
        </div>

        {/* Single Barrel Sections */}
        {singleBarrelSections.map((section) => (
          <div key={section.id} className="single-barrel-section">
            <div className="section-header">
              <h2 className="section-title">SINGLE BARREL</h2>
              {section.tag && (
                <span className="section-tag">{section.tag}</span>
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
                <button className="view-tasting-btn">
                  View tasting
                </button>
              </div>
            )}
          </div>
        ))}
      </main>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button 
          className="nav-button"
          onClick={() => navigate("/club-home")}
        >
          <img src={homeIcon} alt="Home" className="nav-icon" />
          <span className="nav-label">Home</span>
        </button>
        <button className="nav-button active">
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

export default Pamphlet
