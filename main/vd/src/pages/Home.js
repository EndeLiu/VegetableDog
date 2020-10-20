import React from 'react'
import HomeSearch from '../components/Home/HomeSearch'
import HotSwiper from '../components/Home/HotSwiper'
import indexLogo from '../assets/img/index.png'


function Home () {
  return (
    <div className="home-page">
      <div className="index-logo">
        <img src={indexLogo} alt=""></img>
      </div>
      <HomeSearch />
      <HotSwiper />
    </div>
  )
}

export default Home
