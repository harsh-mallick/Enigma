"use client"
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/navigation";
import Image from "next/image"
import Logo from "../enigma_logo_final.png"
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
// import { Link } from "next/link"
const Navbar = () => {
    const router = useRouter()
    const show_phone_nav = () => {
        if (document.getElementById("phone-nav") !== null) {
            if (document.getElementById("phone-nav").style.display === "block") {
                document.getElementById("phone-nav").style.display = "none"
            } else {
                document.getElementById("phone-nav").style.display = "block"
            }
        }
    }

    return (
        <>
            <nav className='flex flex-row justify-between px-8 h-16 items-center text-lg bg-black text-white w-screen z-10'>
                <div className='font-bold flex items-center border-r-2 border-gray-200 pr-4'><Image src={Logo} alt="Logo" width={50} height={50} />{process.env.AppName}</div>
                <div>
                    <ul className='sm:block sm:flex sm:flex-row sm:font-bold'>
                        <li className='hidden text-white sm:block pr-8 cursor-pointer hover:text-' onClick={() => router.push('/')}>Home</li>
                        <li className='hidden text-white sm:block pr-8 cursor-pointer hover:text-gray-300' onClick={() => router.push('/#about')}>About</li>
                        <li className='hidden text-white sm:block pr-8 cursor-pointer hover:text-gray-300' onClick={() => router.push('/game_features')}>Game Features</li>
                        <li className='hidden text-white sm:block pr-8 cursor-pointer hover:text-gray-300' onClick={() => router.push('/character_profile')}>Character Profile</li>
                        <li className='hidden text-white sm:block pr-8 cursor-pointer hover:text-gray-300' onClick={() => router.push('/game_rules')}>Rules to Play</li>
                        <li className='hidden text-white sm:block pr-8 cursor-pointer hover:text-gray-300' onClick={() => router.push('/#contactus')}>Contact Us</li>
                        <div className='hidden text-white sm:block cursor-pointer'>
                            <SignedOut>
                                <SignInButton />
                            </SignedOut>
                        </div>
                        <SignedIn>
                            <li className='hidden text-white sm:block pr-8 cursor-pointer hover:text-gray-300' onClick={() => router.push('/product_page')}>Buy Our Product</li>
                            <UserButton />
                        </SignedIn>
                        <GiHamburgerMenu className='cursor-pointer block sm:hidden font-bold text-2xl' onClick={show_phone_nav} />
                    </ul>
                </div>
            </nav>
            <div className="hidden px-4 text-lg bg-black text-white w-screen font-bold sm:hidden border-t-2 border-slate-300" id='phone-nav'>
                <li className='block cursor-pointer text-center' onClick={() => router.push('/')}>Home</li>
                <li className='block cursor-pointer text-center' onClick={() => router.push('/#about')}>About</li>
                <li className='block cursor-pointer text-center' onClick={() => router.push('/game_features')}>Game Features</li>
                <li className='block cursor-pointer text-center' onClick={() => router.push('/character_profile')}>Character Profile</li>
                <li className='block cursor-pointer text-center' onClick={() => router.push('/game_rules')}>Rules to Play</li>
                <li className='block cursor-pointer text-center' onClick={() => router.push('/#contactus')}>Contact Us</li>
                <div className='block cursor-pointer text-center'>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                </div>
                <SignedIn>
                    <li className='hidden text-white sm:block pr-8 cursor-pointer hover:text-gray-300' onClick={() => router.push('/product_page')}>Buy Our Product</li>
                    <UserButton />
                </SignedIn>
            </div>
        </>
    )
}

export default Navbar
