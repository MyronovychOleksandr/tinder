import React from 'react';
import LoadedImageCard from "../LoadedImageCard";

const LoadedImagesList = ({images, onDeleteImage}) => {

    return (
        <div className={"flex align-center"}>
            {images.map((item, index) => {
                return <LoadedImageCard
                    url={URL.createObjectURL(item)}
                    name={item?.name}
                    index={index}
                    onDeleteImage={onDeleteImage}
                />
            })}
        </div>
    );
};

export default LoadedImagesList;