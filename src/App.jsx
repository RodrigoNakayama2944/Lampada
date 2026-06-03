import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ligado from "./assets/ligado.png"
import desligado from "./assets/desligado.png"

function App() {
  const [lampada, setLampada] = useState(desligado)

  return (
   <div id='div-prin'>
    <button type='button' onClick={() => setLampada(ligado)}>ligraar</button>
    <img src={lampada} id='lampada'/>
    <button type='button' onClick={() => setLampada(desligado)}>desligar</button>
   </div>
  )
}

export default App
