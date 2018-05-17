import React from 'react'
import {Input} from 'antd';
import {
    observable,
} from 'mobx'
import {observer} from 'mobx-react'

@observer
class InputDemo extends React.Component {
    @observable inputValue = 'default value'

    render() {
        return (
            <div>
                <Input defaultValue={this.inputValue} onChange={this.handleChange} placeholder="Basic usage"></Input>
                {this.inputValue}
            </div>
        )
    }
    handleChange = (e) => {
        this.inputValue = e.target.value
    }

    componentDidMount() {
        console.log(this.inputValue)
    }

}

export default InputDemo
