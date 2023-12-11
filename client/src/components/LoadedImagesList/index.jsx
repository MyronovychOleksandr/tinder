import React from 'react';
import LoadedImageCard from "../LoadedImageCard";

const LoadedImagesList = ({images, onDeleteImage}) => {
    return (
        <div className={"flex align-center"}>
            {images.map((file, index) => {
                return <LoadedImageCard
                    url={URL.createObjectURL(file)}
                    index={index}
                    onDeleteImage={onDeleteImage}
                />
            })}
        </div>
    );
};

export default LoadedImagesList;