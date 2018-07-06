import React from 'react'
import styled from 'react-emotion'
import * as Vibrant from 'node-vibrant'

class Palette extends React.Component {
  state = {
    palette: null,
  }

  componentDidMount() {
    this.getPalette(this.props.emoji)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.emoji !== this.props.emoji) {
      this.getPalette(this.props.emoji)
    }
  }

  getPalette = emoji => {
    const canvas = document.createElement('canvas')
    canvas.setAttribute('width', 100)
    canvas.setAttribute('height', 100)

    const context = canvas.getContext('2d')
    context.font = '96px serif'
    context.fillText(emoji, 0, 90)

    const dataUri = canvas.toDataURL()

    Vibrant.from(dataUri)
      .getPalette()
      .then(palette => this.setState({ palette }))
  }

  render() {
    return this.props.children(this.state.palette)
  }
}

const PaletteEmoji = ({ children }) => (
  <Palette emoji={children}>
    {palette => {
      const backgroundColor =
        (palette && palette.Vibrant && palette.Vibrant.getHex()) ||
        (palette && palette.Muted && palette.Muted.getHex())

      return (
        <Emoji
          style={{
            transition: 'background-color 100ms ease-in-out',
            backgroundColor,
          }}
        >
          {children}
        </Emoji>
      )
    }}
  </Palette>
)

const Emoji = styled('div')({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 120,
})

export default PaletteEmoji
