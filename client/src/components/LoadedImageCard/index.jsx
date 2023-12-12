import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

const styleContainer = {
    width: "145px",
    height: "200px",
    marginRight: "10px"
}

const styleImage = {
    width: "100%",
    height: "100%"
}

const LoadedImageCard = ({url, name, index, onDeleteImage}) => {

    const handleIconClick = () => {
        onDeleteImage(index, name)
    }

    return (
        <div style={styleContainer} className={"relative"}>
            <img src={url} alt={""} style={styleImage}/>
            <div className={"absolute top-0 right-0 cursor-pointer bg-gray-200"} onClick={handleIconClick}>
                <CloseIcon/>
            </div>
        </div>
    );
};

export default LoadedImageCard;