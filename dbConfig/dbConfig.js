import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect("mongodb+srv://admin:admin%40enigma%23123@cluster0.sajmo.mongodb.net/")
        const connection = mongoose.connection
        connection.on('connected', () => {
            console.log("Connected to Mongo Db")
        })
        connection.on('error', (error) => {
            console.log("Mongo db connection error")
            console.log(error)
            process.exit(0)
        })
    } catch (error) {
        console.log("Something went wrong while connecting to Database")
        console.log(error)
    }
}