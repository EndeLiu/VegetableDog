import React from 'react'

import ReceipeCard from '../components/common/ReceipeCard'

import '../assets/css/Library/library.scss'
import { getReceipes } from '../api'


class Library extends React.Component {
  constructor (props) {
    super()
    this.state = {
      items: []
    }
  }
  componentDidMount () {
    getReceipes().then((res) => {
      if (res.status === 200) {
        this.setState({
          items: res.data
        })
      }
    })
  }
  choose = (name) => {
    alert(name)
  }

  render () {
    const items = this.state.items.map((i, index) => {
      return (
        <ReceipeCard key={index} name={i.name} cover={i.src} choose={(name) => {this.choose(name)}} />
      )
    })
    return (
      <div className="receipe-card-container">
        {items}
      </div>
    )
  }
}

export default Library
