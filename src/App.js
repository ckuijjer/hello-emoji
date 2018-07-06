import React, { Component } from 'react'

import Emoji from './Emoji'
import emojis from './emojis.json'

class App extends Component {
  render() {
    const emojiStyle = {
      minWidth: 200,
      maxWidth: 300,
      height: 200,
    }

    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {emojis.map(emoji => <Emoji style={emojiStyle}>{emoji}</Emoji>)}
      </div>
    )
  }
}

export default App
