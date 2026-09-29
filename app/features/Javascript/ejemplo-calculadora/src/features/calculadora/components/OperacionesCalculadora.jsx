import { CALCULADORA } from '../../constants/calculadora.constants'

const OperacionesCalculadora = ({ onSumar, onRestar, onMultiplicar, onDividir }) => (
  <div className="operaciones" role="group" aria-label={CALCULADORA.OPERACIONES}>
    <button type="button" onClick={onSumar}>{CALCULADORA.SUMAR}</button>
    <button type="button" onClick={onRestar}>{CALCULADORA.RESTAR}</button>
    <button type="button" onClick={onMultiplicar}>{CALCULADORA.MULTIPLICAR}</button>
    <button type="button" onClick={onDividir}>{CALCULADORA.DIVIDIR}</button>
  </div>
)

export default OperacionesCalculadora
