import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const Dropzone = ({ onDrop }) => {
    const dropzoneStyle = 'border-2 border-dashed border-gray-300 rounded p-4 text-center cursor-pointer';
    const activeStyle = 'bg-gray-100';

    const handleDrop = useCallback(
        acceptedFiles => {
            if (onDrop) {
                onDrop(acceptedFiles);
            }
        },
        [onDrop]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: handleDrop,
    });

    return (
        <div {...getRootProps()} className={`${dropzoneStyle} ${isDragActive ? activeStyle : ''}`}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Перетягніть фото сюди...</p>
            ) : (
                <p>Перетягніть або клікніть, щоб вибрати фото</p>
            )}
        </div>
    );
};

export default Dropzone;