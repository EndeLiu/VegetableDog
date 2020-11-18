import React from 'react'

import ReceipeCard from '../components/common/ReceipeCard'

import '../assets/css/Library/library.scss'
import { getReceipes } from '../api'

import {Pagination} from 'antd'


class Library extends React.Component {
  constructor (props) {
    super()
    this.state = {
      items: [],
      page: 1,
      pageVol: 12
    }
  }
  componentDidMount () {
    const {page, pageVol} = this.state
    getReceipes(page, pageVol).then((res) => {
      if (res.status === 200) {
        this.setState({
          items: res.data
        })
      }
    })
  }
  choose = (name) => {
    this.props.history.push({pathname: '/details?name=' + name})
  }
  changePage = (index) => {
    console.log(index)
    this.setState({
      page: index
    })
    const {pageVol} = this.state
    getReceipes(index, pageVol).then((res) => {
      if (res.status === 200) {
        this.setState({
          items: res.data
        })
      }
    })
  }

  render () {
    const items = this.state.items.map((i, index) => {
      return (
        <ReceipeCard key={index} name={i.name} cover={i.src} choose={(name) => {this.choose(name)}} />
      )
    })
    return (
      <div className="lib-page">
        <div className="receipe-card-container">
          {items}
        </div>
        <div className="page-area">
          <Pagination defaultCurrent={1} onChange={(index) => {this.changePage(index)}} total={30} />
        </div>
      </div>
      
    )
  }
}

export default Library
