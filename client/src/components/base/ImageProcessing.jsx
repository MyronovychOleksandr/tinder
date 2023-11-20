import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import ImageCrop from './ImageCrop';

const ImageProcessing = () => {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    console.log('vv uploadedImage ', uploadedImage)
    const handleImageUpload = (file) => {
        console.log('vv file ', file)
        setUploadedImage(URL.createObjectURL(file));
    };

    const handleCropComplete = (crop) => {
        // Тут ви можете використовувати бібліотеки для обробки обрізаного зображення
        console.log('vv Crop Details:', crop);
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