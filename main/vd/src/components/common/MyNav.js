import React from 'react'
import { Menu, Input } from 'antd'
import { Link } from 'react-router-dom'

const MenuItem = Menu.Item
const { Search } = Input;

const navConfig = [
  {
    name: '首页',
    flag: '/'
  },
  {
    name: '菜谱架',
    flag: '/lib'
  }
]

class MyNav extends React.Component {
  constructor () {
    super()
    this.state = {
      cur: 'home'
    }
  }
  handleClick = (e) => {
    this.setState({
      cur: e.key
    })
  }
  render () {
    const {cur} = this.state
    const items = navConfig.map((i, index) => {
      return (
      <MenuItem key={i.flag}>
        <Link to={i.flag}>{i.name}</Link>
      </MenuItem>
      )
    })
    return (
      <div>
        <Menu onClick={this.handleClick} selectedKeys={[cur]} mode="horizontal">
          {items}
          <MenuItem>
          <Search placeholder="输入想要查询的菜谱" allowClear style={{ width: 300 }} />
          </MenuItem>
        </Menu>
      </div>
      
    )
  }
}

export default MyNav
