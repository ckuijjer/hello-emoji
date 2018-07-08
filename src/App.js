import React, { Component } from 'react'

import Emoji from './Emoji'
import emojis from './emojis.json'
import Square from './Square'
import styled from '../node_modules/react-emotion'

/*
- responsiveness
  - iPhone 320: 3 => minWidth: 100
  - iPhone X 375: 3 => minWidth: 100
  - iPhone Plus 414: 4 => minWidth: 100
  === breakpoint (min-size: 768px)
  - iPad portrait 768: 5 => minWidth 150
  - iPad landscape 1024: 6 => minWidth: 150
  === breakpoint (min-size: 1366)
  - 1366: often used, 1024 up to 1440 should get 6
  - 1440: 6 => minWidth: 240
  - 1920: 8 => minWidth: 240
*/

const Container = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
  fontSize: 48,

  '@media (min-width: 768px)': {
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    fontSize: 72,
  },
  '@media (min-width: 1366px)': {
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    fontSize: 112,
  },
})

class App extends Component {
  render() {
    return (
      <Container>
        {emojis.map(emoji => (
          <Square key={emoji}>
            <Emoji>{emoji}</Emoji>
          </Square>
        ))}
      </Container>
    )
  }
}

export default App
