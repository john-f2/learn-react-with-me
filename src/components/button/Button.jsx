import React, { useState } from 'react'
import { string } from 'prop-types'

const Button = ({ defaultLabel = 'Click Me' }) => {
  const [label, setLabel] = useState(defaultLabel)

  const onClick = () => {
    setLabel('Clicked!')
  }
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  )
}

Button.propTypes = {
  defaultLabel: string,
}

export default Button
