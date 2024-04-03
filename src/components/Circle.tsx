
export default function Circle({character, clicked, theme, changeClick, index, customKey, correctPairs, currentSelected, gridSize} : {character: string | number, clicked: boolean, theme : string, changeClick : Function, index: number, customKey: string, correctPairs: string[], currentSelected : {}[], gridSize : string}) {

    return (
        <button key={customKey} className={`${character} flex justify-center items-center 
        ${clicked ? "bg-darkYellow pointer-events-none" : "bg-darkGray text-darkGray hover:bg-lightBlue2 hover:text-lightBlue2"} 
        ${correctPairs.includes(character.toString()) ? 'bg-lightGray cursor-not-allowed pointer-events-none ' : ''}  
        ${theme === 'numbers' && gridSize === '4x4' ? "text-xl h-16 w-16 md:h-20 md:w-20 lg:w-28 lg:h-28" : theme === 'numbers' ? 'p-2 text-xl w-10 h-10 sm:w-16 sm:h-16 lg:h-20 lg:w-20' : theme === 'icons' && gridSize === '4x4' ? 'h-16 w-16 md:h-20 md:w-20 lg:w-28 lg:h-28' : 'p-2 text-xl w-10 h-10 sm:w-16 sm:h-16 lg:h-20 lg:w-20'}
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