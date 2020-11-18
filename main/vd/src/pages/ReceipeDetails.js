import React, {useState, useEffect} from 'react'
import {getReceipeDetails} from '../api/index'

import '../assets/css/Receipe/receipe.scss'
import '../assets/css/grid.scss'
import '../assets/css/common.scss'

import {Table, Collapse} from 'antd'
import MoreButton from '../components/common/MoreButton'
import ColorfulLabel from '../components/common/ColorfulLabel'
import starIcon from '../assets/img/star.png'
import likeIcon from '../assets/img/like.png'
import followIcon from '../assets/img/follow.png'
import kgIcon from '../assets/img/knowgraph.png'
import dataIcon from '../assets/img/data.png'

function ReceipeDetailsUI (props) {
  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '数量',
      dataIndex: 'amount',
      key: 'amount',
    }
  ]
  const { Panel } = Collapse
  const activeRange = []
  const stepList = props.steps.map((i, index) => {
    activeRange.push(index)
    return (
      <Panel header={i.desc} key={index}>
        <img src={i.image} alt=''></img>
      </Panel>
    )
  })
  
  const materialList = props.materials.map((i, index) => {
    i.key = index
    return i
  })
  

  return (
    <div className="receipe-detials-wrapper col-lg-8 col-md-8 col-sm-8 col-xs-12">
      <div className="content-title"><h1>{props.name}</h1></div>
      <div className="content-desc"><span>{props.desc}</span></div>
      <div className="content-cover"><img src={props.cover} alt=''></img></div>
      <div className="content-sub-title">食材</div>
      <div className="material-table">
        <Table bordered dataSource={materialList} columns={columns} pagination={false} />  
      </div>
      <div className="content-sub-title">做法</div>
      <div className="content-steps">
      <Collapse defaultActiveKey={[0,1,2,3,4,5,6,7]} expandIconPosition='right'>
        {stepList}
      </Collapse>
      </div>
    </div>
  )
}

function ReceipeMoreUI (props) {
  const icons = [
    {name: '收藏', alt: starIcon},
    {name: '喜欢', alt: likeIcon},
    {name: '关注', alt: followIcon},
    {name: '关联', alt: kgIcon},
    {name: '营养', alt: dataIcon}
  ]
  const {labels} = props
  return (
    <div className="receipe-detials-wrapper col-lg-4 col-md-4 col-sm-4 col-xs-0">
      <div className="more-icons">
        <div className="labels-group-title"><span>更多</span></div>
        <div className="flex-box">
          {icons.map((i, index) => <MoreButton key={index} icon={i.alt} name={i.name} />)}
        </div>
      </div>
      <div className="receipe-labels">
        <div className="labels-group-title"><span>菜品标签</span></div>
        {<ColorfulLabel labels={labels} />}
      </div>
      <div className="receipe-labels">
        <div className="labels-group-title"><span>评论</span></div>
        {<ColorfulLabel labels={labels} />}
      </div>
    </div>
  )
}

function ReceipeDetails (props) {
  const [target, setTarget] = useState(props.location.search)
  const [content, setContent] = useState({
    name: '',
    desc: '',
    materials: [],
    steps: [],
    labels: []
  })

  useEffect(() => {
    const fetchData = async () => {
      const res = await getReceipeDetails(target)
      if (res.status === 200 && res.data) {
        console.log(res.data)
        setContent(res.data)
      }
    }
    fetchData()
  }, [target])

  return (
    <div className='content-container'>
      <ReceipeDetailsUI 
        name={content.name} 
        desc={content.desc} 
        cover={content.src}
        materials={content.materials}
        steps={content.steps}
      />
      <ReceipeMoreUI labels={content.labels} />
    </div>
  )
}

export default ReceipeDetails
