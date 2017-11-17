import React, { Component } from 'react'
import { render } from 'react-dom'
import ShowPhotos from './showphotos/'

class Slide extends React.Component {
render() {
    return <div className="slide"><ShowPhotos /></div>
  }
}

render(<Slide />, document.querySelector('#app'))
