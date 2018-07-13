import React from 'react'
import GaeaEditor from 'gaea-editor';
import BasicComponents from 'gaea-basic-components';
import AntdButton from './AntdButton'

class GaeaEditorDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div style={{width: '100vm', height: '85vh'}}>
                <GaeaEditor
                    componentClasses={[...BasicComponents, AntdButton]}></GaeaEditor>
            </div>
        )
    }
}

export default GaeaEditorDemo
