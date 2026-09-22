import { COUNTER_CONSTANT_VALUES } from "../../constants/contador.constants"
import useContador from "../../hooks/useContador"
import { useState } from "react"
import users from "../../hooks/users"

export function Contador3({ contador, setContador }) {

    const { handleIncrement } = useContador(setContador)
    const { handleinputChange } = users()
    const [nombre, setNombre] = useState("")
    const [edad, setEdad] = useState("")

    return (
        <>
            <h2>{COUNTER_CONSTANT_VALUES.TITLE}</h2>
            <p>{contador}</p>

            <input
                type="text"
                placeholder={COUNTER_CONSTANT_VALUES.PLACEHOLDER_NOMBRE_USUARIO}
                value={nombre}
                onChange={(e) => handleinputChange(e, setNombre)}
            />
            <input
                type="number"
                placeholder={COUNTER_CONSTANT_VALUES.PLACEHOLDER_EDAD}
                value={edad}
                onChange={(e) => handleinputChange(e, setEdad)}
            />
            <button onClick={() => { handleIncrement() }} disabled={nombre === "" || edad === ""}>
                {COUNTER_CONSTANT_VALUES.INCREMENT}
            </button>
        </>
    )
}