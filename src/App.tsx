import { useEffect, useState } from 'react'
import { fetchCharacters } from './features/characters/characterSlice'
import { useAppDispatch, useAppSelector } from './app/hooks'
import Button from './components/Button'
import Card from './components/Card'
import Logo from './components/Logo'
import Main from './components/Main'
import Modal from './components/Modal'
import './App.scss'

function App() {
  const [modal, setModal] = useState(false)
  const character = useAppSelector(state => state.character)
  const dispatch = useAppDispatch()

  const handleModal = () => {
    setModal(!modal)
    !modal && window.scrollTo(0, 0)
  }

  useEffect(() => {
    dispatch(fetchCharacters())
  }, []);

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
          {
            character.loading && <div>Loading...</div>
          }
          {
            !character.loading && character.error
              ? <div>Error: {character.error}</div>
              : null
          }
          {
            !character.loading && character.characters.length
              ? (character.characters.map(character => (
                <Card key={character.name} character={character} />
              )))
              : null
          }
        </div>
        <Main toggleModal={handleModal} />
      </div>
      <Modal showModal={modal} toggleModal={handleModal} />
    </>
  )
}

export default App