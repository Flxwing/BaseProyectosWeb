import { useState } from "react"
import { Contador1 } from "./contador1/contador1"
import { Contador2 } from "./Contador2/contador2"
import { Contador3 } from "./Contador3/contador3"

export function LayoutContador() {
    const [contador, setContador] = useState(0)

    return (
        <>
            <Contador1 contador={contador} setContador={setContador} />
            <Contador2 count={contador} setCount={setContador} />
            <Contador3 contador3={contador} setContador={setContador} />
        </>
    )
}