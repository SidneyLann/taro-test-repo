import React from 'react'
import { styled } from '@linaria/react'
import { Button } from '@tarojs/components'

const Button0 = styled(Button) <{ left: string, bottom: string,  top: string, right: string, justifyContent: string,  alignItems: string, alignSelf: string, 
width: string, height: string, backgroundColor: string }>`
display: flex;
flex-direction: row;
position: relative;
justify-content: ${props => props.justifyContent};
align-items: ${props => props.alignItems};
align-self: ${props => props.alignSelf};
width: ${props => props.width};
height: ${props => props.height};
background-color: ${props => props.backgroundColor};
`

class GeneralButton extends React.Component {
  render() {
    
    const type = this.props.type? this.props.type: 'primary'
    const size = this.props.size? this.props.size: 'mini'
    
    const plain  = this.props.plain? true: false;
    const disabled  = this.props.disabled? true: false;
    
    let paddingLeft = 3;
    if(process.env.TARO_ENV === 'h5') paddingLeft = 0;

    return (
       <Button0
        type={type}  size={size} openType={this.props.openType} disabled={disabled} 
        onClick={this.props.onClick} 
       >
        {this.props.children}
       </Button0>
    )
  }
}

export default GeneralButton
