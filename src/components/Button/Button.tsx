import React from 'react'
import './Button.scss'

type ButtonProps = {
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  variant: 'primary' | 'secondary' | 'dark'
} & React.ComponentProps<'button'>

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  handleClick = () => {},
  ...rest
}) => {
  return (
    <button
      type='button'
      className={`button button__${variant}`}
      onClick={(event) => handleClick(event)}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button