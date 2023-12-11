import * as yup from 'yup';
import {FIRST_NAME_MAX_LENGTH, FIRST_NAME_MIN_LENGTH, MIN_AGE} from "../../constants/createAccount";
import {any} from "prop-types";

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

export const COORDINATES =yup
    .array()
    .of(yup.number().required())
    .required()
    .min(2)
    .max(2)

// export const IMAGES = yup.array()
//     .of(
//         yup.object().shape({
//             file: yup.mixed()
//                 .required('Please upload an image')
//                 .test('fileSize', 'File size is too large', (value) => {
//                     if (!value) return true; // If no file is provided, skip the test
//                     return value.size <= 1024 * 1024 * 2; // 2 MB limit
//                 })
//                 .test('fileType', 'Unsupported file type', (value) => {
//                     if (!value) return true; // If no file is provided, skip the test
//                     return ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'].includes(value.type);
//                 }),
//         })
//     )

export const IMAGES = yup.array()