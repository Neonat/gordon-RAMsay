// src/components/CameraApp.jsx
import React, { useState } from "react";
import CameraAccess from "./CameraAccess";
import PhotoPreview from "./PhotoPreview";
import "./camaccess.css";

function CameraApp() {
  const [capturedPhoto, setCapturedPhoto] = useState(null); // State to hold the captured photo (base64)

  // Handle photo capture
  const handleCapture = (photoDataUrl) => {
    setCapturedPhoto(photoDataUrl); // Store the captured photo in state
  };

  // Close the photo (clear the captured image)
  const closePhoto = () => {
    setCapturedPhoto(null); // Clear the captured photo
  };

  return (
    <div className="camera-app">
      {!capturedPhoto ? (
        <CameraAccess onCapture={handleCapture} />
      ) : (
        <PhotoPreview photo={capturedPhoto} onClose={closePhoto} />
      )}
    </div>
  );
}

export default CameraApp;
