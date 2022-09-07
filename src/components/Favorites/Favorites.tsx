import { FC } from 'react'
import { useAppSelector } from '../../app/hooks'
import { Character } from '../../types/Character'
import Avatar from '../Avatar'
import './Favorites.scss'

type FavoritesProps = {
  active: boolean
}

const Favorites: FC<Partial<Character & FavoritesProps>> = ({ active }) => {
  const { favorites } = useAppSelector((state) => state.favorites)

  return (
    <div className={`favorites ${active && 'active'}`}>
      {favorites.length <= 0 && <p className='empty'>No tienes favoritos</p>}
      {favorites.map((character, index) => (
        <Avatar key={index} name={character.name} image={character.image} />
      ))}
    </div>
  )
}

export default Favorites
