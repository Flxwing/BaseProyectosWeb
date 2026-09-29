import constants from './constants/constants'
import { useState } from 'react'
import { Registro } from './registro/Registro'

export function LayoutLab() {
    const [nombres, setNombres] = useState([])


    return (
        <>
            <div className="contador">
                <h1>{constants.strTitulo}</h1>
                <p>{constants.strCuposRegistrados} {nombres.length}</p>
                <p>{constants.strCupos} {constants.MAX - nombres.length}</p>
                <Registro nombres={nombres} setNombres={setNombres} />
            </div>
        </>
    )
}
