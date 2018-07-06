import React, { Component } from 'react'

import EmojiLoop from './EmojiLoop'

class App extends Component {
  render() {
    return (
      <div
        style={{
          height: '100vh',
          backgroundColor: '#f99',
          display: 'flex',
        }}
      >
        <EmojiLoop />
      </div>
    )
  }
}

export default App
