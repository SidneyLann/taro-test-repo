import React from 'react'
import { CheckboxGroup, Checkbox } from '@tarojs/components'

class CheckBoxes extends React.Component {
    onGroupChanged = (event) => {
        console.log('CheckBoxes onGroupChanged')
       const selectedValues = event.detail.value;
       this.props.onChange(this.props.name, selectedValues)
    }
    
  render() {
	const options = this.props.options;
    const value = this.props.value;

    return (
    <CheckboxGroup  onChange={this.onGroupChanged}>
    {options.map((option, idx) => {
     const isChecked = value? value.includes(option.value)? true: false: false;
     
     return (
      <Checkbox key={idx} value={option.value} checked={isChecked}>{option.label}</Checkbox>
     )})}
    </CheckboxGroup>
    )
  }
}

export default CheckBoxes
