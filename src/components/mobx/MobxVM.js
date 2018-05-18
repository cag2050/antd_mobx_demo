import React from 'react'
import {
    Input,
    Button
} from 'antd';
import {observable, binding} from 'react-mobx-vm'

class VM {
    @observable inputValue = 'default value'
    @observable currentValue = ''
}

const vm = new VM()

@binding(vm)
class MobxVM extends React.Component {

    render() {
        return (
            <div>
                <pre>{JSON.stringify(vm)}</pre>
                <pre>{vm.inputValue}</pre>
                <Input data-bind="inputValue" placeholder="Basic usage"></Input>
                <Button onClick={this.getCurrentValue}>点击获取输入框的当前值</Button>
                <pre>{vm.currentValue}</pre>
            </div>
        )
    }

    componentDidMount() {
        console.log('vm.inputValue')
        console.log(vm.inputValue)
    }

    getCurrentValue() {
        vm.currentValue = vm.inputValue
    }
}

export default MobxVM
