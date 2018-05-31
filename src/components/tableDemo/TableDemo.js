import React from 'react'
import {Table, Button} from 'antd'
// import './tableDemo.css'
import './tableDemo.styl'

class TableDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            columnsData: [
                { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name' },
                { title: 'Age', width: 100, dataIndex: 'age', key: 'age', },
                { title: 'Column 1', dataIndex: 'address', key: '1', width: 150 },
                { title: 'Column 2', dataIndex: 'address', key: '2', width: 150 },
                { title: 'Column 3', dataIndex: 'address', key: '3', width: 150 },
                { title: 'Column 4', dataIndex: 'address', key: '4', width: 150 },
                { title: 'Column 5', dataIndex: 'address', key: '5', width: 150 },
                { title: 'Column 6', dataIndex: 'address', key: '6', width: 150 },
                { title: 'Column 7', dataIndex: 'address', key: '7', width: 150 },
                { title: 'Column 8', dataIndex: 'address', key: '8' },
                {
                    title: 'Action',
                    key: 'operation',
                    // fixed: 'right',
                    width: 100,
                    render: () => <a href="javascript">action</a>,
                },
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
        this.setState({
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
                    bordered
                    // scroll={{x: true, y: 300}}
                    // scroll={{x: 'true'}}
                    scroll={{x: 1500, y: 300}}
                    // scroll={{y: 300}}
                />
            </div>
        )
    }
}

export default TableDemo
