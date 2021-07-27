import React from 'react'
import { string, node } from 'prop-types'

const Typography = ({ variant = 'p', children }) => {
  const styles = {
    fontFamily: 'Arial, sans-serif',
    letterSpacing: '.1em',
    textAlign: 'center',
  }
  switch (variant) {
    case 'h1':
      return <h1 style={styles}>{children}</h1>
    case 'h2':
      return <h2 style={styles}>{children}</h2>
    case 'h3':
      return <h3 style={styles}>{children}</h3>
    default:
      return <p style={styles}>{children}</p>
  }
}

Typography.propTypes = {
  variant: string,
  children: node,
}

export default Typography
