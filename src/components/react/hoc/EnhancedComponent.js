import React from 'react'
import Enhance from './Enhance'

class MyComponent extends React.Component {
    render() {
        console.log('MyComponent')
        console.log(this.props)
        if (!this.props.data) return <div>Waiting...</div>;
        return <div>{this.props.data}</div>;
    }
}

export default Enhance(MyComponent)
