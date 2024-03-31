import React from "react"
import { nanoid } from 'nanoid'

export default function Circle({character, clicked, theme, changeClick, index, customKey, correctPairs} : {character: string | number, clicked: boolean, theme : string, changeClick : Function, index: number, customKey: string, correctPairs: string[]}) {

    return (
        <button key={customKey} className={`${character} flex justify-center items-center 
        ${clicked ? "bg-darkYellow " : "bg-darkGray text-darkGray"} 
        ${correctPairs.includes(character.toString()) ? 'bg-lightGray cursor-not-allowed pointer-events-none' : ''}  
        ${theme === 'numbers' ? "text-xl p-4" : "p-6 py-4"} rounded-full`}
        onClick={() => changeClick(index)}>
            {theme === 'icons' ?
            <i className={`fa-brands fa-${character} text-lg`}></i>
            :
            <h1 className=" font-extrabold">{character}</h1>}
        </button>
    )
}