"use client"
import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { IoCloseOutline } from "react-icons/io5";

const Contact = () => {
    const [senderemail, setsenderemail] = useState({})
    const [sendername, setsendername] = useState({})
    const [message, setmessage] = useState({})

    const sendEmail = async (e) => {
        const template_params = {
            "subject": "Suggestions from Users",
            "message": message,
            "to_Email": senderemail,
            "name": sendername
        }
        const SERVICE_ID = "service_mr22qks"
        const TEMPLATE_ID = "template_x9q6p09"
        const publicKey = "59hYTK4Gj85Jq_6Ka"
        emailjs
            .send(SERVICE_ID, TEMPLATE_ID, template_params, publicKey)
            .then((response) => {
                console.log("Email sent successfully!", response);
                const TEMPLATE_ID_1 = "template_pssamcn"
                const template_params_1 = {
                    "to_Email": senderemail,
                    "name": sendername,
                    "message": "We are really grateful that you gave your valuable time to give us a wonderful feedback. We will take your feedback into consideration and will surly try to work upon it. "
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
            })
            .catch((error) => {
                console.error("Error sending email:", error);
            });
    };

    return (
        <div>
            <section className="text-gray-600 body-font relative bg-black border-b-2 border-white h-screen" id="contactus">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Amity%20International%20School%20Saket+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">M Block, No:44, Saket Rd, Block N, Saket, New Delhi, Delhi 110017</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a className="text-indigo-500 leading-relaxed">principal@aiss.amity.edu</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed">8076xxxxxx</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-blue-950 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 px-3 rounded-xl py-8">
                        <h2 className="text-white text-2xl mb-1 font-bold title-font tracking-wider">Feedback</h2>
                        <p className="leading-relaxed mb-5 text-gray-400">Your feedback about our website and the game we are promoting with changes is really valuable to us.</p>
                        <div className="border-green-500 border-4 px-4 h-10 pt-1 text-green-200 rounded-xl justify-between mb-1 hidden" id='alert'><p>Your email is sent successfully</p> <IoCloseOutline className='text-2xl font-extrabold text-red-500 cursor-pointer' onClick={() => { if (document.getElementById("alert") !== null || undefined) { document.getElementById("alert").style.display = "none"; } }} /></div>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-md text-gray-300 font-bold">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={() => setsendername(document.getElementById("name").value)} />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-md text-gray-300 font-bold">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={() => setsenderemail(document.getElementById("email").value)} />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-md text-gray-300 font-bold">Message</label>
                            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" onChange={() => setmessage(document.getElementById("message").value)}></textarea>
                        </div>
                        <button className="text-black text-xl font-bold bg-gradient-to-r from-green-300 to-purple-400 border-0 py-2 px-6 focus:outline-none hover:from-green-500 hover:to-purple-500 rounded" onClick={sendEmail}>Send Feedback</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
