"use client"
import React from 'react'
import "../global.css"

const page = () => {
    return (
        <div className='h-screen w-screen'>
            <video autoPlay loop muted playsInline className='absolute z-[-1] h-screen object-cover w-full'>
                <source src="./video1.mp4" className='w-full object-cover' />
            </video>
            <div className='z-10 pt-5 pl-9 '>
                <p className='text-black font-extrabold text-4xl tracking-widest bg-gray-200 bg-opacity-60 w-60 text-center rounded-xl h-14 pt-2 ml-[670px] underline box-shadow '>RULES</p>
                <p className='text-red-600 font-bold text-2xl tracking-wide mt-10'>How to play?</p>
                <p className='text-black font-bold mt-5 text-lg bg-gray-200 bg-opacity-60 rounded-xl w-[1250px] p-5 box-shadow '>1. Solve the mystery by finding out the murderer, weapon, and crime scene. The person who solves all three first wins.<br />
                    2. Each player selects a different character, takes clue cards, and puts one character, weapon, and room card in the Case File Envelope. <br /> &nbsp;&nbsp;&nbsp;&nbsp;This combination of the card is the mystery which needs to be solved.<br />
                    3. Players take turns in a clockwise direction, and in each turn, the player can move, explore or utilize a special skill by that character.<br />
                    4. You move around the board using rolls of the dice. The game board allows you to move into or out of rooms and use shortcut passages <br /> &nbsp;&nbsp;&nbsp;&nbsp;to travel between certain rooms.<br />
                    5. A player can make a suggestion of a suspect, weapon, and room in the room. Other players need to show <br /> &nbsp;&nbsp;&nbsp;&nbsp;one matching card, if they have one, to disprove the suggestion.<br />
                    6. Each character has a special skill which they can use once per turn, for example asking for more clues or analyzing specific clues.<br />
                    7. Any player who feels he/she knows who the killer is can Accuse. That player will be out if he/she is wrong; however, he/she has to <br /> &nbsp;&nbsp;&nbsp;&nbsp;give clues for the rest of the game.<br />
                    8. The game is over when one of the players correctly names the murderer, weapon, and crime location, who becomes the Master Detective.<br />
                    9. There can be hints and plot twists, unlocking new rules or offering further clues, that enhance gameplay for more sophisticated players.<br />
                    10. Clues should be shared truthfully; turn order must be maintained, though one may bluff during discussions of clues outside of forced <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;exchange. These rules are exciting and full of strategy and add to the dynamics of solving the mystery together for everyone involved.</p>
            </div>
        </div>
    )
}

export default page
