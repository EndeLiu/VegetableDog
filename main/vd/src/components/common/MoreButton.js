import React from 'react'
import '../../assets/css/common.scss'

function MoreIcon (props) {
  const {icon, name} = props
  let count = props.count ? props.count : 0
  return (
    <div className="more-icon-container">
      <div className="more-icon">
        <img src={icon} alt=""></img>
        <span>{name}</span>
      </div>
      <div className="more-icon-badge">{count}</div>
    </div>
  )
}

export default MoreIcon