import React, {useEffect, useState} from 'react';
import ImageUpload from './ImageUpload';
import {useField} from "formik";
import LoadedImagesList from "../LoadedImagesList";
import {toast} from "react-toastify";
import CropModal from "../CropModal";

const ImageProcessing = () => {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [{value}, {}, {setValue}] = useField({name: "images"})

    const handleImageUpload = (file) => {
        setUploadedImage(URL.createObjectURL(file));
    };

    const handleCropComplete = (crop) => {
        setCroppedImage(crop)
    };

    useEffect(() => {
        if (uploadedImage) handleOpen()
    }, [uploadedImage])

    const handleApplyImage = () => {
        if (value.length === 3) return toast.error("Please select up to 3 images.")
        const values = [...value, croppedImage]
        setValue(values)
        setCroppedImage(null)
        setUploadedImage(null)
        handleClose()
    }

    const handleDeleteImage = (index, fileName) => {
        const values = [...value]
        values.splice(index, 1);
        setValue(values)
    }

    return (
        <div>
            <h1>Upload and crop image</h1>
            <ImageUpload onImageUpload={handleImageUpload}/>
            <CropModal
                open={open}
                uploadedImage={uploadedImage}
                onApplyImage={handleApplyImage}
                onClose={handleClose}
                onCropComplete={handleCropComplete}
            />

            <LoadedImagesList
                images={value}
                onDeleteImage={handleDeleteImage}
            />
        </div>
    );
};

export default ImageProcessing;