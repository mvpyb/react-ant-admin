
import React, { useRef, useMemo, useState } from 'react'
import { connect } from 'react-redux'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { DELETE_TAGS, CLEAR_ALL_TAGS, CLOSE_OTHERS_TAGS } from '@/store/reducers/tagsView'
import { Scrollbars } from 'react-custom-scrollbars'
import { Tag } from 'antd'
import { isExternal } from '@/utils/validate'
import styles from './index.module.less'

const TagList = ( props ) => {
  // console.log( 'TagList', { ...props } )
  const { tags, dispatch, defaultTags } = props
  const tagListContainer = useRef()
  const location = useLocation()
  const currentPath = location.pathname
  const navigate = useNavigate()

  const contextMenuContainer = useRef()
  const [menuVisible, setMenuVisible] = useState( false )
  const [left, setLeft] = useState( 0 )
  const [top, setTop] = useState( 0 )
  const [currentTag, setCurrentTag] = useState( {} )

  // 删除外链
  const filterExternalLink = ( lists ) => {
    return lists.filter( v => !isExternal( v.path ) )
  }

  const tagLists = useMemo( () => {
    return filterExternalLink( tags )
  }, [tags] )

  const handleClose = async( e, tag ) => {
    e.preventDefault()

    dispatch( DELETE_TAGS( tag ) )
    updatePage( tag.path )
  }

  const handleClick = ( path ) => {
    navigate( path )
  }
  const openContextMenu = ( e, tag ) => {
    e.preventDefault()

    const menuMinWidth = 105
    const clickX = e.clientX
    const clickY = e.clientY // 事件发生时鼠标的Y坐标
    const el = tagListContainer.current
    const offsetLeft = el.getBoundingClientRect().left // container margin left
    const offsetWidth = el.offsetWidth // container width
    const maxLeft = offsetWidth - menuMinWidth // left boundary
    const marginRight = clickX - offsetLeft + 15 // 15: margin right

    if ( marginRight > maxLeft ) {
      setLeft( maxLeft )
    } else {
      setLeft( marginRight )
    }
    setTop( clickY )
    setMenuVisible( true )
    setCurrentTag( tag )
  }
  const handleCloseOtherTags = () => {
    dispatch( CLOSE_OTHERS_TAGS( currentTag ) )
    navigate( currentTag.path )
    closeContextMenu()
  }
  const handleCloseAllTags = ( ) => {
    dispatch( CLEAR_ALL_TAGS() )
    navigate( defaultTags[0]['path'] )
    closeContextMenu()
  }

  const closeContextMenu = () => setMenuVisible( false )

  const updatePage = ( path ) => {
    const len = tagLists.length
    if ( len <= 0 ) return
    const lastPath = tagLists[len - 1].path

    let goPath
    // 如果删除的是当前页面，则删除之后，最后一个tag 切换成激活页面
    if ( path == currentPath ) {
      // 如果关闭的是最后一个tag
      if ( lastPath == currentPath ) {
        if ( len >= 2 ) {
          goPath = tagLists[len - 2].path
        } else {
          goPath = tagLists[0].path
        }
      } else {
        goPath = tagLists[len - 1].path
      }
    } else {
      // 如果删除的是其他页面，则删除之后，激活页面不变
      goPath = currentPath
    }
    navigate( goPath )
  }

  return (
    <>
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        hideTracksWhenNotNeeded={true}
        renderView={( props ) => (
          <div {...props} className={styles.scrollbarContainer} />
        )}
        renderTrackVertical={( props ) => (
          <div {...props} className={ styles.scrollbarTrackVertical } />
        )}
      >
        <ul className={ styles.tagsWrap } ref={ tagListContainer }>
          { tagLists.length > 0 && tagLists.map( tag => (
            <li key={tag.path}>
              <Tag
                onClose={( e ) => handleClose( e, tag )}
                closable={ tag.unRemove !== true }
                onClick={() => handleClick( tag.path )}
                onContextMenu={( e ) => openContextMenu( e, tag )}
                color={currentPath === tag.path ? '#55acee' : ''}
              >
                <Link to={ tag.path }>
                  {
                    currentPath === tag.path ? <span className={ styles.active } /> : null
                  }
                  { tag.title }
                </Link>
              </Tag>
            </li>
          ) )}
        </ul>
      </Scrollbars>

      {menuVisible ? (
        <ul
          className={ styles.contextmenu }
          style={{ left : `${left}px`, top : `${top}px` }}
          ref={ contextMenuContainer }
        >
          <li onClick={handleCloseOtherTags}>关闭其他</li>
          <li onClick={handleCloseAllTags}>关闭所有</li>
        </ul>
      ) : null}

    </>
  )
}

const mapStateToProps = state => {
  return {
    ...state.tagsView
  }
}

export default connect( mapStateToProps )( TagList )
