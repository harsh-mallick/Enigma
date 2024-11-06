import React from 'react'
import "../global.css"
import Image from 'next/image'
import bg from '../image.png'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../components/ui/card"
const detectives = [
    {
        id: 1,
        name: "Detective Scarlet",
        role: "Private investigator",
        skill: "Investigator",
        image: "/character_images/image2.png"
    },
    {
        id: 2,
        name: "Professor Plum",
        role: "Academic and Forensics Expert",
        skill: "Analysis",
        image: "/character_images/image3.png"
    },
    {
        id: 3,
        name: "Miss Peacock",
        role: "Socialite and Influencer",
        skill: "Charm",
        image: "/character_images/image7.png"
    },
    {
        id: 4,
        name: "Colonel Mustard",
        role: "Military Strategist",
        skill: "Tactics",
        image: "/character_images/image1.png"
    }
]

const changes = [
    {
        id: 1,
        name: "Lila Hart",
        role: "Hacker and Techie",
        skill: "Digital Forensics",
        image: "/character_images/image8.png"
    },
    {
        id: 2,
        name: "Victor Nouir",
        role: "Retired Thief",
        skill: "Lockpicking",
        image: "/character_images/image5.png"
    },
    {
        id: 3,
        name: "Dr. Iris Grey",
        role: "Psychologist",
        skill: "Psychological Insight",
        image: "/character_images/image6.png"
    },
    {
        id: 4,
        name: "Fiona Wolfe",
        role: "Journalist",
        skill: "Investigation",
        image: "/character_images/image4.png"
    },
]
const page = () => {
    return (
        <div>
            <Image src={bg} width={0} height={0} sizes='100vw' alt="bg" style={{ width: "100%" }} />
            <div className="bottom">
                <p className='text-red-700 font-bold text-2xl tracking-widest'>Meet the detectives</p>
                <p className='text-red-700 text-lg'>Each character brings unique skills to help you solve the mystery. Choose wisely, as their abilities could be the key to cracking the case!</p>
                <div className='flex ml-[150px]'>
                    {Array.isArray(detectives) && detectives.map((data) => {
                        console.log(data.name)
                        return (
                            <div key={data.id} className='hover:scale-110'>
                                <Card >
                                    <CardHeader>
                                        <CardTitle img_prop={`${data.image}`}>Card Title</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className='flex'><p className='font-bold mr-1 mb-2 text-lg'>Name: </p><p className='text-lg'>{data.name} </p></div>
                                        <div className='flex'><p className='font-bold mr-1 mb-2 text-lg'>Role: </p><p className='text-lg'>{data.role} </p></div>
                                        <div className='flex'><p className='font-bold mr-1 mb-2 text-lg'>Skill:</p> <p className='text-lg'>{data.skill}</p> </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )
                    })}
                </div>
                <p className='text-red-700 font-bold text-2xl tracking-widest mt-3'>Newest Additions</p>
                <p className='text-red-700 text-lg'>Each character brings unique skills to help you solve the mystery. Choose wisely, as their abilities could be the key to cracking the case!</p>
                <div className='flex ml-[150px]'>
                    {Array.isArray(changes) && changes.map((datas) => {
                        return (
                            <div key={datas.id} className='hover:scale-110 transition-all delay-300 ease-in-out'>
                                <Card>
                                    <CardHeader>
                                        <CardTitle img_prop={datas.image}>Card Title</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex"><p className='font-bold mr-1 mb-2 text-lg'>Name: </p><p className='text-lg'>{datas.name} </p></div>
                                        <div className="flex"><p className='font-bold mr-1 mb-2 text-lg'>Role: </p><p className='text-lg'>{datas.role} </p></div>
                                        <div className="flex"><p className='font-bold mr-1 mb-2 text-lg'>Skill:</p> <p className='text-lg'>{datas.skill}</p> </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default page
