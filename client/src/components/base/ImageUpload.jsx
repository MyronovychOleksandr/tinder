import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUpload = ({ onImageUpload }) => {
    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        onImageUpload(file);
    }, [onImageUpload]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        multiple: false,
        onDrop,
    });

    return (
        <div {...getRootProps()} className="border-dashed border-2 p-4 text-center cursor-pointer">
            <input {...getInputProps()} />
            <p>Перетягніть сюди зображення або клікніть, щоб вибрати файл</p>
        </div>
    );
};

export default ImageUpload;