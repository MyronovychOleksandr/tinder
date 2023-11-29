import * as yup from 'yup';
import {FIRST_NAME_MAX_LENGTH, FIRST_NAME_MIN_LENGTH, MIN_AGE} from "../../constants/createAccount";

export const FIRST_NAME = yup.string()
    .min(FIRST_NAME_MIN_LENGTH)
    .max(FIRST_NAME_MAX_LENGTH)

export const LAST_NAME = yup.string()
    .min(FIRST_NAME_MIN_LENGTH)
    .max(FIRST_NAME_MAX_LENGTH)

export const EMAIL = yup.string().email('Wrong format of email')

export const PASSWORD = yup.string()

export const AGE = yup.number()
    .min(MIN_AGE)

export const GENDER = yup.string()

const tagSchema = yup.object({
    label: yup.string().required("Label is required"),
    value: yup.string().required("Value is required"),
});

export const TAG =  yup.array().of(tagSchema);