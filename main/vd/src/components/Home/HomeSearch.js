import React from 'react'
import {Input} from 'antd'
import '../../assets/css/Home/home.scss'

function HomeSearch () {
  const placeHolder = '请输入想要查询的内容'
  // const style = {
  //   width: 500
  // }
  const {Search} = Input
  return (
    <div className="home-search-container">
      <Search className="home-search" size="large" placeholder={placeHolder}  />
    </div> 
  )
}

export default HomeSearch
