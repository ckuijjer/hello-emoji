import React from 'react'
import styled from 'react-emotion'

const Outer = styled('div')({
  width: '100%',
  paddingTop: '100%',
  position: 'relative',
})

const Inner = styled('div')({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
})

const EqualWidthAndHeight = ({ children }) => (
  <Outer>
    <Inner>{children}</Inner>
  </Outer>
)

export default EqualWidthAndHeight
