import React from 'react'

function Cover (props) {
  return (
    <div className="receipe-cover">     
      <img src={props.src} alt=""></img>
      <div className='receipe-desc'>{props.desc}</div>
    </div>
  )
}

export default Cover
