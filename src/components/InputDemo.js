import React from 'react'
import {Input} from 'antd';
import {observer} from 'mobx-react';
import {observable} from 'mobx'

@observer
class InputDemo extends React.Component {
    @observable InputText = '111'

    render() {
        return (
            <div>
                <Input placeholder="Basic usage"></Input>
            </div>
        )
    }
}

export default InputDemo
