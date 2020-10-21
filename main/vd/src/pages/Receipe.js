import React from 'react'
import '../assets/css/Receipe/receipe.scss'

import Cover from '../components/common/Cover'
import ReceipeTagGroup from '../components/Receipe/ReceipeTagGroup'
import CornerLabelBox from '../components/common/CornerLabelBox'

import {Table, Steps} from 'antd'

import axios from 'axios'

class Receipe extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  componentDidMount () {
    console.log(this.props)
    axios.get('/api/receipe').then((res) => {
      console.log(res)
    })
  }


  render () {
    const { Step } = Steps;
    const src = '//www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
    // const desc = '这里是简介'
    const labels = ['好吃', '肉', '特色']
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
