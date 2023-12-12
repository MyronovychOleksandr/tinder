import * as yup from "yup";
import {AGE, FIRST_NAME, LAST_NAME, GENDER, TAG, EMAIL, PASSWORD, COORDINATES, IMAGES} from "./user";

export const createAccountValidationSchema = yup.object().shape({
    firstName: FIRST_NAME.required(),
    lastName: LAST_NAME.required(),
    email: EMAIL.required('Email is required'),
    password: PASSWORD.required(),
    age: AGE.required(),
    gender: GENDER.required(),
    tags: TAG,
    coordinates: COORDINATES.required(),
    images: IMAGES
})

export const createAccountInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: 0,
    gender: "",
    tags: [],
    coordinates: [],
    images: []
}

export const editAccountValidationSchema = yup.object().shape({
    firstName: FIRST_NAME.required(),
    lastName: LAST_NAME.required(),
    email: EMAIL.required('Email is required'),
    age: AGE.required(),
    gender: GENDER.required(),
    tags: TAG,
    images: IMAGES
})

export const editAccountInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
    gender: "",
    tags: [],
    images: []
}