
import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Upload, message } from 'antd'
import XLSX from 'xlsx'
import SvgIcon from '@/components/SvgIcon'
import './index.less'

const { Dragger } = Upload

const getHeaderRow = ( sheet ) => {
  const headers = []
  const range = XLSX.utils.decode_range( sheet['!ref'] )
  let C
  const R = range.s.r

  for ( C = range.s.c; C <= range.e.c; ++C ) {
    const cell = sheet[XLSX.utils.encode_cell( { c : C, r : R } )]
    let hdr = 'UNKNOWN ' + C
    if ( cell && cell.t ) hdr = XLSX.utils.format_cell( cell )
    headers.push( hdr )
  }
  return headers
}

const isExcel = ( file ) => {
  return /\.(xlsx|xls|csv)$/.test( file.name )
}

class UploadExcel extends Component {
  static propTypes = {
    uploadSuccess : PropTypes.func.isRequired
  }

  state = {
    excelData : {
      header : null,
      results : null
    }
  }

  draggerProps = () => {
    const _this = this
    return {
      name : 'file',
      multiple : false,
      accept : '.xlsx, .xls',
      onChange( info ) {
        const { status } = info.file
        if ( status === 'done' ) {
          message.success( `${info.file.name} 文件上传成功` )
        } else if ( status === 'error' ) {
          message.error( `${info.file.name} 文件上传失败` )
        }
      },
      beforeUpload( file, fileList ) {
        if ( !isExcel( file ) ) {
          message.error( '仅支持上传.xlsx, .xls, .csv 文件' )
          return false
        }
      },
      customRequest( e ) {
        _this.readerData( e.file ).then( () => {
          e.onSuccess()
        } )
      }
    }
  }

  readerData = ( rawFile ) => {
    return new Promise( ( resolve, reject ) => {
      const reader = new FileReader()
      reader.onload = ( e ) => {
        const data = e.target.result
        const workbook = XLSX.read( data, { type : 'array' } )
        const firstSheetName = workbook.SheetNames[0]
        const worksheet = workbook.Sheets[firstSheetName]
        const header = getHeaderRow( worksheet )
        const results = XLSX.utils.sheet_to_json( worksheet )
        this.generateData( { header, results } )
        resolve()
      }
      reader.readAsArrayBuffer( rawFile )
    } )
  }

  generateData = ( { header, results } ) => {
    this.setState( {
      excelData : { header, results }
    } )
    this.props.uploadSuccess && this.props.uploadSuccess( this.state.excelData )
  }

  render() {
    return (
      <div className={ 'upload-section' }>
        <Dragger {...this.draggerProps()}>
          <p className='ant-upload-drag-icon'>
            <SvgIcon iconClass={'upload'} className={'upload'} />
          </p>
          <p className='ant-upload-text'>
            Drop excel file here or click here
          </p>
        </Dragger>
      </div>
    )
  }
}

export default UploadExcel
