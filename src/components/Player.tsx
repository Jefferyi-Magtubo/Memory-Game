
export default function Player({player, score, currentPlayer} : {player : number, score: number, currentPlayer : number}) {


    return(
        <>
            
            <div className={`${currentPlayer === player ? "bg-darkYellow" : "bg-playerCardDefault"} p-4 w-16 flex flex-col items-center mr-4 font-athl player`}>
                <h1 className={` ${currentPlayer === player ? "text-white" : "text-lightBlue"} font-bold`}>P{player}</h1>
                <h1 className={` ${currentPlayer === player ? "text-white" : "text-darkGray"} font-bold` }>{score}</h1>
            </div>
        </>

    )

}