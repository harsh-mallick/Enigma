import React from 'react'
import "../global.css"
import Image from 'next/image'
import bg from '../image1.png'
import features from '../new_features.png'

const page = () => {
    return (
        <div>
            <Image src={bg} width={0} height={0} alt="bg" style={{ width: "100%", height: "100%" }} className='resolution' />
            <div className='sm:flex flex-nowrap'>
                <div className='left pl-4 resolution w-full sm:w-[60%]'>
                    <div className='left_bg'>
                        <p className='text-red-700 text-3xl font-bold sm:ml-10 ml-5'>What’s New?</p>
                        <p className='text-white sm:text-xl text-md sm:tracking-wide mt-7 sm:ml-10 ml-5'>This exciting new take on Cluedo brings suspense and strategy<br />
                            to life, transforming the classic game into an immersive,<br />
                            interactive mystery. With unique skills for each character, 3D<br />
                            environments, and evolving plot twists, players get to dive deep<br />
                            into their roles, uncover clues, and interrogate suspects like<br />
                            never before. Whether you play solo, team up with friends, or<br />
                            face off in multiplayer mode, you’ll engage with dynamic<br />
                            environments, layered storylines, and atmospheric<br />
                            soundscapes. Every round introduces new challenges, rotating<br />
                            suspects, and fresh character arcs that keep the suspense high<br />
                            and players coming back for more.</p>
                    </div>
                </div>
                <div className='sm:w-[40%] text-center p-2 sm:pl-16 pl-5 bg-black'>
                    <Image src={features} width={480} height={480} alt="Feautres Image" className='text-center rounded-2xl resolution' style={{ imageResolution: "crisp-edges" }} />
                </div>
            </div>
        </div>
    )
}

export default page
