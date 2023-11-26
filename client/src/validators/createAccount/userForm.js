import * as yup from "yup";
import {AGE, FIRST_NAME, LAST_NAME, GENDER, TAG, EMAIL} from "./user";

export const createAccountValidationSchema = yup.object().shape({
    firstName: FIRST_NAME.required(),
    lastName: LAST_NAME.required(),
    email: EMAIL.required('Email is required'),
    age: AGE.required(),
    gender: GENDER.required(),
    tags: TAG
})

export const createAccountInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
    gender: "",
    tags: []
}