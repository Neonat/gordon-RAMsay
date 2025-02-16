import React, { useRef, useEffect } from "react";

function CameraAccess({ onCapture }) {
  const videoRef = useRef(null); // Ref for the video element

  // Access the camera and display the feed
  const getVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480 }, // Or no constraints to let the browser choose
        audio: false,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream; // Set the camera feed as the video source
        await videoRef.current.play(); // Wait for the video to start playing
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Please allow camera access to use this feature."); // User-friendly error message
    }
  };

  // Clean up the video stream when the component unmounts
  useEffect(() => {
    getVideo();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop()); // Stop all tracks in the stream
      }
    };
  }, []); // Run only once on mount and clean up on unmount

  // Capture a photo from the camera feed
  const takePhoto = () => {
    const video = videoRef.current;
    if (video) {
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth || video.width;
      canvas.height = video.videoHeight || video.height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convert the canvas image to a base64 data URL
      const photoDataUrl = canvas.toDataURL("image/png");
      onCapture(photoDataUrl); // Call onCapture with the captured photo
    }
  };

  return (
    <div className="camera-access">
      <video ref={videoRef} width="640" height="480" autoPlay muted />
      <button onClick={takePhoto}>Take Photo</button>
    </div>
  );
}

export default CameraAccess;
