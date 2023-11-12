import * as yup from "yup";
import {AGE, FIRST_NAME, SECOND_NAME, GENDER, TAG} from "./user";

export const createAccountValidationSchema = yup.object().shape({
    firstName: FIRST_NAME.required(),
    secondName: SECOND_NAME.required(),
    age: AGE.required(),
    gender: GENDER.required(),
    tag: TAG.required('Tag is required')
})

export const createAccountInitialValues = {
    firstName: "",
    secondName: "",
    age: 0,
    gender: "",
    tag: []
}