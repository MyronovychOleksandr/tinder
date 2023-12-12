import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import ImageCrop from "../base/ImageCrop";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

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

const CropModal = ({
                       open,
                       uploadedImage,
                       onApplyImage,
                       onClose,
                       onCropComplete,

                   }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box id="modal-modal-title" className={"flex justify-between align-center cursor-pointer"}>
                    <Typography variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <CloseIcon onClick={onClose}/>
                </Box>
                <Typography id="modal-modal-description" sx={{mt: 2}}>
                    <ImageCrop src={uploadedImage} onCropComplete={onCropComplete}/>
                </Typography>
                <Box className={"text-right pt-4"}>
                    <Button variant="contained" onClick={onApplyImage}>Apply image</Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default CropModal;