import React, { useState } from 'react'
import { Header } from './components/Header/Header'
import s from './App.module.css'
import { CardsContainer } from './components/CardsContainer/CardsContainer'
import { Footer } from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={s.app}>
      <Header />
      <h2>Venta de componentes del PC Gaming</h2>
      <CardsContainer />
      <Footer />
    </div>
  )
}

export default App
