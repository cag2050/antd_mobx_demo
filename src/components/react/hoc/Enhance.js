import React from 'react'

const Enhance = (InputComponent) => class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {data: null};
    }

    componentDidMount() {
        this.setState({data: 'Hello'});
    }

    render() {
        console.log('Enhance')
        console.log(this.props)
        return <InputComponent {...this.props} data={this.state.data}/>;
    }
}

export default Enhance
