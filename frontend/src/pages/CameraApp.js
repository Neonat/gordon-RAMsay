import React, { useRef, useEffect, useState } from "react";
import "./CameraApp.css";

function CameraApp() {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);

  const getVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480 }, // Or no constraints to let the browser choose
        audio: false,
      });
      let video = videoRef.current;
      video.srcObject = stream;
      video.play();
    } catch (err) {
      console.error("Error accessing camera:", err);
      // Display a user-friendly message in the UI
      alert("Please allow camera access to use this feature.");
    }
  };

  useEffect(() => {
    getVideo();
  }, []); // Run only once on mount

  const takePhoto = () => {
    const video = videoRef.current;
    const photo = photoRef.current;

    if (video && photo) {
      const width = video.videoWidth || video.width; // Use videoWidth or video.width
      const height = video.videoHeight || video.height;

      photo.width = width;
      photo.height = height;

      const ctx = photo.getContext("2d");
      ctx.drawImage(video, 0, 0, width, height);
      setHasPhoto(true);
    }
  };

  const closePhoto = () => {
    setHasPhoto(false);
  };

  return (
    <div className="App">
      <div className="Camera">
        <video ref={videoRef} width="640" height="480" autoPlay muted />
        <button onClick={takePhoto}>Take Photo</button>
      </div>
      <div className={"result" + (hasPhoto ? " hasPhoto" : "")}>
        <canvas ref={photoRef} width="640" height="480" />
        {hasPhoto && <button onClick={closePhoto}>CLOSE!</button>}
      </div>
    </div>
  );
}

export default CameraApp;