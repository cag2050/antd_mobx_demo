import React from 'react'
import {Input} from 'antd';
import {
    observable,
} from 'mobx'
import {
    observer,
    inject
} from 'mobx-react'
// import ChangeNameStore from "../../store/modules/ChangeNameStore";

@inject('ChangeNameStore')
@observer
class InputDemo extends React.Component {
    @observable form = {
        inputValue: 'default value'
    }

    render() {
        return (
            <div>
                <Input defaultValue={this.form.inputValue} onChange={this.handleChange}
                       placeholder="Basic usage"></Input>
                {this.inputValue}
                <div>引用provider注入的store（利用context原理）：</div>
                <div>input框的onChange事件发生时，执行store的action，因为会变化：</div>
                {this.props.ChangeNameStore.name}
            </div>
        )
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.form.inputValue = e.target.value
        // 执行store的action
        this.props.ChangeNameStore.changeName()
    }

    componentDidMount() {
        console.log(this.form.inputValue)
    }

}

export default InputDemo
