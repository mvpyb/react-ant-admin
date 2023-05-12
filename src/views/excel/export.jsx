
import React, { Component } from 'react'
import { ProfileOutlined, FileExcelOutlined } from '@ant-design/icons'
import { getTableData } from '@/api/table'
import DocumentTitle from 'react-document-title'
import {
  Table,
  Tag,
  Form,
  Button,
  Input,
  Radio,
  Select,
  message,
  Divider
} from 'antd'

const { Item } = Form
const columns = [
  {
    title : 'Id',
    dataIndex : 'id',
    key : 'id',
    width : 200,
    align : 'center'
  },
  {
    title : 'Title',
    dataIndex : 'title',
    key : 'title',
    width : 200,
    align : 'center'
  },
  {
    title : 'Author',
    key : 'author',
    dataIndex : 'author',
    width : 100,
    align : 'center',
    render : ( author ) => <Tag key={author}>{author}</Tag>
  },
  {
    title : 'Readings',
    dataIndex : 'readings',
    key : 'readings',
    width : 195,
    align : 'center'
  },
  {
    title : 'Date',
    dataIndex : 'date',
    key : 'date',
    width : 195,
    align : 'center'
  }
]

class Excel extends Component {
  _isMounted = false

  state = {
    list : [],
    filename : 'excel-file',
    autoWidth : true,
    bookType : 'xlsx',
    downloadLoading : false,
    selectedRows : [],
    selectedRowKeys : []
  }

  fetchData = async() => {
    try {
      const response = await getTableData()
      const { list } = response.data
      if ( this._isMounted ) {
        this.setState( { list } )
      }
    } catch ( e ) {
      if ( this._isMounted ) {
        this.setState( { list : [] } )
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

  onSelectChange = ( selectedRowKeys, selectedRows ) => {
    this.setState( { selectedRows, selectedRowKeys } )
  }

  handleDownload = ( type ) => {
    if ( type === 'selected' && this.state.selectedRowKeys.length === 0 ) {
      message.error( '至少选择一项进行导出' )
      return
    }
    this.setState( {
      downloadLoading : true
    } )
    import( '@/vendor/Export2Excel' ).then( ( excel ) => {
      const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date']
      const filterVal = ['id', 'title', 'author', 'readings', 'date']
      const list = type === 'all' ? this.state.list : this.state.selectedRows
      const data = this.formatJson( filterVal, list )
      excel.export_json_to_excel( {
        header : tHeader,
        data,
        filename : this.state.filename,
        autoWidth : this.state.autoWidth,
        bookType : this.state.bookType
      } )

      this.setState( {
        selectedRowKeys : [], // 导出完成后将多选框清空
        downloadLoading : false
      } )
    } )
  }

  formatJson( filterVal, jsonData ) {
    return jsonData.map( v => filterVal.map( j => v[j] ) )
  }

  filenameChange = ( e ) => {
    this.setState( {
      filename : e.target.value
    } )
  }

  autoWidthChange = ( e ) => {
    this.setState( {
      autoWidth : e.target.value
    } )
  }

  bookTypeChange = ( value ) => {
    this.setState( {
      bookType : value
    } )
  }

  render() {
    const { selectedRowKeys } = this.state

    const rowSelection = {
      selectedRowKeys,
      onChange : this.onSelectChange
    }

    return (
      <DocumentTitle title= {'Export'}>
        <div className='app-container'>
          <div style={{ marginTop : '20px' }}>
            <Form layout='inline'>
              <Item label='文件名:'>
                <Input
                  style={{ width : '250px' }}
                  prefix={
                    <ProfileOutlined style={{ color : 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder='请输入文件名(默认excel-file)'
                  onChange={this.filenameChange}
                />
              </Item>
              <Item label='单元格宽度是否自适应:'>
                <Radio.Group onChange={this.autoWidthChange} value={this.state.autoWidth} >
                  <Radio value={true}>是</Radio>
                  <Radio value={false}>否</Radio>
                </Radio.Group>
              </Item>
              <Item label='文件类型:'>
                <Select
                  defaultValue='xlsx'
                  style={{ width : 120 }}
                  onChange={this.bookTypeChange}
                >
                  <Select.Option value='xlsx'>xlsx</Select.Option>
                  <Select.Option value='csv'>csv</Select.Option>
                  <Select.Option value='txt'>txt</Select.Option>
                </Select>
              </Item>
              <Item>
                <Button
                  type='primary'
                  icon={<FileExcelOutlined />}
                  onClick={this.handleDownload.bind( null, 'all' )}
                >
                  全部导出
                </Button>
              </Item>
              <Item>
                <Button
                  type='primary'
                  icon={<FileExcelOutlined />}
                  onClick={this.handleDownload.bind( null, 'selected' )}
                >
                  导出选择项
                </Button>
              </Item>
            </Form>
          </div>
          <Divider />
          <Table
            bordered
            size={'small'}
            columns={columns}
            rowKey={( record ) => record.id}
            dataSource={this.state.list}
            pagination={true}
            rowSelection={rowSelection}
            loading={this.state.downloadLoading}
          />
        </div>
      </DocumentTitle>
    )
  }
}

export default Excel
