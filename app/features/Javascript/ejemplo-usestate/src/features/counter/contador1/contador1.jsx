import { COUNTER_CONSTANT_VALUES } from "../../constants/contador.constants"
import useContador from "../../hooks/useContador"

export function Contador1({ contador, setContador }) {

    const { handleIncrement, handleDecrement } = useContador(setContador)

    return (
        <>
            <h2>{COUNTER_CONSTANT_VALUES.TITLE}</h2>
            <p>{contador}</p>
            <button onClick={contador < COUNTER_CONSTANT_VALUES.MAX_VALUE ? handleIncrement : null}>
                {COUNTER_CONSTANT_VALUES.INCREMENT}
            </button>
            <button onClick={contador > COUNTER_CONSTANT_VALUES.MIN_VALUE ? handleDecrement : null}>
                {COUNTER_CONSTANT_VALUES.DECREMENT}
            </button>
        </>
    )
}