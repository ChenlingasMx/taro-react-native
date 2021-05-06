import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { connect } from 'react-redux'
import './index.less'


class Index extends Component {


  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { global: { name } } = this.props
    return (
      <View className='index'>
        <Text>{name}</Text>
        <Button type='primary' plain={false} onClick={() => Taro.navigateTo({ url: '/pages/detail/index' })}>go detail</Button>
      </View>
    )
  }
}
export default connect(
  ({ global }) => ({
    global
  }),
  ({ global }) => ({
    ...global
  }))(Index)
