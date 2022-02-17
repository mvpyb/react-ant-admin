
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Card } from 'antd'

import { Editor } from '@tinymce/tinymce-react'

import './index.less'

const RichTextEditor = () => {
  // const [editorState, setEditorState] = useState( EditorState.createEmpty() )
  // const onEditorStateChange = ( editorState ) => setEditorState( editorState )
  const handleEditorChange = ( content, editor ) => {
    console.log( 'Content was updated:', content )
    // setContent( content )
  }
  return (
    <div className={'editor-section'}>
      <Card bordered={false}>
        <Editor
          init={{
            height : 500,
            language : 'zh_CN',
            plugins : [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar :
                  'undo redo | formatselect |fontselect fontsizeselect | bold italic backcolor forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
          }}
          onEditorChange={handleEditorChange}
        />
      </Card>
    </div>
  )
}

export default RichTextEditor
