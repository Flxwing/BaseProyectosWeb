import { CALCULADORA } from '../../constants/calculadora.constants'

const CamposCalculadora = ({
  primerNumero,
  segundoNumero,
  onPrimerNumeroChange,
  onSegundoNumeroChange,
}) => (
  <div className="campos">
    <label>
      {CALCULADORA.NUMERO_PRIMERO}
      <input type="number" step="any" value={primerNumero} onChange={onPrimerNumeroChange} />
    </label>
    <label>
      {CALCULADORA.NUMERO_SEGUNDO}
      <input type="number" step="any" value={segundoNumero} onChange={onSegundoNumeroChange} />
    </label>
  </div>
)

export default CamposCalculadora
