import * as yup from "yup";
import {EMAIL, PASSWORD} from "../createAccount/user";


export const loginValidationSchema = yup.object().shape({
    email: EMAIL.required('Email is required'),
    password: PASSWORD.required(),
})


export const loginInitialValues = {
    email: "",
    password: "",
}