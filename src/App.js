import React, { Component } from 'react'

import Emoji from './Emoji'
import emojis from './emojis.json'

class App extends Component {
  state = {
    index: 0,
  }

  componentDidMount() {
    window.setInterval(() => {
      this.setState(state => ({
        index: state.index === emojis.length - 1 ? 0 : state.index + 1,
      }))
    }, 1500)
  }

  render() {
    const emoji = emojis[this.state.index]

    return <Emoji>{emoji}</Emoji>
  }
}

export default App
