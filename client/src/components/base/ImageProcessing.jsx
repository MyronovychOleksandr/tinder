import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import ImageCrop from './ImageCrop';

const ImageProcessing = ({onGetImages}) => {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);

    const handleImageUpload = (file) => {
        setUploadedImage(URL.createObjectURL(file));
    };

    const handleCropComplete = (crop) => {
        setCroppedImage(crop)
        onGetImages(crop)
    };

    return (
        <div>
            <h1>Завантаження та обрізка зображення</h1>
            <ImageUpload onImageUpload={handleImageUpload} />
            {uploadedImage && (
                <ImageCrop src={uploadedImage} onCropComplete={handleCropComplete} />
            )}
        </div>
    );
};

export default ImageProcessing;