import './App.scss'
import Button from './components/Button'
import Card from './components/Card'
import Logo from './components/Logo'
import Main from './components/Main'

function App() {
  return (
    <div className="app">
      <Logo />
      <h1>Selecciona tu filtro</h1>
      <div className="app__filters">
        <Button variant='dark'>ESTUDIANTES</Button>
        <Button variant='dark'>STAFF</Button>
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
      <Main />
    </div>
  )
}

export default App