import React, { Component } from 'react'
import { render } from 'react-dom'
import Indicator from './indicator/'

const hide = { display: 'none' }
const show = { display: 'block' }

export default class ShowPhotos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url:[],
      count: 1
    }
    this.countUp = this.countUp.bind(this)
    this.countDown = this.countDown.bind(this)
  }

  componentWillMount() {
    return fetch('/carouselPhotos')
      .then(res => res.json())
      .then(url => this.setState({url}))
  }

  componentDidMount() {
    this.state.count = setInterval(() => this.countUp(), 1000)
  }

  countUp() {
    this.state.count < 3
      ? this.setState({ count: this.state.count + 1 })
      : this.setState({ count: 1 })
  }

  countDown() {
    this.state.count > 1
      ? this.setState({ count: this.state.count - 1 })
      : this.setState({ count: 3 })
  }

  render() {
    return (
      <div className="slide">
      <div>
        {this.state.url.map(({ url, id, key })=> {
          return <div>
            <img id={id} className="image" src={url} key={url} style={this.state.count === id ? show : hide} />
          </div>
        })}
      </div>
        <div>
          <i className="fa fa-arrow-circle-left leftarrow" onClick={this.countDown} aria-hidden="true"></i>
          <i className="fa fa-arrow-circle-right rightarrow" onClick={this.countUp} aria-hidden="true"></i>
        </div>
      </div>
    )
  }
}
