import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./ClubList.css"
import image1 from "../assets/1.png"
import image2 from "../assets/2.png"
import homeIcon from "../assets/Home.png"
import clubListIcon from "../assets/Club-list.png"
import pamphletIcon from "../assets/Icons.png"
import halloweenIcon from "../assets/Halloween.png"
import proofIcon from "../assets/proof.png"
import distilleryIcon from "../assets/distillery.png"
import ageIcon from "../assets/age.png"
import mashBillIcon from "../assets/mash-bill.png"
import chevronIcon from "../assets/Combined Shape.png"
import buttonIcon from "../assets/Button.png"
import whiskey2Icon from "../assets/whiskey2.png"
// Using public folder path for file with special characters
const discountIcon = "/-20%.png"

function Pamphlet() {
  const navigate = useNavigate()
  const [expandedSections, setExpandedSections] = useState({})
  const [openDropdown, setOpenDropdown] = useState(null)
  const [selectedDistillery, setSelectedDistillery] = useState("Buffalo Trace")
  const [selectedAge, setSelectedAge] = useState(null)
  const [selectedProof, setSelectedProof] = useState(null)
  const [selectedMashbill, setSelectedMashbill] = useState(null)

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  const handleDropdownItemClick = (filterType, value) => {
    if (filterType === 'distillery') {
      setSelectedDistillery(value)
    } else if (filterType === 'age') {
      setSelectedAge(value)
    } else if (filterType === 'proof') {
      setSelectedProof(value)
    } else if (filterType === 'mashbill') {
      setSelectedMashbill(value)
    }
    setOpenDropdown(null)
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
        <h1 className="page-title">Pamphlet</h1>
      </header>

      <main className="club-list-main">
        {/* Event Cards */}
        <div className="event-cards">
          <div className="event-card whiskey-wednesday-card">
            <span className="discount-text">-20%</span>
            <div className="event-content">
              <h3 className="event-title">Whiskey Wednesday</h3>
              <p className="event-subtitle">Members only</p>
            </div>
            <img src={buttonIcon} alt="Button" className="event-button-icon" />
          </div>
          <div className="event-card halloween-card">
            <img src={halloweenIcon} alt="Halloween" className="event-icon" />
            <div className="event-content">
              <h3 className="event-title">Halloween Party</h3>
              <p className="event-subtitle">Tap here for more info</p>
            </div>
            <img src={buttonIcon} alt="Button" className="event-button-icon" />
          </div>
          <div className="event-card all-whiskey-card">
            <span className="discount-text">-20%</span>
            <div className="event-content">
              <h3 className="event-title">All Whiskey</h3>
              <p className="event-subtitle">Every Wednesday</p>
            </div>
            <img src={buttonIcon} alt="Button" className="event-button-icon" />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons">
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
                <button className="dropdown-item" onClick={() => handleDropdownItemClick('mashbill', 'Wheated bourbon')}>Wheated bourbon</button>
                <button className="dropdown-item" onClick={() => handleDropdownItemClick('mashbill', 'Rye forward bourbon')}>Rye forward bourbon</button>
                <button className="dropdown-item" onClick={() => handleDropdownItemClick('mashbill', 'High Rye bourbon')}>High Rye bourbon</button>
                <button className="dropdown-item" onClick={() => handleDropdownItemClick('mashbill', 'Wheat whiskey')}>Wheat whiskey</button>
                <button className="dropdown-item" onClick={() => handleDropdownItemClick('mashbill', 'Four grain whiskey')}>Four grain whiskey</button>
                <button className="dropdown-item" onClick={() => handleDropdownItemClick('mashbill', 'KY- style Rye')}>KY- style Rye</button>
                <button className="dropdown-item" onClick={() => handleDropdownItemClick('mashbill', 'PA- style Rye')}>PA- style Rye</button>
                <button className="dropdown-item" onClick={() => handleDropdownItemClick('mashbill', 'IN- style Rye')}>IN- style Rye</button>
                <button className="dropdown-item" onClick={() => handleDropdownItemClick('mashbill', 'American Single Malt')}>American Single Malt</button>
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
                  onClick={() => handleDropdownItemClick('distillery', 'Buffalo Trace')}
                >
                  Buffalo Trace
                  {selectedDistillery === 'Buffalo Trace' && <span className="checkmark">✓</span>}
                </button>
                <button 
                  className={`dropdown-item ${selectedDistillery === 'Rye forward bourbon' ? 'selected' : ''}`}
                  onClick={() => handleDropdownItemClick('distillery', 'Rye forward bourbon')}
                >
                  Rye forward bourbon
                  {selectedDistillery === 'Rye forward bourbon' && <span className="checkmark">✓</span>}
                </button>
                <button 
                  className={`dropdown-item ${selectedDistillery === 'Makers Mark' ? 'selected' : ''}`}
                  onClick={() => handleDropdownItemClick('distillery', 'Makers Mark')}
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
                <button className="dropdown-item" onClick={() => handleDropdownItemClick('age', 'No age')}>No age</button>
                <button className="dropdown-item" onClick={() => handleDropdownItemClick('age', 'under 4 years')}>under 4 years</button>
                <button className="dropdown-item" onClick={() => handleDropdownItemClick('age', '4yrs-6yrs')}>4yrs-6yrs</button>
                <button className="dropdown-item" onClick={() => handleDropdownItemClick('age', '6yrs-8yrs')}>6yrs-8yrs</button>
                <button className="dropdown-item" onClick={() => handleDropdownItemClick('age', '8yrs-10ys')}>8yrs-10ys</button>
                <button className="dropdown-item" onClick={() => handleDropdownItemClick('age', '10ys-12yrs')}>10ys-12yrs</button>
                <button className="dropdown-item" onClick={() => handleDropdownItemClick('age', '12yrs+')}>12yrs+</button>
              </div>
            )}
          </div>
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
                <button className="dropdown-item" onClick={() => handleDropdownItemClick('proof', '80–89')}>80–89</button>
                <button className="dropdown-item" onClick={() => handleDropdownItemClick('proof', '90–99')}>90–99</button>
                <button className="dropdown-item" onClick={() => handleDropdownItemClick('proof', '100–109')}>100–109</button>
                <button className="dropdown-item" onClick={() => handleDropdownItemClick('proof', '110–119')}>110–119</button>
                <button className="dropdown-item" onClick={() => handleDropdownItemClick('proof', '120+')}>120+</button>
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
          className="nav-button"
          onClick={() => navigate("/club-home")}
        >
          <img src={homeIcon} alt="Home" className="nav-icon" />
          <span className="nav-label">Home</span>
        </button>
        <button className="nav-button active">
          <img src={pamphletIcon} alt="Pamphlet" className="nav-icon" />
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
