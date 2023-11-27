import mongoose, {Schema, Document} from "mongoose";

interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string
    age: number
    tags: string[]
    gender: string
    isAgeModified: boolean
}

const userSchema: Schema<IUser> = new Schema(
    {
        firstName: {
            type: String,
            required: [true, "Set first name for user"],
        },
        lastName: {
            type: String,
            required: [true, "Set last name for user"],
        },
        email: {
            type: String,
            required: [true, "Set email for user"],
        },
        age: {
            type: Number,
            required: [true, "Set age for user"],
        },
        isAgeModified: {
            type: Boolean,
            default: false,
        },
        tags: {
            type: [{ label: String, value: String }],
            default: [],
        },
        gender: {
            type: String,
            required: [true, "Set gender for user"],
        }
    },
    {versionKey: false, timestamps: true}
);
const UserModel = mongoose.model('user', userSchema);

export default UserModel;
