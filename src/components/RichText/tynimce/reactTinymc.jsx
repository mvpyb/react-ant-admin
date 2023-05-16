
import React from 'react'
import { Card } from 'antd'
import { Editor } from '@tinymce/tinymce-react'
import styles from './index.module.scss'

const RichTextEditor = () => {
  const handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content)
  }
  return (
    <div className={styles.editorSection}>
      <Card bordered={false}>
        <Editor
          init={{
            height: 500,
            language: 'zh_CN',
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar:
                  'undo redo | formatselect |fontselect fontsizeselect | bold italic backcolor forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
          }}
          onEditorChange={handleEditorChange}
        />
      </Card>
    </div>
  )
}

export default RichTextEditor
