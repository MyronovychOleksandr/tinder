import * as yup from 'yup';
import {FIRST_NAME_MAX_LENGTH, FIRST_NAME_MIN_LENGTH, MIN_AGE} from "../../constants/createAccount";

export const FIRST_NAME = yup.string()
    .min(FIRST_NAME_MIN_LENGTH)
    .max(FIRST_NAME_MAX_LENGTH)

export const SECOND_NAME = yup.string()
    .min(FIRST_NAME_MIN_LENGTH)
    .max(FIRST_NAME_MAX_LENGTH)

export const AGE = yup.number()
    .min(MIN_AGE)

export const GENDER = yup.string()

export const TAG = yup.array().of(yup.string()).min(1)