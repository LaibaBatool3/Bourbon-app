'use client'
import "./Verification.css"
import shieldIcon from "../assets/hugeicons_security.png"
import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"

function Verification() {
  const navigate = useNavigate()
  const [otp, setOtp] = useState(["", "", "", ""])
  const inputRefs = useRef([])

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value.slice(-1)
    setOtp(newOtp)
    
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text").slice(0, 4)
    if (!/^\d+$/.test(pastedData)) return

    const newOtp = [...otp]
    pastedData.split("").forEach((char, index) => {
      if (index < 4) newOtp[index] = char
    })
    setOtp(newOtp)
    inputRefs.current[Math.min(pastedData.length, 3)]?.focus()
  }

  const handleSubmit = () => {
    const code = otp.join("")
    if (code.length === 4) {
      navigate("/welcome")
    }
  }

  const handleSendAgain = () => {
    console.log("Resending verification code...")
    setOtp(["", "", "", ""])
    inputRefs.current[0]?.focus()
  }

  return (
    <div className="verification-page">
      {/* Header */}
      <header className="header-bar">
        <button 
          className="back-button"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <svg className="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <h1 className="header-title">Verification</h1>
        <div className="header-spacer"></div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Shield Icon */}
        <div className="shield-container">
          <div className="shield-icon-wrapper">
            <img src={shieldIcon} alt="Security shield" className="shield-icon" />
          </div>
        </div>

        {/* Title and Subtitle */}
        <h2 className="main-title">
          Verification Code Sent!
        </h2>

        <p className="subtitle">
          We have sent the verification code to your mobile number
        </p>

        {/* OTP Input */}
        <div className="otp-container" onPaste={handlePaste}>
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="otp-input"
              aria-label={`Digit ${index + 1}`}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Buttons */}
        <div className="buttons-container">
          <button
            type="button"
            onClick={handleSendAgain}
            className="send-again-button"
          >
            Send Again
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={otp.some((digit) => !digit)}
            className="submit-button"
          >
            Submit
          </button>
        </div>
      </main>

      {/* Home Indicator */}
      <div className="home-indicator">
        <div className="indicator-bar"></div>
      </div>
    </div>
  )
}

export default Verification
