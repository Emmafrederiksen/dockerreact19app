import { useState } from "react"

export default function Test () {

    const [clicks, setClicks ] = useState(0);

    return (
        <>
            <p>Docker live reload virker</p>
            <button onClick={() => setClicks(clicks + 1)}>
                Klikket {clicks} gange
            </button>
            
        </>
            
    )
}