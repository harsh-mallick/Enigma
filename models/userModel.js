import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phonenumber: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    clerkID: {
        type: String,
        required: true
    }
})

const Product_Registerations_page = mongoose.models.Product_Registerations_page || mongoose.model("Product_Registerations_page", productSchema)
export default Product_Registerations_page