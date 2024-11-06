import { connect } from "../../../dbConfig/dbConfig";
import Product_Registerations_page from "../../../models/userModel"
import { NextRequest, NextResponse } from "next/server";
import axios from 'axios'

connect()
// var clerkuserId = ""
// const getUserData = async () => {
//     try {
//         const response = await axios.get("/getuserdata", {
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//         clerkuserId = response.data.userId
//     } catch (error) {
//         console.log(error)
//     }
// }

// getUserData()

// console.log(clerkuserId)

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json(); // Await the promise
        const { name, email, phonenumber, address } = reqBody.user_reg;
        const { clerkID } = reqBody.clerkID
        console.log(name, email, phonenumber, address, clerkID)
        const product_reg = new Product_Registerations_page({
            name, email, phonenumber, address, clerkID
        });
        console.log(product_reg)
        const registered = await product_reg.save();
        console.log(registered);
        return NextResponse.json(registered, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}