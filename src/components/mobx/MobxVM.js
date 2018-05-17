import React from 'react'
import {Input} from 'antd';
import {observable, binding} from 'react-mobx-vm'

class VM {
    @observable inputValue = 'default value'
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
            </div>
        )
    }

    componentDidMount() {
        console.log('vm.inputValue')
        console.log(vm.inputValue)
    }
}

export default MobxVM
