import { useState } from 'react'
import { CALCULADORA } from '../constants/calculadora.constants'
import useCalculadora from '../hooks/useCalculadora'
import CamposCalculadora from './components/CamposCalculadora'
import OperacionesCalculadora from './components/OperacionesCalculadora'
import ResultadoCalculadora from './components/ResultadoCalculadora'

const LayoutCalculadora = () => {
  // Igual que LayoutContador: el padre es dueño del estado compartido.
  const [primerNumero, setPrimerNumero] = useState(CALCULADORA.VACIO)
  const [segundoNumero, setSegundoNumero] = useState(CALCULADORA.VACIO)
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState(CALCULADORA.VACIO)

  const {
    handleDividir,
    handleLimpiar,
    handleMultiplicar,
    handlePrimerNumeroChange,
    handleRestar,
    handleSegundoNumeroChange,
    handleSumar,
  } = useCalculadora({
    primerNumero,
    segundoNumero,
    setPrimerNumero,
    setSegundoNumero,
    setResultado,
    setError,
  })

  return (
    <section className="calculadora" aria-label={CALCULADORA.TITULO}>
      <CamposCalculadora
        primerNumero={primerNumero}
        segundoNumero={segundoNumero}
        onPrimerNumeroChange={handlePrimerNumeroChange}
        onSegundoNumeroChange={handleSegundoNumeroChange}
      />
      <OperacionesCalculadora
        onSumar={handleSumar}
        onRestar={handleRestar}
        onMultiplicar={handleMultiplicar}
        onDividir={handleDividir}
      />
      <ResultadoCalculadora resultado={resultado} error={error} />
      <button type="button" className="limpiar" onClick={handleLimpiar}>
        {CALCULADORA.LIMPIAR}
      </button>
    </section>
  )
}

export default LayoutCalculadora
