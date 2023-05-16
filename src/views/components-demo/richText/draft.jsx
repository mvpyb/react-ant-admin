
import React from 'react'
import RichTextEditor from '@/components/RichText/draf'
import { Alert } from 'antd'
import { useTitle } from 'ahooks'

const TitleContent = () => {
  return <p> 此页面用到的富文本编辑器是 <a href='https://github.com/jpuri/react-draft-wysiwyg'>react-draft-wysiwyg</a>。</p>
}

const RichTextEditorDemo = () => {
  useTitle('富文本')
  return (
    <div className='app-container'>
      <Alert message={ <TitleContent /> } />
      <br/>
      <RichTextEditor />
    </div>
  )
}

export default RichTextEditorDemo
