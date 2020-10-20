import React from 'react'

function CornerLabelBox (props) {
  return (
    <div className="corner-label-box">
      <div style={{height: '100%'}}>
        {props.children}
      </div>
      <span>{props.label}</span>
    </div>
  )
}

export default CornerLabelBox
