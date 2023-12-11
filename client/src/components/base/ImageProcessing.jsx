import React, {useEffect, useState} from 'react';
import ImageUpload from './ImageUpload';
import ImageCrop from './ImageCrop';
import Modal from '@mui/material/Modal';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import Button from "@mui/material/Button";
import {useField} from "formik";
import LoadedImagesList from "../LoadedImagesList";
import {toast} from "react-toastify";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


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
        if(value.length === 3) return toast.error("Please select up to 3 images.")
        const values = [...value, croppedImage]
        setValue(values)
        setCroppedImage(null)
        setUploadedImage(null)
        handleClose()
    }

    const handleDeleteImage = (index) => {
        const values = [...value]
        values.splice(index, 1);
        setValue(values)
    }

    return (
        <div>
            <h1>Завантаження та обрізка зображення</h1>
            <ImageUpload onImageUpload={handleImageUpload}/>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box id="modal-modal-title" className={"flex justify-between align-center cursor-pointer"}>
                        <Typography variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <CloseIcon onClick={handleClose}/>
                    </Box>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        <ImageCrop src={uploadedImage} onCropComplete={handleCropComplete}/>
                    </Typography>
                    <Box className={"text-right pt-4"}>
                        <Button variant="contained" onClick={handleApplyImage}>Apply image</Button>
                    </Box>
                </Box>
            </Modal>

            <LoadedImagesList
                images={value}
                onDeleteImage={handleDeleteImage}
            />
        </div>
    );
};

export default ImageProcessing;