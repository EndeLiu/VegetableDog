import React from 'react'
import '../assets/css/Receipe/receipe.scss'

import Cover from '../components/common/Cover'
import ReceipeTagGroup from '../components/Receipe/ReceipeTagGroup'
import CornerLabelBox from '../components/common/CornerLabelBox'

import {Table, Steps} from 'antd'

import {getReceipeDetails} from '../api/index'

class Receipe extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      target: null,
      curStep: 100
    }
  }

  componentDidMount () {
    console.log(this.props)
    getReceipeDetails(this.props.location.search).then((res) => {
      if (res.status === 200 && res.data) {
        this.setState({
          target: res.data
        })
      }
    })
  }


  render () {
    const { Step } = Steps;
    let src = '../assets/img/noCover.png'
    // const desc = '这里是简介'
    let labels = ['好吃', '肉', '特色']
    let desc = ''
    const dataSource = [
      {
        key: '1',
        name: '麻辣香肠',
        count: '1包',
      },
      {
        key: '2',
        name: '黄瓜',
        count: '1根',
      },
      {
        key: '3',
        name: '蒜',
        count: '适量',
      },
      {
        key: '4',
        name: '香葱',
        count: '适量',
      },
    ];
    
    const columns = [
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '数量',
        dataIndex: 'count',
        key: 'count',
      }
    ]
    let steps = []

    if (this.state.target) {
      const {target} = this.state
      src = target.src
      labels = target.labels
      desc = target.desc
      if (target.steps) {
        steps = target.steps.map((i, index) => 
          <Step key={index} title={index} description={i.desc} />
        )
      }
    }

    return (
      <div className="receipe-page">
        <div className="row-flex top">
          <div className="receipe-base-info">     
            <CornerLabelBox label={'简介'}> 
              <Cover src={src} desc={desc} />
              <ReceipeTagGroup tags={labels} />
            </CornerLabelBox>   
          </div>
          <div className="receipe-materials">
            <CornerLabelBox label={'材料'}>
              <Table bordered dataSource={dataSource} columns={columns} pagination={false} />  
            </CornerLabelBox>
          </div>
          <div className="receipe-make-progress">
            <CornerLabelBox label={'步骤'}>
              <Steps progressDot current={this.state.curStep} direction="vertical">
                {steps}
              </Steps>
            </CornerLabelBox>
          </div>
        </div>
        <div className="row-flex bottom">
          <CornerLabelBox label={'其他'}>

          </CornerLabelBox>
        </div>
      </div>
    )
  }
}

export default Receipe
