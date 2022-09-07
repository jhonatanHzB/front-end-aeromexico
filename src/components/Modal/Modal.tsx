import { createRef, FC, FormEvent, useRef } from 'react'
import { NewCharacter } from '../../types/NewCharacter'
import { fetchCharacters } from '../../features/characters/characterSlice'
import { useAppDispatch } from '../../app/hooks'
import useForm from '../../hooks/useForm'
import Button from '../Button'
import Input from '../Input'
import axios from 'axios'
import './Modal.scss'

type ModalProps = {
  showModal: boolean
  toggleModal: () => void
}

const Modal: FC<ModalProps> = ({ showModal, toggleModal }) => {
  const reader = new FileReader()
  const fileRef = createRef<HTMLInputElement>()
  const spanRef = useRef<HTMLSpanElement>(null!)
  const dispatch = useAppDispatch()
  const { form, handleChanges, cleanForm } = useForm<NewCharacter>({
    name: '',
    dateOfBirth: '',
    eyeColour: '',
    hairColour: '',
    gender: 'female',
    position: 'hogwartsStudent',
    image: ''
  })

  const dummyValidateForm = (): boolean => {
    return form.name !== '' && form.dateOfBirth !== '' && form.eyeColour !== '' && form.hairColour !== '';
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const target = event.target as HTMLFormElement

    if (dummyValidateForm()) {
      const data = Object.fromEntries(new FormData(target))
      const randomId = Math.floor(Math.random() * (1000 + 1))
      const image = reader.result as string

      axios
        .post('http://localhost:3000/characters', {
          ...data,
          image,
          id: randomId
        })
        .then((response) => {
          console.log(response)
          spanRef.current.textContent = 'No se eligió ningún archivo'
          dispatch(fetchCharacters())
          cleanForm()
          toggleModal()
        })
    } else {
      alert('Llena todos los datos')
    }

  }

  const handlePhoto = () => {
    try {
      const file = fileRef.current?.files?.item(0) as File
      reader.readAsDataURL(file)
      spanRef.current.textContent = file?.name || 'Imagen Adjuntada'
    } catch (e) {
      spanRef.current.textContent = 'No se eligió ningún archivo'
    }
  }

  return (
    <div className={`modal ${showModal && 'active'}`}>
      <div className='modal__content'>
        <div className='modal__header'>
          <h3>Agregar un personaje</h3>
          <img src='./src/assets/img/close.svg' onClick={toggleModal} alt='Cerrar' />
        </div>
        <div className='modal__body'>
          <form
            className='modal__body__form form'
            autoComplete='off'
            onSubmit={handleSubmit}
          >
            <div className='form__input'>
              <label htmlFor='name'>NOMBRE</label>
              <Input
                id='name'
                name='name'
                onChange={handleChanges}
                type='text'
                value={form.name}
              />
            </div>
            <div className='form__input'>
              <label htmlFor='dateOfBirth'>CUMPLEAÑOS</label>
              <Input
                id='dateOfBirth'
                name='dateOfBirth'
                onChange={handleChanges}
                type='text'
                value={form.dateOfBirth}
              />
            </div>
            <div className='form__input'>
              <label htmlFor='eyeColour'>COLOR DE OJOS</label>
              <Input
                id='eyeColour'
                name='eyeColour'
                onChange={handleChanges}
                type='text'
                value={form.eyeColour}
              />
            </div>
            <div className='form__input'>
              <label htmlFor='hairColour'>COLOR DE PELO</label>
              <Input
                id='hairColour'
                name='hairColour'
                onChange={handleChanges}
                type='text'
                value={form.hairColour}
              />
            </div>
            <div className='form__radio'>
              <span>GÉNERO</span>
              <div className='form__options'>
                <div>
                  <Input
                    checked={form.gender === 'female'}
                    id='female'
                    name='gender'
                    onChange={handleChanges}
                    type='radio'
                    value='female'
                  />
                  <label className='radio__label' htmlFor='female'>
                    Mujer
                  </label>
                </div>
                <div>
                  <Input
                    id='male'
                    checked={form.gender === 'male'}
                    name='gender'
                    onChange={handleChanges}
                    type='radio'
                    value='male'
                  />
                  <label className='radio__label' htmlFor='male'>
                    Hombre
                  </label>
                </div>
              </div>
            </div>
            <div className='form__radio'>
              <span>POSICIÓN</span>
              <div className='form__options'>
                <div>
                  <Input
                    id='student'
                    checked={form.position === 'hogwartsStudent'}
                    name='position'
                    onChange={handleChanges}
                    type='radio'
                    value='hogwartsStudent'
                  />
                  <label className='radio__label' htmlFor='student'>
                    Estudiante
                  </label>
                </div>
                <div>
                  <Input
                    id='staff'
                    checked={form.position === 'hogwartsStaff'}
                    name='position'
                    onChange={handleChanges}
                    type='radio'
                    value='hogwartsStaff'
                  />
                  <label className='radio__label' htmlFor='staff'>
                    Staff
                  </label>
                </div>
              </div>
            </div>

            <div className='form__file'>
              <label htmlFor='image'>
                <span>FOTOGRAFIÁ</span>
                <img src='./src/assets/img/post.svg' alt='Elegir imagen' />
                <Input
                  accept='image/png, image/jpg, image/jpeg'
                  id='image'
                  name='image'
                  onChange={() => handlePhoto()}
                  ref={fileRef}
                  type='file'
                />
                <span ref={spanRef}>No se eligió ningún archivo</span>
              </label>
            </div>

            <Button type='submit' variant='dark' size='block'>
              GUARDAR
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal
