import React, { Component } from 'react'
import axios from 'axios'

import Emoji from './Emoji'
import emojis from './emojis.json'

class App extends Component {
  componentDidMount() {
    axios
      .get(
        'https://cors.io/?https://www.unicode.org/Public/emoji/5.0/emoji-test.txt',
      )
      .then(console.log)
  }

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
