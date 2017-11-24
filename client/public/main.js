import React, { Component } from 'react'
import { render } from 'react-dom'
import ShowPhotos from './showphotos/'

class Carousel extends React.Component {
render() {
    return <div className="slides"><ShowPhotos /></div>
  }
}

render(<Carousel />, document.querySelector('#app'))
