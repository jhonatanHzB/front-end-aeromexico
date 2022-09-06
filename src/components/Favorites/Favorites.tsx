import { FC } from 'react'
import { Character } from '../../types/Character'
import './Favorites.scss'

type FavoritesProps = {
  active: boolean
}

const Favorites: FC<Partial<Character & FavoritesProps>> = ({ active }) => {
  return (
    <div className={`list ${active && 'active'}`}>
      <div className="list__element">
        <img src="./src/assets/img/harry.jpg" alt="" />
        <span>Harry Potter</span>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 15L10 12" stroke="white" stroke-width="2" stroke-linecap="round"/>
          <path d="M14 15L14 12" stroke="white" stroke-width="2" stroke-linecap="round"/>
          <path d="M3 7H21V7C20.0681 7 19.6022 7 19.2346 7.15224C18.7446 7.35523 18.3552 7.74458 18.1522 8.23463C18 8.60218 18 9.06812 18 10V16C18 17.8856 18 18.8284 17.4142 19.4142C16.8284 20 15.8856 20 14 20H10C8.11438 20 7.17157 20 6.58579 19.4142C6 18.8284 6 17.8856 6 16V10C6 9.06812 6 8.60218 5.84776 8.23463C5.64477 7.74458 5.25542 7.35523 4.76537 7.15224C4.39782 7 3.93188 7 3 7V7Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
          <path d="M10.0681 3.37059C10.1821 3.26427 10.4332 3.17033 10.7825 3.10332C11.1318 3.03632 11.5597 3 12 3C12.4403 3 12.8682 3.03632 13.2175 3.10332C13.5668 3.17033 13.8179 3.26427 13.9319 3.37059" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <div className="list__element">
        <img src="./src/assets/img/harry.jpg" alt="" />
        <span>Harry Potter</span>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 15L10 12" stroke="white" stroke-width="2" stroke-linecap="round"/>
          <path d="M14 15L14 12" stroke="white" stroke-width="2" stroke-linecap="round"/>
          <path d="M3 7H21V7C20.0681 7 19.6022 7 19.2346 7.15224C18.7446 7.35523 18.3552 7.74458 18.1522 8.23463C18 8.60218 18 9.06812 18 10V16C18 17.8856 18 18.8284 17.4142 19.4142C16.8284 20 15.8856 20 14 20H10C8.11438 20 7.17157 20 6.58579 19.4142C6 18.8284 6 17.8856 6 16V10C6 9.06812 6 8.60218 5.84776 8.23463C5.64477 7.74458 5.25542 7.35523 4.76537 7.15224C4.39782 7 3.93188 7 3 7V7Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
          <path d="M10.0681 3.37059C10.1821 3.26427 10.4332 3.17033 10.7825 3.10332C11.1318 3.03632 11.5597 3 12 3C12.4403 3 12.8682 3.03632 13.2175 3.10332C13.5668 3.17033 13.8179 3.26427 13.9319 3.37059" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <div className="list__element">
        <img src="./src/assets/img/harry.jpg" alt="" />
        <span>Harry Potter</span>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 15L10 12" stroke="white" stroke-width="2" stroke-linecap="round"/>
          <path d="M14 15L14 12" stroke="white" stroke-width="2" stroke-linecap="round"/>
          <path d="M3 7H21V7C20.0681 7 19.6022 7 19.2346 7.15224C18.7446 7.35523 18.3552 7.74458 18.1522 8.23463C18 8.60218 18 9.06812 18 10V16C18 17.8856 18 18.8284 17.4142 19.4142C16.8284 20 15.8856 20 14 20H10C8.11438 20 7.17157 20 6.58579 19.4142C6 18.8284 6 17.8856 6 16V10C6 9.06812 6 8.60218 5.84776 8.23463C5.64477 7.74458 5.25542 7.35523 4.76537 7.15224C4.39782 7 3.93188 7 3 7V7Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
          <path d="M10.0681 3.37059C10.1821 3.26427 10.4332 3.17033 10.7825 3.10332C11.1318 3.03632 11.5597 3 12 3C12.4403 3 12.8682 3.03632 13.2175 3.10332C13.5668 3.17033 13.8179 3.26427 13.9319 3.37059" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <div className="list__element">
        <img src="./src/assets/img/harry.jpg" alt="" />
        <span>Harry Potter</span>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 15L10 12" stroke="white" stroke-width="2" stroke-linecap="round"/>
          <path d="M14 15L14 12" stroke="white" stroke-width="2" stroke-linecap="round"/>
          <path d="M3 7H21V7C20.0681 7 19.6022 7 19.2346 7.15224C18.7446 7.35523 18.3552 7.74458 18.1522 8.23463C18 8.60218 18 9.06812 18 10V16C18 17.8856 18 18.8284 17.4142 19.4142C16.8284 20 15.8856 20 14 20H10C8.11438 20 7.17157 20 6.58579 19.4142C6 18.8284 6 17.8856 6 16V10C6 9.06812 6 8.60218 5.84776 8.23463C5.64477 7.74458 5.25542 7.35523 4.76537 7.15224C4.39782 7 3.93188 7 3 7V7Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
          <path d="M10.0681 3.37059C10.1821 3.26427 10.4332 3.17033 10.7825 3.10332C11.1318 3.03632 11.5597 3 12 3C12.4403 3 12.8682 3.03632 13.2175 3.10332C13.5668 3.17033 13.8179 3.26427 13.9319 3.37059" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
    </div>
  )
}

export default Favorites