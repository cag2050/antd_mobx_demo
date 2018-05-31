import React from 'react'
import {
    Table
} from 'antd'
import './tableDemo.styl'

class TableDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            columnsData: [
                {title: 'Full Name', dataIndex: 'name', key: 'name'},
                {title: 'Full Name', dataIndex: 'name', key: 'name'},
                {title: 'Full Name', dataIndex: 'name', key: 'name'},
                {title: 'Full Name', dataIndex: 'name', key: 'name'},
                {title: 'Full Name', dataIndex: 'name', key: 'name'},
                {title: 'Full Name', dataIndex: 'name', key: 'name'},
                {title: 'Full Name', dataIndex: 'name', key: 'name'},
                {title: 'Full Name', dataIndex: 'name', key: 'name'},
                {title: 'Full Name', dataIndex: 'name', key: 'name'},
                {title: 'Full Name', dataIndex: 'name', key: 'name'},
                {title: 'Full Name', dataIndex: 'name', key: 'name'},
                {title: 'Column 8', dataIndex: 'address', key: '8'},
                {title: 'Column 8', dataIndex: 'address', key: '8'},
                {title: 'Column 8', dataIndex: 'address', key: '8'},
                {title: 'Column 8', dataIndex: 'address', key: '8'},
                {title: 'Column 8', dataIndex: 'address', key: '8'},
                {title: 'Column 8', dataIndex: 'address', key: '8'},
                {title: 'Column 8', dataIndex: 'address', key: '8'},
                {title: 'Column 8', dataIndex: 'address', key: '8'},
                {title: 'Column 8', dataIndex: 'address', key: '8'},
                {title: 'Column 8', dataIndex: 'address', key: '8'},
                {title: 'Column 8', dataIndex: 'address', key: '8'},
            ],
            dataSourceData: []
        }
    }

    componentDidMount() {
        this.setTableData()
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
            <div className='table_container'>
                <Table
                    // style={{width:'100%'}}
                    dataSource={this.state.dataSourceData}
                    columns={this.state.columnsData}
                    bordered
                />
            </div>
        )
    }
}

export default TableDemo
