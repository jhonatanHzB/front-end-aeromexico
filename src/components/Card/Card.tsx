import { Character } from '../../types/Character'
import './Card.scss'

const Card: React.FC<Partial<Character>> = (props) => {
  const {
    alive,
    name,
    dateOfBirth,
    gender,
    eyeColour,
    hairColour,
    house,
    hogwartsStaff,
    hogwartsStudent
  } = props
  return (
    <div className='card'>
      <div className="card__media Gryffindor">
        <img src="./src/assets/harry.jpg" alt="Harry Potter" />
      </div>
      <div className="card__content">
        <div className="card__content--header">
          <span>VIVO <em>/</em> ESTUDIANTE</span>
          <svg viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8.60073C1 5.01771 1 3.2262 2.09835 2.1131C3.1967 1 4.96447 1 8.5 1H13.5C17.0355 1 18.8033 1 19.9017 2.1131C21 3.2262 21 5.01771 21 8.60073V17.2499C21 20.649 21 22.3486 19.9446 22.8684C18.8893 23.3883 17.5706 22.3382 14.9332 20.2382L14.0891 19.5661C12.6061 18.3852 11.8647 17.7948 11 17.7948C10.1353 17.7948 9.39386 18.3852 7.91089 19.5661L7.06683 20.2382C4.42943 22.3382 3.11073 23.3883 2.05537 22.8684C1 22.3486 1 20.649 1 17.2499V8.60073Z" stroke="#999999"/>
          </svg>
        </div>
        <div className="card__content--body">
          <h2>Harry Potter</h2>
          <div className="card__content--body--description">
            <p><span>Cumpleaños:</span> 31-07-1980</p>
            <p><span>Género:</span> Male</p>
            <p><span>Color de ojos:</span> Green</p>
            <p><span>Color de pelo:</span> Blonde</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card