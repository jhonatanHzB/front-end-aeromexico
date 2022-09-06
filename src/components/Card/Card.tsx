import { FC } from 'react'
import { Character } from '../../types/Character'
import './Card.scss'

type CardProps = {
  character: Character
}

const Card: FC<CardProps> = ({character}) => {
  const {
    alive,
    name,
    dateOfBirth,
    gender,
    eyeColour,
    hairColour,
    house,
    hogwartsStudent,
    image
  } = character
  return (
    <div className={`card ${!alive && 'is__dead'}`}>
      <div className={`card__media ${house}`}>
        <img src={image} alt="Harry Potter" />
      </div>
      <div className="card__content">
        <div className="card__content__header">
          <span>{alive ? 'VIVO' : 'FINADO'} <em>/</em> { hogwartsStudent ? 'ESTUDIANTE' : 'STAFF'}</span>
          <svg viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8.60073C1 5.01771 1 3.2262 2.09835 2.1131C3.1967 1 4.96447 1 8.5 1H13.5C17.0355 1 18.8033 1 19.9017 2.1131C21 3.2262 21 5.01771 21 8.60073V17.2499C21 20.649 21 22.3486 19.9446 22.8684C18.8893 23.3883 17.5706 22.3382 14.9332 20.2382L14.0891 19.5661C12.6061 18.3852 11.8647 17.7948 11 17.7948C10.1353 17.7948 9.39386 18.3852 7.91089 19.5661L7.06683 20.2382C4.42943 22.3382 3.11073 23.3883 2.05537 22.8684C1 22.3486 1 20.649 1 17.2499V8.60073Z" stroke="#999999"/>
          </svg>
        </div>
        <div className="card__content__body">
          <h2>{name}</h2>
          <div className="card__content__body__description">
            <p><span>Cumpleaños:</span> {dateOfBirth.length === 0 ? 'Desconocido' : dateOfBirth}</p>
            <p><span>Género:</span> {gender}</p>
            <p><span>Color de ojos:</span> {eyeColour}</p>
            <p><span>Color de pelo:</span> {hairColour}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card