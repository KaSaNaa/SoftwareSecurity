import React from 'react'
import styled from 'styled-components'

const Button = ({onClick, type, disabled, children}) => {
  return (
    <ButtonWrapper 
    onClick={onClick}
    type={type}
    disabled={disabled}
    className = 'bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-2 px-4 rounded'>
    {children}
    </ButtonWrapper>
  )
}

export default Button

const ButtonWrapper = styled.button`
  padding: 9px 20px;
`