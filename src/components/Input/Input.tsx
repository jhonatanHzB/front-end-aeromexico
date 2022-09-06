import { forwardRef } from 'react'
import './Input.scss'

type InputProps = React.ComponentProps<'input'>

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input {...props} ref={ref} />
})

export default Input