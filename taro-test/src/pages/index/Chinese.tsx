import { Component, PropsWithChildren } from 'react'
import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { Current } from '@tarojs/taro'

export default class Chinese extends Component<PropsWithChildren> {
  constructor(props) {
        super(props)

		this.params = Current.router.params;
  }
	
  params
	
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  render () {
	
    return (
        <View>
          {this.params.content}
        </View>
    )
  }
}
