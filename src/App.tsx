import { useState } from 'react'
import Button from './components/Button'
import Card from './components/Card'
import Logo from './components/Logo'
import Main from './components/Main'
import Modal from './components/Modal'
import './App.scss'

function App() {
  const [modal, setModal] = useState(false)
  const handleModal = () => {
    setModal(!modal)
    !modal && window.scrollTo(0, 0)
  }

  return (
    <>
      <div className='app'>
        <Logo />
        <h1>Selecciona tu filtro</h1>
        <div className="app__filters">
          <Button type='button' variant='dark'>ESTUDIANTES</Button>
          <Button type='button' variant='dark'>STAFF</Button>
        </div>
        <div className="app__characters">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Main toggleModal={handleModal} />
      </div>
      <Modal showModal={modal} toggleModal={handleModal} />
    </>
  )
}

export default App