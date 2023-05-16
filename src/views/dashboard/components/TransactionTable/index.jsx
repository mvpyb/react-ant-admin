import React, { Component } from 'react'
import { Table, Tag } from 'antd'
import CountUp from 'react-countup'
import { getDashboardList } from '@/api/table'

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    ellipsis: true,
    key: 'date'
  },
  {
    title: 'Order_No',
    dataIndex: 'order_no',
    key: 'order_no',
    ellipsis: true
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    width: 100,
    ellipsis: true,
    render: (tag) => (
      <Tag color={tag.toLocaleLowerCase() === 'pending' ? 'magenta' : 'green'} key={tag}>
        {tag}
      </Tag>
    )
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    ellipsis: true,
    render: (val) => (
      <CountUp
        start={1}
        end={val}
        decimals={2}
        duration={3}
        useEasing={true}
        separator={','}
        decimal={'.'}
        prefix={'$'}
        suffix={''}
      />
    )
  },
  {
    title: 'Name',
    dataIndex: 'name',
    ellipsis: true,
    key: 'name'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    // width : 200,
    ellipsis: true
  }
]

class TransactionTable extends Component {
  _isMounted = false

  state = {
    list: []
  }

  fetchData = async() => {
    try {
      const response = await getDashboardList()
      const { list } = response.data
      if (this._isMounted) {
        this.setState({ list })
      }
    } catch (e) {
      if (this._isMounted) {
        this.setState({ list: [] })
      }
    }
  }

  componentDidMount() {
    this._isMounted = true
    this.fetchData()
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    return (
      <Table
        columns={columns}
        rowKey={'id'}
        dataSource={this.state.list}
        pagination={false}
      />
    )
  }
}

export default TransactionTable
