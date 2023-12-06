import React, {useState} from 'react';
import CreateAccountForm from "../components/CreateAccountForm";
import {createUser} from "../services/users";
import {createAccountInitialValues} from "../validators/createAccount/userForm";
import {toast} from "react-toastify";
import ImageProcessing from "../components/base/ImageProcessing";

const CreateAccount = () => {
    const [images, setImages] = useState([])
    console.log("vv images ", images)

    const handleSubmit = (data) => {
        const dataObject = {...data, images: images}
        console.log("vv dataObject ", dataObject)
        createUser(dataObject)
            .then((res) => {
            })
            .catch((e) => toast.error(e.message))
    }

    const handleGetImages = (file) => {
        const newImages = [...images, file]
        setImages(newImages)
    }

    const handleFileChange = (event) => {
        const selectedFiles = event.target.files;

        // Перетворюємо FileList в масив і додаємо його до поточного масиву зображень
        const newImages = [...images, ...Array.from(selectedFiles)];
        setImages(newImages);
    };

    return (
        <div>
            {/*<ImageProcessing*/}
            {/*    onGetImages={handleGetImages}*/}
            {/*/>*/}
            <input type="file" name="images" accept="image/*" multiple onChange={handleFileChange}/>
            <CreateAccountForm
                onSubmit={handleSubmit}
                initialValues={createAccountInitialValues}
            />
        </div>
    );
};

export default CreateAccount;