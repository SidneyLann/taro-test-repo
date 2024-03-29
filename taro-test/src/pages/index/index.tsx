import { Component, PropsWithChildren } from 'react'
import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import CheckBoxes from './CheckBoxes.tsx'
import './index.scss'

export default class Index extends Component<PropsWithChildren> {
  constructor(props) {
        super(props)
        this.state = {
		checkedList: [1]
  }
  }
	
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  uploadSingleFile = (file, succ, err) => {
      if (file.size > 10 * 1024 * 1024) {
          throw Error('鏂囦欢涓嶈兘澶т簬10鍏�');
      }

      const header = {}
      //header['content-type'] = 'multipart/form-data'
      header['token'] = "ey3JhbGciOiJIUllcyI6WyIxMjExMTEiLCI5MDAN4gPc-kDysugoQSuotKOIWW_G3RHfz8NsXvFKJvOVN7He5t7Pr-QYmcdZgmlwbi8ODsMzlQ"

      const params = {
          url: "https://www.pc8g.com/pcng-biz-member/sys/file/upload",
          name: 'uploadFile',
          header: header,
          filePath: file.path,
          success: succ,
          fail: err
      }

      console.log('params');
      console.log(params);
      Taro.uploadFile(params);
  }
  
  chooseImage = (event) => {
      Taro.chooseImage({
          count: 4,
          success: (result) => {
              const images = result.tempFiles;
              images.forEach((item, idx) => {
                  const succ = (result) => {
                      console.log('succ:')
                      console.log(result)
                  }

                  const err = (result) => {
                      console.log('err:')
                      console.log(result)
                  }

                  this.uploadSingleFile(item, succ, err);
              })
          }
      })
  }
  
  onCheckBoxesChanged = (name, selectedValues) => {
	//this.setState({ [name]: selectedValues });
	this.setState({ "checkedList": selectedValues });
  }
  
  encode = (event) => {
    Taro.navigateTo({ url: 'pages/index/Chinese?content=中文'})
  }

  render () {
	const options = [];
    options.push({ value: 1, label: 'CheckBox1' })
    options.push({ value: 3, label: 'CheckBox2' })
	
    const checkedList = this.state.checkedList
	console.log(checkedList)
	
    return (
        <View>
        <CheckBoxes options={options} onChange={this.onCheckBoxesChanged} />
          <Button onClick={this.encode}>中文</Button>
        </View>
    )
  }
}
