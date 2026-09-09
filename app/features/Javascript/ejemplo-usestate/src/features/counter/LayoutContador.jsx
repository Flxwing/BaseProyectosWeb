import { useState } from "react"
import { COUNTER_CONSTANT_VALUES } from "../constants/contador.constants"

export function LayoutContador() {
    const [contador, setContador] = useState(0)

    function handleIncrementar() {
        setContador(prev => prev + COUNTER_CONSTANT_VALUES.INCREMENT_VALUE)
    }

    function handleDecrementar(){
        setContador(prev => prev + COUNTER_CONSTANT_VALUES.DECREMENT_VALUE)
    }

    return (
        <>
            <h2>{COUNTER_CONSTANT_VALUES.TITLE}</h2>
            <p>{contador}</p>
            <button onClick={contador < COUNTER_CONSTANT_VALUES.MAX_VALUE ? handleIncrementar : null}>
                {COUNTER_CONSTANT_VALUES.INCREMENT}
            </button>
            <button onClick={contador > COUNTER_CONSTANT_VALUES.MIN_VALUE ? handleDecrementar : null}>
                {COUNTER_CONSTANT_VALUES.DECREMENT}
            </button>
        </>
    )
}