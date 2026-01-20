import "./AlmostThereModal.css"
import userCheckIcon from "../assets/tabler_user-check (1).png"
import { useState } from "react"

function AlmostThereModal({ isOpen, onClose }) {
  const [doNotShowAgain, setDoNotShowAgain] = useState(false)

  if (!isOpen) return null

  const handleClose = () => {
    if (doNotShowAgain) {
      localStorage.setItem("dontShowAlmostThere", "true")
    }
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-button" onClick={handleClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Title */}
        <h2 className="modal-title">Almost There!</h2>

        {/* Icon */}
        <div className="modal-icon-container">
          <img src={userCheckIcon} alt="User check" className="modal-icon" />
        </div>

        {/* Status Message */}
        <p className="modal-message">Awaiting staff approval</p>

        {/* Do Not Show Again Checkbox */}
        <div className="modal-checkbox-container">
          <label className="modal-checkbox-label">
            <span>Do not show again</span>
            <input
              type="checkbox"
              checked={doNotShowAgain}
              onChange={(e) => setDoNotShowAgain(e.target.checked)}
              className="modal-checkbox"
            />
          </label>
        </div>

        {/* Close Button */}
        <button className="modal-close-btn" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  )
}

export default AlmostThereModal
