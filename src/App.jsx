import { useState } from 'react'
import PremiereLogo1 from '../public/premierelogo1.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <img src={PremiereLogo1} className="logo" alt="Premiere Saúde" />
      </div>
      <h1>Premiere Saúde</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Visitantes {count}
        </button>
        <p>
          Página em construção
        </p>
      </div>
    </>
  )
}

export default App
