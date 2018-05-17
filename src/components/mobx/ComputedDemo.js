import React from 'react'
import {Button} from 'antd'
import {
    observable,
    computed,
    action
} from 'mobx'
import {observer} from 'mobx-react'

@observer
class ComputedDemo extends React.Component {
    @observable form = {
        price: 2,
        account: 1
    }

    render() {
        return (
            <div>
                {this.form.account} * {this.form.price} = {this.total}
                <Button onClick={this.add}>每次点击加1</Button>
            </div>
        )
    }

    @computed
    get total() {
        return this.form.price * this.form.account;
    }

    @action.bound
    add () {
        this.form.account += 1
    }

}

export default ComputedDemo
