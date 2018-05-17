import React from 'react'
import {Input} from 'antd';
import {
    observable,
} from 'mobx'
import {observer} from 'mobx-react'

@observer
class InputDemo extends React.Component {
    @observable form = {
        inputValue: 'default value'
    }

    render() {
        return (
            <div>
                <Input defaultValue={this.form.inputValue} onChange={this.handleChange} placeholder="Basic usage"></Input>
                {this.inputValue}
            </div>
        )
    }
    handleChange = (e) => {
        console.log(e.target.value)
        this.form.inputValue = e.target.value
    }

    componentDidMount() {
        console.log(this.inputValue)
    }

}

export default InputDemo
