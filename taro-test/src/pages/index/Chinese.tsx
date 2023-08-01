import { Component, PropsWithChildren } from 'react'
import { styled } from '@linaria/react'
import Taro from '@tarojs/taro'
import { View, Button, Input } from '@tarojs/components'
import { Current } from '@tarojs/taro'
import GeneralButton from './GeneralButton'

const Input0 = styled(Input)<{ width: string}>`
display: flex;
flex-direction: row;
position: relative;
text-align: center;
width: ${props => props.width};
height: 25px;
border-style: solid;
border-width: 1px;
border-color: rgba(0,255,255,1)
`

class Chinese extends Component<PropsWithChildren> {
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
          <input0 value={this.params.content} width={'200px'}/>
          <GeneralButton >test</GeneralButton>
        </View>
    )
  }
}

export default Chinese