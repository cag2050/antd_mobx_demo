import React from 'react'
import {Table, Button} from 'antd'
// import './tableDemo.css'
import './tableDemo.stylus'

class TableDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            columnsData: [
                {title: 'Full Name', dataIndex: 'name', key: 'name'},
                {title: 'Age', dataIndex: 'age', key: 'age',},
                {title: 'Column 1', dataIndex: 'address', key: '1'},
            ],
            dataSourceData: []
        }
    }

    setTableData = () => {
        const data = [];
        for (let i = 0; i < 100; i++) {
            data.push({
                key: i,
                name: `Edrward ${i}`,
                age: 32,
                address: `London Park no. ${i}`,
            });
        }
        const columnData = []
        for (let i = 0; i < 100; i++) {
            columnData.push({
                key: i,
                title: `Edrward ${i}`,
                dataIndex: `London Park no. ${i}`
            });
        }
        this.setState({
            // columnsData: columnData,
            dataSourceData: data
        })
    }

    render() {
        return (
            <div>
                <Button onClick={this.setTableData}>点击后setState（设置表格数据）(做测试用，表格标题的key重复了，报错，不用管)</Button>
                <Table
                    dataSource={this.state.dataSourceData}
                    columns={this.state.columnsData}
                    scroll={{x: true, y: 300}}
                    // scroll={{x: 100, y: 300}}
                />
            </div>
        )
    }
}

export default TableDemo
