import React, { useState } from "react";
function FormPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      alert(`File uploaded: ${selectedFile.name}`);
      console.log("Uploading file:", selectedFile);
      // TODO: Send file to backend
    } else {
      alert("Please select a file first.");
    }
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Upload a File</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <br />
        <br />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
export default FormPage;
