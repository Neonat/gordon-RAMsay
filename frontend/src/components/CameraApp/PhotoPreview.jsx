// src/components/PhotoPreview.jsx
import React, { useState } from "react";

function PhotoPreview({ photo, onClose }) {
  const [isSending, setIsSending] = useState(false); // State to track if the photo is being sent

  // Handle sending the photo to the backend
  const sendPhotoToBackend = async () => {
    if (photo) {
      setIsSending(true); // Set loading state
      try {
        // Example: Send the photo to a backend API
        const response = await fetch("/api/upload-photo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ photo }), // Send the base64 photo
        });

        if (response.ok) {
          alert("Photo successfully sent to the backend!");
        } else {
          alert("Failed to send photo to the backend.");
        }
      } catch (error) {
        console.error("Error sending photo to backend:", error);
        alert("An error occurred while sending the photo.");
      } finally {
        setIsSending(false); // Reset loading state
      }
    } else {
      alert("No photo captured!");
    }
  };

  return (
    <div className="photo-preview">
      <img src={photo} alt="Captured preview" />
      <button onClick={onClose}>Close</button>
      <button onClick={sendPhotoToBackend} disabled={isSending}>
        {isSending ? "Sending..." : "Send to Backend"}
      </button>
    </div>
  );
}

export default PhotoPreview;
