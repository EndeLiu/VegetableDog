import React from 'react'
import '../assets/css/Receipe/receipe.scss'

import Cover from '../components/common/Cover'
import ReceipeTagGroup from '../components/Receipe/ReceipeTagGroup'
import CornerLabelBox from '../components/common/CornerLabelBox'

import {Table, Steps} from 'antd'

import axios from 'axios'

class Receipe extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      target: null
    }
  }

  componentDidMount () {
    console.log(this.props)
    axios.get('/api/receipe/details' + this.props.location.search).then((res) => {
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
    const dataSource = [
      {
        key: '1',
        name: '麻辣香肠',
        count: 1,
        unit: '包'
      },
      {
        key: '2',
        name: '黄瓜',
        count: 1,
        unit: '根'
      },
      {
        key: '3',
        name: '蒜',
        count: '适量',
        unit: '/'
      },
      {
        key: '4',
        name: '香葱',
        count: '适量',
        unit: '/'
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
      },
      {
        title: '单位',
        dataIndex: 'unit',
        key: 'unit',
      },
    ]

    if (this.state.target) {
      src = this.state.target.src
      labels = this.state.target.labels
    }

    return (
      <div className="receipe-page">
        <div className="row-flex top">
          <div className="receipe-base-info">     
            <CornerLabelBox label={'简介'}> 
              <Cover src={src} desc="12" />
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
              <Steps progressDot current={1} direction="vertical">
                <Step title="Finished" description="This is a description. This is a description." />
                <Step title="Finished" description="This is a description. This is a description." />
                <Step title="In Progress" description="This is a description. This is a description." />
                <Step title="Waiting" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
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
