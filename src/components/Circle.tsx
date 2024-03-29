import React from "react"

export default function Circle({character, clicked, theme, changeClick, index} : {character: string | number, clicked: boolean, theme : string, changeClick : Function, index: number}) {
    console.log(character)
    return (
        <button className={`flex justify-center items-center ${clicked ? "bg-lightBlue2" : "bg-lightGray "}  ${theme === 'numbers' ? "text-xl p-4" : "p-6 py-4"} rounded-full`}
        onClick={() => changeClick(index)}>
            {theme === 'icons' ?
            <i className={`fa-brands fa-${character} text-white text-lg`}></i>
            :
            <h1 className="text-white font-extrabold">{character}</h1>}
        </button>
    )
}