import { COUNTER_CONSTANT_VALUES } from "../../constants/contador.constants"
import useContador from "../../hooks/useContador"

export function Contador2({ count, setCount }) {

    const {handleDecrement } = useContador(setCount)

    return (
        <>
            <h2>{COUNTER_CONSTANT_VALUES.TITLE}</h2>
            <p>{count}</p>
            <button onClick={handleDecrement} disabled={count <= 0}>
                {COUNTER_CONSTANT_VALUES.DECREMENT}
            </button>
        </>
    )
}