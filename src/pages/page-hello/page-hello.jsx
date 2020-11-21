import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { action, observable } from 'mobx'
import Frame from '../../layout/frame'
import Store from './store'
import { Button } from 'antd'

const store = new Store()

@observer
class Hello extends Component {
  componentDidMount() {
    store.testIo()
  }

  @action onClick() {
    store.content = 'hello world !!!'
  }

  render() {
    return (
      <Frame>
        <div className="page-hello">
          {store.content}
          <Button type="link" onClick={this.onClick}>
            点击
          </Button>
        </div>
      </Frame>
    )
  }
}

export default Hello
