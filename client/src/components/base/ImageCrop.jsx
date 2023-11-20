import React, {useState, useRef, useEffect} from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const ImageCrop = ({ src, onCropComplete }) => {
    const [crop, setCrop] = useState({ unit: 'px', height: 400, width: 300, aspect: 3 / 4, locked: true });
    const imgRef = useRef(null);

    const onImageLoaded = (image) => {
        imgRef.current = image;
    };

    const onCropChange = (newCrop) => {
        setCrop(newCrop);
    };

    const getCroppedImg = () => {
        if (!imgRef.current || !crop.width || !crop.height) {
            return null;
        }

        const scaleX = imgRef.current.naturalWidth / imgRef.current.width;
        const scaleY = imgRef.current.naturalHeight / imgRef.current.height;

        const croppedWidth = crop.width * scaleX;
        const croppedHeight = crop.height * scaleY;

        const canvas = document.createElement('canvas');
        canvas.width = croppedWidth;
        canvas.height = croppedHeight;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(
            imgRef.current,
            crop.x * scaleX,
            crop.y * scaleY,
            croppedWidth,
            croppedHeight,
            0,
            0,
            croppedWidth,
            croppedHeight
        );

        const base64Image = canvas.toDataURL('image/jpeg');
        return base64Image;
    };

    const onCropCompleted = () => {
        const croppedImage = getCroppedImg();
        onCropComplete(croppedImage);
    };

    return (
        <div className="mt-4">
            <ReactCrop
                src={src}
                aspect={2/3}
                crop={crop}
                onChange={onCropChange}
                onImageLoaded={onImageLoaded}
                onComplete={onCropCompleted}
                keepSelection
                style={{ maxWidth: '100%' }}
            >
                <img src={src} ref={imgRef} style={{height: 400, width: "auto"}}/>
            </ReactCrop>
        </div>
    );
};

export default ImageCrop;
