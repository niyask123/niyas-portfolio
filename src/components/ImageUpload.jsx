// ImageUpload.jsx
import React, { useState } from 'react';

const ImageUpload = () => {
  const [images, setImages] = useState([]);

  // Handle image selection
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setImages(prevImages => [...prevImages, ...imageUrls]);
  };

  return (
    <div>
      <input type="file" accept="image/*" multiple onChange={handleImageChange} />
      {images.length > 0 && (
        <div>
          <h3>Uploaded Images:</h3>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Uploaded ${index}`} style={{ width: '300px', height: 'auto', margin: '10px' }} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
