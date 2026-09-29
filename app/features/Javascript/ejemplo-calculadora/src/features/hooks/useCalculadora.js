import { CALCULADORA } from '../constants/calculadora.constants'

const useCalculadora = ({
  primerNumero,
  segundoNumero,
  setPrimerNumero,
  setSegundoNumero,
  setResultado,
  setError,
}) => {
  const limpiarResultado = () => {
    setResultado(null)
    setError(CALCULADORA.VACIO)
  }

  // Los inputs entregan texto, incluso cuando su type es number.
  const handlePrimerNumeroChange = (event) => {
    setPrimerNumero(event.target.value)
    limpiarResultado()
  }

  const handleSegundoNumeroChange = (event) => {
    setSegundoNumero(event.target.value)
    limpiarResultado()
  }

  const calcular = (operacion, esDivision = false) => {
    limpiarResultado()

    if (primerNumero.trim() === CALCULADORA.VACIO || segundoNumero.trim() === CALCULADORA.VACIO) {
      setError(CALCULADORA.ERROR_CAMPOS)
      return
    }

    // Convertimos antes de sumar para evitar concatenar textos: "2" + "3".
    const primerValor = Number(primerNumero)
    const segundoValor = Number(segundoNumero)

    if (!Number.isFinite(primerValor) || !Number.isFinite(segundoValor)) {
      setError(CALCULADORA.ERROR_NUMEROS)
      return
    }

    if (esDivision && segundoValor === 0) {
      setError(CALCULADORA.ERROR_CERO)
      return
    }

    const nuevoResultado = operacion(primerValor, segundoValor)

    if (!Number.isFinite(nuevoResultado)) {
      setError(CALCULADORA.ERROR_RESULTADO)
      return
    }

    setResultado(nuevoResultado)
  }

  const handleSumar = () => calcular((primero, segundo) => primero + segundo)
  const handleRestar = () => calcular((primero, segundo) => primero - segundo)
  const handleMultiplicar = () => calcular((primero, segundo) => primero * segundo)
  const handleDividir = () => calcular((primero, segundo) => primero / segundo, true)

  const handleLimpiar = () => {
    setPrimerNumero(CALCULADORA.VACIO)
    setSegundoNumero(CALCULADORA.VACIO)
    limpiarResultado()
  }

  return {
    handleDividir,
    handleLimpiar,
    handleMultiplicar,
    handlePrimerNumeroChange,
    handleRestar,
    handleSegundoNumeroChange,
    handleSumar,
  }
}

export default useCalculadora
