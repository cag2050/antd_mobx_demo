import React from 'react'
import GaeaEditor from 'gaea-editor';

class GaeaEditorDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div style={{width: '100vm', height: '85vh'}}>
                <GaeaEditor></GaeaEditor>
            </div>
        )
    }
}

export default GaeaEditorDemo
