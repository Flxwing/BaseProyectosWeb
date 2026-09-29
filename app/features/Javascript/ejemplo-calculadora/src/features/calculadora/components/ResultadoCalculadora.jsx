import { CALCULADORA } from '../../constants/calculadora.constants'

const ResultadoCalculadora = ({ resultado, error }) => (
  <div className="resultado" aria-live="polite" aria-atomic="true">
    <h2>{CALCULADORA.RESULTADO}</h2>
    {error ? (
      <p className="error">{error}</p>
    ) : (
      <p className="valor">{resultado ?? CALCULADORA.SIN_RESULTADO}</p>
    )}
  </div>
)

export default ResultadoCalculadora
