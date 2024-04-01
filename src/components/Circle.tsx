import React from "react"
import { nanoid } from 'nanoid'

export default function Circle({character, clicked, theme, changeClick, index, customKey, correctPairs, currentSelected} : {character: string | number, clicked: boolean, theme : string, changeClick : Function, index: number, customKey: string, correctPairs: string[], currentSelected : {}[]}) {

    return (
        <button key={customKey} className={`${character} flex justify-center items-center 
        ${clicked ? "bg-darkYellow " : "bg-darkGray text-darkGray hover:bg-gray-500 hover:text-gray-500"} 
        ${correctPairs.includes(character.toString()) ? 'bg-lightGray cursor-not-allowed pointer-events-none ' : ''}  
        ${theme === 'numbers' ? "text-xl p-4 " : "p-6 "}
        ${currentSelected.length === 2 ? 'pointer-events-none' : ''}
        rounded-full`}
        onClick={() => changeClick(index)}>
            {theme === 'icons' ?
            <i className={`fa-brands fa-${character} ${correctPairs.includes(character.toString()) ? 'text-white' : ''} text-lg`}></i>
            :
            <h1 className={ `font-extrabold ${correctPairs.includes(character.toString()) ? 'text-white' : ''}`}>{character}</h1>}
        </button>
    )
}