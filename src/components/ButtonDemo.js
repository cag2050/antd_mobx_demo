import React from 'react'
import {Button} from 'antd';
// import history from '../projectTools/history'
import {inject, observer} from "mobx-react";

@inject('routingStore')
@observer
class ButtonDemo extends React.Component {

    linkTo = () => {
        this.props.routingStore.history.push('/input')
    }

    render() {
        return (
            <div>
                <Button onClick={this.linkTo}>BUTTON：点击后跳转到input页</Button>
            </div>
        )
    }
}

export default ButtonDemo
