import { FC, useState } from 'react'
import Favorites from '../Favorites'
import './Main.scss'

type MainProps = {
  toggleModal: () => void
}

const Main: FC<MainProps> = ({ toggleModal }) => {
  const [favorites, setFavorites] = useState(false)

  return (
    <>
      <div className='main'>
        <button type='button' className="main__favorites" onClick={() => setFavorites(!favorites)}>
          <span>FAVORITOS</span>
          <svg viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7C1 4.17157 1 2.75736 1.87868 1.87868C2.75736 1 4.17157 1 7 1H11C13.8284 1 15.2426 1 16.1213 1.87868C17 2.75736 17 4.17157 17 7V13.8276C17 16.5109 17 17.8525 16.1557 18.2629C15.3114 18.6733 14.2565 17.8444 12.1465 16.1866L11.4713 15.656C10.2849 14.7239 9.69173 14.2578 9 14.2578C8.30827 14.2578 7.71509 14.7239 6.52871 15.656L5.85346 16.1866C3.74355 17.8444 2.68859 18.6733 1.84429 18.2629C1 17.8525 1 16.5109 1 13.8276V7Z" fill="white" stroke="white" strokeWidth="2"/>
          </svg>
        </button>
        <div className="fill__space"></div>
        <button type='button' className="main__add" onClick={toggleModal}>
          <span>AGREGAR</span>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.3249 15.0763C12.8883 15.0257 12.4456 15 12 15C10.0188 15 8.09292 15.5085 6.52112 16.4465C5.30069 17.1749 4.34666 18.1307 3.74108 19.2183C3.46638 19.7117 3.79562 20.2902 4.34843 20.4054C7.85678 21.1365 11.4437 21.3594 15 21.074V21H14C12.3431 21 11 19.6569 11 18C11 16.5753 11.9932 15.3825 13.3249 15.0763Z" fill="white"/>
            <path d="M18 14L18 22" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M22 18L14 18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            <circle cx="12" cy="8" r="5" fill="white"/>
          </svg>
        </button>
      </div>
      <Favorites active={favorites} />
    </>
  )
}

export default Main