import React from "react"

export default function Circle({character, clicked} : {character: string | number, clicked: boolean}) {

    const [isSelected, select] = React.useState(false)

    return (
        <div>
            {character}
        </div>
    )
}