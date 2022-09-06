import { FC } from 'react'
import './Button.scss'

type ButtonProps = {
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  variant: 'primary' | 'secondary' | 'dark',
  size?: 'block'
} & React.ComponentProps<'button'>

const Button: FC<ButtonProps> = ({
  children,
  variant,
  size = '',
  handleClick = () => {},
  ...rest
}) => {
  return (
    <button
      className={`button button__${variant} ${size}`}
      onClick={(event) => handleClick(event)}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button