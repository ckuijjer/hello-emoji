import React, { Component } from 'react'

import Emoji from './Emoji'
import emojis from './emojis.json'

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

class App extends Component {
  render() {
    const emojiStyle = {
      width: 235,
      height: 235,
    }

    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {emojis.map(emoji => (
          <Emoji key={emoji} style={emojiStyle}>
            {emoji}
          </Emoji>
        ))}
      </div>
    )
  }
}

export default App
