import { useState } from "react";

export default function Test2 () {

const [name, setName ] = useState("");

    return (
        <>
            <div>
                <input 
                placeholder="Skriv dit navn her.."
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <h2>Hej {name}</h2>
            </div>
        </>
    )
}