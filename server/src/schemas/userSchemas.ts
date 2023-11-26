import mongoose from "mongoose";
const { Schema } = mongoose;

const contactSchema = new Schema(
    {
        firstName: {
            type: String,
            required: [true, "Set first name for user"],
        },
        lastName: {
            type: String,
            required: [true, "Set last name for user"],
        },
        // tags: {
        //     type: [{ type: String }],
        //     default: [],
        // },
        // owner: {
        //     type: mongoose.SchemaTypes.ObjectId,
        //     ref: "user",
        // },
    },
    { versionKey: false, timestamps: true }
);

const User = mongoose.model("user", contactSchema);

module.exports = User;