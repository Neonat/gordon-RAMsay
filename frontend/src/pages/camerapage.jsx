import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import CameraApp from "../components/CameraApp/CameraApp";

function CameraPage() {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div>
      <button onClick={() => navigate(-1)} style={{ margin: "10px", padding: "8px 12px", cursor: "pointer" }}>
        ⬅ Back
      </button>
      <CameraApp />
    </div>
  );
}

export default CameraPage;