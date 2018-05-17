import React from 'react'
import {Input} from 'antd';
import {
    observable,
    // action
} from 'mobx'
import {observer} from 'mobx-react'

@observer
class InputDemo extends React.Component {
    @observable inputValue = 'default value'

    render() {
        return (
            <div>
                <Input defaultValue={this.inputValue} placeholder="Basic usage"></Input>
            </div>
        )
    }

    componentDidMount() {
        console.log(this.inputValue)
    }
}

export default InputDemo
