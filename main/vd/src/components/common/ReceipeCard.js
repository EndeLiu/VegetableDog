import React from 'react'

import '../../assets/css/grid.scss'

function ReceipeCard (props) {
  return (
    <div className="receipe-card col-lg-1 col-md-2 col-sm-3 col-xs-6">
      <div className="cover">
        <img src={props.cover} alt="pic"></img>
      </div>
      <div className="info">
        <div className="name">{props.name}</div>  
      </div>
      <div className="bottom-details"></div>
      <div className="open" onClick={() => {props.choose(props.name)}}></div>
    </div>
  )
}

export default ReceipeCard
