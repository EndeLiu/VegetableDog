import React from 'react'
import HomeSearch from '../components/Home/HomeSearch'
import HotSwiper from '../components/Home/HotSwiper'
import indexLogo from '../assets/img/vegetable dog.png'
import axios from 'axios'


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.enterHotDetails = this.enterHotDetails.bind(this)
    this.state = {
      hotItems: []
    }
  }
  componentDidMount () {
    axios.get('/api/hotitems').then((res) => {
      if (res && res.status === 200) {
        this.setState({
          hotItems: res.data
        })
      }
    })
  }
  render () {
    return (
      <div className="home-page">
        <div className="index-logo">
          <img src={indexLogo} alt=""></img>
        </div>
        <HomeSearch />
        <HotSwiper items={this.state.hotItems} clickItem={this.enterHotDetails} />
      </div>
    )
  }
  
  enterHotDetails = (i) => {
    this.props.history.push({pathname: '/receipe?name=' + i.name})
  }

  
}

export default Home
