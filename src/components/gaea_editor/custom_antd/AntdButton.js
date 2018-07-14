import React from 'react'
import {Button} from 'antd';

class AntdButton extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {};
    }
/*
    static defaultProps = {
        editSetting: {
            key: "AntdButton",
            name: "AntdButton",
    //         isContainer: false,
    //         editors: [
    //             {
    //                 field: 'Text',
    //                 text: 'Text',
    //                 type: 'string'
    //             },
    //             {
    //                 field: 'disabled',
    //                 text: 'disabled',
    //                 type: 'boolean'
    //             }
    //         ]
        }
    }
*/
    render() {
        // console.log(this.props)
        return (
            <div>
                <Button {...this.props}></Button>
            </div>
        )
    }
}

export default AntdButton
