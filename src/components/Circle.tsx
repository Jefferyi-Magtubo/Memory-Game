import React from "react"
import { nanoid } from 'nanoid'

export default function Circle({character, clicked, theme, changeClick, index, customKey, correctPairs, currentSelected, gridSize} : {character: string | number, clicked: boolean, theme : string, changeClick : Function, index: number, customKey: string, correctPairs: string[], currentSelected : {}[], gridSize : string}) {

    return (
        <button key={customKey} className={`${character} flex justify-center items-center w-16 h-16
        ${clicked ? "bg-darkYellow pointer-events-none" : "bg-darkGray text-darkGray hover:bg-lightBlue2 hover:text-lightBlue2"} 
        ${correctPairs.includes(character.toString()) ? 'bg-lightGray cursor-not-allowed pointer-events-none ' : ''}  
        ${theme === 'numbers' && gridSize === '4x4' ? "text-xl p-4 " : theme === 'numbers' ? 'p-2' : theme === 'icons' && gridSize === '4x4' ? 'p-4' : 'p-2 text-xl'}
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