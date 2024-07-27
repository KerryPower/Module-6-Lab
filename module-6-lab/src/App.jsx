import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Greeting } from './components/Greeting/Greeting'

function App() {

  return (
    <Greeting name="Dave"></Greeting>
  )
  
}

export default App
