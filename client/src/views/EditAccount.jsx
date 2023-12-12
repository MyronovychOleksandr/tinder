import {editUser, getMe} from "../services/users";
import {editAccountInitialValues} from "../validators/createAccount/userForm";
import React, {useEffect, useState} from "react";
import {toast} from 'react-toastify';
import EditAccountForm from "../components/EditAccountForm";
import {getImageFileFromUrl} from "../utils/getImageFileFromUrl";
import {deleteImage} from "../services/imagesService";

const EditAccount = () => {
    const [initialValues, setInitialValues] = useState(editAccountInitialValues)
    const [imagesNames, setImagesNames] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await getMe();

                const {user} = data;

                const {firstName, lastName, email, age, gender, tags, images} = user;

                const imageFiles = await getImageFileFromUrl(images);
                setInitialValues({
                    firstName,
                    lastName,
                    email,
                    age,
                    gender,
                    tags,
                    images: imageFiles
                });

                const imagesNames = imageFiles.map((item) => {
                    return item.name
                })
                setImagesNames(imagesNames)
            } catch (error) {
                toast.error(error.message);
            }
        };

        fetchData();
    }, []);

    const handleSubmit = (data) => {
        editUser(data)
            .then((res) => {
                handleDeleteImages()
            })
            .catch((e) => toast.error(e.message))
    }

    const handleDeleteImages = async () => {
        if (imagesNames.length === 0) {
            toast.info('No images selected for deletion.');
            return;
        }

        try {
            const deletePromises = imagesNames.map(async (fileName) => {
                await deleteImage(fileName);
                return fileName;
            });

            await Promise.all(deletePromises);

            setImagesNames([]);

        } catch (error) {
        }
    }

    return (
        <div>
            <EditAccountForm
                onSubmit={handleSubmit}
                initialValues={initialValues}
            />
        </div>
    );
};

export default EditAccount;