import React, {useState} from 'react';
import Dropzone from "../base/Dropzone";
import UploadedImageContainer from "../UploadedImageContainer";

const ImageUploader = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleDrop = (acceptedFiles) => {
        setUploadedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    };

    return (
        <div className={"mb-4"}>
            <Dropzone onDrop={handleDrop}/>
            <div>
                <h4>Завантажені фотографії:</h4>
                <div className="flex flex-wrap">
                    {uploadedFiles.map((file, index) => (
                        <UploadedImageContainer
                            img={URL.createObjectURL(file)}
                            alt={file.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageUploader;