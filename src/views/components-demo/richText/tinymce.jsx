
import React from 'react'
import RichTextEditor from '@/components/RichText/tynimce'
import { Alert } from 'antd'
import { useTitle } from 'ahooks'

const TitleContent = () => {
  return <p> 此页面用到的富文本编辑器是 <a href='https://www.tiny.cloud/docs/quick-start/'>Tinymce</a>。</p>
}

const RichTextTinymce = () => {
  useTitle('Tynimce')
  const editoInput = (value) => {
    // console.log( 'editoInput', value )
  }

  const value = '<p> 此页面用到的富文本编辑器是 <a href=\'https://www.tiny.cloud/docs/quick-start/\'>Tinymce</a>。</p>'

  return (
    <div className='app-container'>
      <Alert message={ <TitleContent /> } />
      <br/>
      <RichTextEditor value={value} editoInput={editoInput} />
    </div>
  )
}

export default RichTextTinymce
