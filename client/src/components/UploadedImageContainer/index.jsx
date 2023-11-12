import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';

const UploadedImageContainer = ({img, alt}) => {
    return (
        <div className={"relative w-32 h-32"}>
            <img
                src={img}
                alt={alt}
                className="w-32 h-32"
            />
            <div className={"absolute top-1 right-1 cursor-pointer"}>
                <CancelIcon color={"white"}/>
            </div>
        </div>
    );
};

export default UploadedImageContainer;