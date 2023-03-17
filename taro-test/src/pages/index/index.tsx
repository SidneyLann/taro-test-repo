import { Component, PropsWithChildren } from 'react'
import CheckBoxes from './CheckBoxes.tsx'
import './index.scss'

export default class Index extends Component<PropsWithChildren> {

    constructor(props) {
        super(props)
        this.state = {
		checkedList: [1]
	}}
	
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

	onCheckBoxesChanged = (name, selectedValues) => {
		//this.setState({ [name]: selectedValues });
		this.setState({ "checkedList": selectedValues });
	}
	
  render () {
	const options = [];
    options.push({ value: 1, label: 'CheckBox1' })
	
    options.push({ value: 3, label: 'CheckBox2' })
	
    const checkedList = this.state.checkedList
	console.log(checkedList)
	
    return (
		<CheckBoxes name='checkedList'
					options={options}
				    value={checkedList}
				    onChange={this.onCheckBoxesChanged}
				/>
    )
  }
}
