import React, {useState, useRef} from 'react';
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
        return new Promise((resolve, reject) => {
            if (!imgRef.current || !crop.width || !crop.height) {
                reject("Invalid crop parameters");
                return;
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

            canvas.toBlob(
                (blob) => {
                    const fileName = `cropped_image_${Date.now()}.jpg`;
                    const croppedFile = new File([blob], fileName, { type: 'image/jpeg' });
                    resolve(croppedFile);
                },
                'image/jpeg',
                1
            );
        });
    };
    const onCropCompleted = async () => {
        try {
            const croppedImage = await getCroppedImg();
            onCropComplete(croppedImage);
        } catch (error) {
            console.error("Error cropping image:", error);
        }
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
