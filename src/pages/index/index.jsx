import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { connect } from 'react-redux'
import './index.less'


class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { global: { name } } = this.props
    return (
      <View className='index'>
        <Text>{name}</Text>
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
