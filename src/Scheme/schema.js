import mongoose from 'mongoose'

const Connect = new mongoose.Schema({

    email: {
        type: String,
        trim: true,
        required: [true, "Email is Required"],
        unique: [true, "phone number is required"],
    },
    name: {
        type:String ,
        minLength:[2,"name must be length of two"],
        maxLength:[50,"name must be less than 50 character"],
        lowerCase:[true],
        required:[true,'must fill the Name']

    },
    message: {
        type:String,
        maxLength:[100,'the message length is limited to 100 character'],

    }
}, {
    timeStamps: true,
})


const info  = mongoose.model("User",Connect) //collection


export default info;