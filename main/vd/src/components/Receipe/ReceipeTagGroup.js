import React from 'react'
import {Tag} from 'antd'

function ReceipeTagGroup (props) {
  const colors = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime']
  const tags = props.tags.map((i, index) => {
    const randomColor = Math.floor(Math.random() * 6)
  return <Tag key={index} color={colors[randomColor]}>{i}</Tag>
  })
  return (
    <div className="tag-group">
      {tags}
    </div>
  )
}

export default ReceipeTagGroup
