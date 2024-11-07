"use client"
import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa6";
import { IoStarHalfOutline } from "react-icons/io5";
import '../global.css'
import Image from 'next/image'
import Cluedo from "../cluedo.png"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../../components/ui/alert-dialog"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import emailjs from '@emailjs/browser';
import axios from 'axios'
import { IoCloseOutline } from "react-icons/io5";
// import { auth } from "@clerk/nextjs/server"

const Product = () => {
    const [clerkuserid, setclerkuserid] = useState(null)
    const getUserData = async () => {
        if (clerkuserid === null) {
            try {
                const response = await axios.get("/api/getuserdata", {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                setclerkuserid(response.data.userId)
            } catch (error) {
                console.log(error)
            }
        } else {

        }

    }
    useEffect(() => {
        getUserData()
    })
    // const { userId } = auth()

    const [buttondisabled, setbuttondisabled] = useState(false)
    const [user_reg, setuser_reg] = useState({
        name: "",
        email: "",
        phonenumber: "",
        address: "",
    })
    const [loding, setloding] = useState(false)


    const sendEmail = async (e) => {
        const SERVICE_ID = "service_mr22qks"
        const TEMPLATE_ID_1 = "template_pssamcn"
        const publicKey = "59hYTK4Gj85Jq_6Ka"
        const template_params_1 = {
            "to_Email": user_reg.email,
            "name": user_reg.name,
            "message": `${user_reg.name} Thank You for buying our product we have recieved your order and we will update you on it shortly.`
        }
        emailjs
            .send(SERVICE_ID, TEMPLATE_ID_1, template_params_1, publicKey)
            .then((response) => {
                console.log("Email sent successfully!", response);
                if (document.getElementById("alert") !== null || document.getElementById("alert") !== undefined) {
                    window.location.reload()
                    setTimeout(3000)
                    document.getElementById("alert").style.display = "flex"
                } else {

                }
            })
            .catch((error) => {
                console.error("Error sending email:", error);
            });
    };
    const send_request = async () => {
        try {
            setloding(true)
            const response = await axios.post("/api/product-registeration", { user_reg: user_reg, clerkID: { clerkID: `${clerkuserid}` } }, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            console.log("Order sent successfully", response.data)
            sendEmail()
        } catch (error) {
            console.log("Cannot complete your order request.", error)
        }
    }
    useEffect(() => {
        if (user_reg.name.length > 0 && user_reg.email.length > 0 && user_reg.phonenumber.length > 0 && user_reg.address.length > 0) {
            setbuttondisabled(false)
        } else {
            setbuttondisabled(true)
        }
    }, [user_reg])
    window.document.onload(() => {
        window.alert("To buy aur product login to the website")
    })
    return (
        <div className='h-screen'>
            <div className='main-cs'>
                <div className="submain-cs">
                    <div className="left-cs">
                        <p className="video-title">Special Design and Enhanced Features</p>
                        <Image src={Cluedo} width={600} height={600} alt='Cluedo Image' className='mt-24 ml-5 zoom1'></Image>
                    </div>
                    <div className="right-c">
                        <div className="heading-cs">Revamped Cluedo Game</div>
                        <div className="rating-cs"><FaStar /><FaStar /><FaStar /><FaStar /><IoStarHalfOutline /> 4.6/5.0</div>
                        <div className="price-cs">₹1250</div>
                        <div className="desc-cs">
                            The video showcases the 3D model of the Enigma board game. The board features detailed rooms, each with various objects, weapons, and clues scattered throughout. Different areas of the board, like hidden compartments and restricted zones, are clearly visible, showing the mystery elements of the game. The pieces representing suspects, weapons, and crime scenes are displayed, ready to be interacted with. As the video progresses, the board highlights key areas where clues can be found, building suspense and intrigue. The video ends by showing the complete layout, emphasizing the game&apos;s immersive and strategic design.
                        </div>
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <button className="buttons-cs">Purchase Now</button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>{loding ? "Processing....." : "Please fill out the below form"}</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        <div className="grid w-full max-w-sm items-center gap-1.5">
                                            <Label htmlFor="name">Name</Label>
                                            <Input type="name" id="name" placeholder="Name" value={user_reg.name} onChange={(e) => setuser_reg({ ...user_reg, name: e.target.value })} />

                                            <Label htmlFor="email">Email</Label>
                                            <Input type="email" id="email" placeholder="Email" value={user_reg.email} onChange={(e) => setuser_reg({ ...user_reg, email: e.target.value })} />

                                            <Label htmlFor="number">Phone number</Label>
                                            <Input type="number" id="number" placeholder="Phone Number" value={user_reg.phonenumber} onChange={(e) => setuser_reg({ ...user_reg, phonenumber: e.target.value })} />

                                            <Label htmlFor="address">Address</Label>
                                            <Textarea id="address" placeholder="Address" value={user_reg.address} onChange={(e) => setuser_reg({ ...user_reg, address: e.target.value })} />
                                        </div>
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={send_request}>{buttondisabled ? "First fill all details" : "Order"}</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                        <div className="border-green-500 border-4 px-4 h-10 pt-1 text-green-600 rounded-xl justify-between mb-1 mt-5 hidden" id='alert'><p>Your email is sent successfully</p> <IoCloseOutline className='text-2xl font-extrabold text-red-500 cursor-pointer' onClick={() => { if (document.getElementById("alert") !== null || undefined) { document.getElementById("alert").style.display = "none"; } }} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
