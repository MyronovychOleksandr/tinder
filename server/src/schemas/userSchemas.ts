import mongoose, {Schema, Document} from "mongoose";
import bcrypt from "bcryptjs"

const SALT_FACTOR = 6;

interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string
    token: string | null
    password: string
    age: number
    tags: string[]
    gender: string
    isAgeModified: boolean
    location:{
        type: string
        coordinates: number[]
    }
    images: string[]
    likedUsers: string[];
    validPassword(password: string): Promise<boolean>;
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
            unique: true,
            validate(value: string) {
                const re = /\S+@\S+\.\S+/;
                return re.test(String(value).toLowerCase());
            },
        },
        password: {
            type: String,
            required: [true, "Password is required"],
        },
        token: {
            type: String,
            default: null,
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
            type: [{label: String, value: String}],
            default: [],
        },
        gender: {
            type: String,
            required: [true, "Set gender for user"],
        },
        location: {
            type: {
                type: String,
                enum: ['Point'],
                required: true,
            },
            coordinates: {
                type: [Number],
                required: true,
            },
        },
        likedUsers: [{ type: Schema.Types.ObjectId, ref: 'user' }],
        images: [{ type: String }],
    },
    {versionKey: false, timestamps: true}
);

userSchema.index({ 'location.coordinates': '2dsphere' });

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(
        this.password,
        bcrypt.genSaltSync(SALT_FACTOR)
    );
    next();
});

userSchema.methods.validPassword = async function (password: string) {
    return await bcrypt.compare(password, this.password);
};

const UserModel = mongoose.model('user', userSchema);

export default UserModel;
