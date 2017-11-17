import React, { Component } from 'react'
import { render } from 'react-dom'

export default class ShowPhotos extends React.Component {
  constructor(props) {
    super(props)
    this.state = { url:[] }
  }

  componentWillMount() {
    return fetch('/carouselPhotos')
      .then(res => res.json())
      .then(url => this.setState({url}))
  }

  showPhotos() {
  }

  render() {
    return (<div>
      {this.state.url.map(({ url, id, key })=> {
        return <img id={id} src={url} key={url} />
      })}
      </div>
    )
  }
}
