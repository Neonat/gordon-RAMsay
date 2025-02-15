import React, { useState } from 'react';

function UploadComponent() {
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Get the first file selected
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImageSrc(reader.result); // Set the image data URL as the source
      };

      reader.readAsDataURL(file); // Read the file as a data URL (base64)
    }
  };

  return (
    <div>
      <h3>Upload an Image</h3>
      <input type="file" accept="image/*" onChange={handleImageUpload} />

      {/* Display the uploaded image as a preview */}
      {imageSrc && (
        <img src={imageSrc} alt="Uploaded preview" style={styles.previewImage} />
      )}
    </div>
  );
}

// Styles for the image preview
const styles = {
  previewImage: {
    marginTop: '20px',
    maxWidth: '100%',
    maxHeight: '400px',
    borderRadius: '8px',
  },
};

export default UploadComponent;