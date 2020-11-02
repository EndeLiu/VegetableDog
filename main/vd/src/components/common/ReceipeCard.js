import React from 'react'

import '../../assets/css/grid.scss'

function ReceipeCard (props) {
  return (
    <div className="receipe-card col-lg-2 col-md-3 col-sm-4 col-xs-6">
      <div className="cover">
        <img src={props.cover} alt="pic"></img>
      </div>
      <div className="info">
        <div className="name">{props.name}</div>  
        <div className="desc">{props.name}</div>
      </div>
      <div className="bottom-details"></div>
      <div className="open" onClick={() => {props.choose(props.name)}}></div>
    </div>
  )
}

export default ReceipeCard
