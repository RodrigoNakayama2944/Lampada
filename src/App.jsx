import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ligado from "./assets/ligado.png"
import desligado from "./assets/desligado.png"
import logo from "./assets/LOGO.png"

function App() {
  const [lampada, setLampada] = useState(desligado)

  return (
  <div>
    <div id="cabeçalho">
      <img src={LOGO} id="logo"/>
      <h3>Site para Lampadas grandes e saborosas</h3>
      <h3>Feito por:</h3>
      <ul>
        <li>Rodrigo Nakama</li>
        <li>Cristo Junior</li>
        <li>Cristiano cézzáríónór</li>
        <li>Nigolas Deellaattoorree</li>
        <li>Predro Pedro Ricardo Ribeiro</li>
      </ul> 
    </div>
    <div id='div-prin'>
      <button type='button' onClick={() => setLampada(ligado)}>ligar</button>
      <img src={lampada} id='lampada'/>
      <button type='button' onClick={() => setLampada(desligado)}>desligar</button>
    </div>
  </div>
  )
}

export default App
