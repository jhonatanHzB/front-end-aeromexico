import { createRef, FC, FormEvent, useRef } from 'react'
import { NewCharacter } from '../../types/NewCharacter'
import useForm from '../../hooks/useForm'
import Button from '../Button'
import Input from '../Input'
import './Modal.scss'

type ModalProps = {
  showModal: boolean
  toggleModal: () => void
}

const Modal: FC<ModalProps> = ({ showModal, toggleModal }) => {
  const fileRef = createRef<HTMLInputElement>()
  const spanRef = useRef<HTMLSpanElement>(null!)
  const {form, handleChanges, cleanForm} = useForm<NewCharacter>({
    name: '',
    dateOfBirth: '',
    eyeColour: '',
    hairColour: '',
    gender: 'female',
    position: 'hogwartsStudent',
    photo: ''
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    console.log('Submit form ', form)
    event.preventDefault()
    cleanForm()
  }

  const handlePhoto = () => {
    const file = fileRef.current?.files?.item(0)
    spanRef.current.textContent = file?.name || 'Imagen Adjuntada'
  }

  return (
    <div className={`modal ${showModal && 'active'}`}>
      <div className='modal__content'>
        <div className="modal__header">
          <h3>Agregar un personaje</h3>
          <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleModal}>
            <rect width="34" height="34" fill="white"/>
            <circle cx="17" cy="17" r="12.75" stroke="#333333"/>
            <path d="M12.75 21.2495L21.25 12.7495" stroke="#333333"/>
            <path d="M21.25 21.25L12.75 12.75" stroke="#333333"/>
          </svg>
        </div>
        <div className="modal__body">
          <form className="modal__body__form form" autoComplete='off' onSubmit={handleSubmit}>
            <div className='form__input'>
              <label htmlFor="name">NOMBRE</label>
              <Input
                id='name'
                name='name'
                onChange={handleChanges}
                type='text'
                value={form.name}
              />
            </div>
            <div className='form__input'>
              <label htmlFor="dateOfBirth">CUMPLEAÑOS</label>
              <Input
                id='dateOfBirth'
                name='dateOfBirth'
                onChange={handleChanges}
                type='text'
                value={form.dateOfBirth}
              />
            </div>
            <div className='form__input'>
              <label htmlFor="eyeColour">COLOR DE OJOS</label>
              <Input
                id='eyeColour'
                name='eyeColour'
                onChange={handleChanges}
                type='text'
                value={form.eyeColour}
              />
            </div>
            <div className='form__input'>
              <label htmlFor="hairColour">COLOR DE PELO</label>
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
              <div className="form__options">
                <div>
                  <Input
                    checked={form.gender === 'female'}
                    id='female'
                    name='gender'
                    onChange={handleChanges}
                    type='radio'
                    value='female'
                  />
                  <label className='radio__label' htmlFor="female">Mujer</label>
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
                  <label className='radio__label' htmlFor="male">Hombre</label>
                </div>
              </div>
            </div>
            <div className='form__radio'>
              <span>POSICIÓN</span>
              <div className="form__options">
                <div>
                  <Input
                    id='student'
                    checked={form.position === 'hogwartsStudent'}
                    name='position'
                    onChange={handleChanges}
                    type='radio'
                    value='hogwartsStudent'
                  />
                  <label className='radio__label' htmlFor="student">Estudiante</label>
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
                  <label className='radio__label' htmlFor="staff">Staff</label>
                </div>
              </div>
            </div>

            <div className="form__file">
              <label htmlFor="photo">
                <span>FOTOGRAFIA</span>
                <img src="./src/assets/img/post.svg" alt="Elegir imagen" />
                <Input
                  accept='image/png, image/jpg, image/jpeg'
                  id='photo'
                  name='photo'
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