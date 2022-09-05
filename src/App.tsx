import './App.scss'
import Button from './components/Button/Button'
import Logo from './components/Logo'

function App() {
  return (
    <div className="app">
      <Logo />
      <h1>Selecciona tu filtro</h1>
      <div className="app__filters">
        <Button variant='dark'>ESTUDIANTES</Button>
        <Button variant='dark'>STAFF</Button>
      </div>
    </div>
  )
}

export default App