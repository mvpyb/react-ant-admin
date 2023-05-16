
import React from 'react'
import TagList from './TagList'
import styles from './index.module.scss'

const TagsView = () => {
  return (
    <div className={ styles.tagsViewContainer }>
      <TagList />
    </div>
  )
}

export default TagsView
