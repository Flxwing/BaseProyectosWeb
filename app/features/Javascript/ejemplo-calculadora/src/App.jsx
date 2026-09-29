import LayoutCalculadora from './features/calculadora/LayoutCalculadora'
import { CALCULADORA } from './features/constants/calculadora.constants'
import './App.css'

const App = () => (
  <main>
    <header>
      <p className="etiqueta">{CALCULADORA.PIE}</p>
      <h1>{CALCULADORA.TITULO}</h1>
      <p>{CALCULADORA.DESCRIPCION}</p>
    </header>
    <LayoutCalculadora />
  </main>
)

export default App
