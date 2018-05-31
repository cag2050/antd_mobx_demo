import React from 'react'
import {inject, observer} from 'mobx-react';

@inject('routingStore')
@observer
class MobxRouterDemo extends React.Component {

    render() {
        const {
            location,
            push,
            goBack
        } = this.props.routingStore;

        return (
            <div>
                <div>{location.pathname}</div>
                <button onClick={() => push('/mobx_router?a=aaa')}>Change url</button>
                <button onClick={() => goBack()}>Go Back</button>
            </div>
        )
    }
}

export default MobxRouterDemo
