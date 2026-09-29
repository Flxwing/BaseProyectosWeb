import { useState } from 'react'
import constants from '../constants/constants'
import useContador from '../hooks/useContador'
import users from '../hooks/user'

export function Registro({ nombres, setNombres }) {
  const [nombre, setNombre] = useState("")
  const { handleinputChange } = users()
  const { incrementar, mensaje } = useContador(nombres, setNombres)

  function registrar() {
    if (incrementar(nombre)) {
      setNombre("")
    }
  }

  return (
    <>
      <input
        type="text"
        aria-label={constants.namePlaceHolder}
        placeholder={constants.namePlaceHolder}
        value={nombre}
        onChange={(e) => handleinputChange(e, setNombre)}
      />
      <button onClick={registrar} disabled={nombres.length >= constants.MAX}>
        {constants.strIncrementar}
      </button>
      <p>{nombres.length >= constants.MAX ? constants.strSinCupos : mensaje}</p>
      <p>{constants.strListaNombres}</p>
      <ul>
        {nombres.map((nombre, indice) => <li key={indice}>{nombre}</li>)}
      </ul>
    </>
  )
}
