
import React, { useState, useEffect, useRef } from 'react'
import { Card } from 'antd'
import PropTypes from 'prop-types'
import load from './dynamicLoadScript'
import defaultToolBar from './toolbar'
import styles from './index.module.less'

const tinymceCDN = 'https://resources.shadowcreator.com/project-sources/lib/tinymce5.7.1/tinymce.min.js'
const languageTypeList = {
  'en' : 'en',
  'zh' : 'zh_CN',
  'es' : 'es_MX',
  'ja' : 'ja'
}

const RichTextEditor = ( {
  tinymceId = `react-tinymce-${+new Date()}${( Math.random() * 1000 ).toFixed( 0 ) + ''}`,
  value,
  toolbar,
  menubar = 'file edit insert view format table tools tc help',
  height = 600,
  width = 'auto',
  elStyle = {
    left : 0,
    width : 0
  },
  editoInput
} ) => {
  const [hasChange, setHasChange] = useState( false )
  const [hasInit, setHasInit] = useState( false )
  const [fullscreen, setFullscreen] = useState( false )
  const [containerWidth, setContainerWidth] = useState( width )

  const el = useRef( null )

  const getWidth = () => {
    if ( /^[\d]+(\.[\d]+)?$/.test( width ) ) {
      return `${width}px`
    }
    return width
  }

  useEffect( async() => {
    await init()

    setContainerWidth( getWidth() )

    window.addEventListener( 'scroll', getScroll, true )
    return () => {
      window.removeEventListener( 'scroll', getScroll, true )
      destroyTinymce()
    }
  }, [] )

  useEffect( async() => {
    if ( !hasChange && hasInit ) {
      // setContent( value || '' )
    }
  }, [hasChange, hasInit] )

  const getScroll = ( e ) => {

  }

  const init = () => {
    load( tinymceCDN, async( err ) => {
      if ( err ) {
        this.$message.error( err.message )
        return
      }
      await initTinymce()
    } )
  }

  const initTinymce = async() => {
    await window.tinymce.init( {
      selector : `#${tinymceId}`,
      language : languageTypeList['zh'],
      // language_url : require( './utils/language.js' ),
      height,
      body_class : 'panel-body ',
      object_resizing : true,
      toolbar : toolbar && toolbar.length > 0 ? toolbar : defaultToolBar,
      // menubar,
      // plugins : plugins.join( ',' ),
      end_container_on_empty_block : true,
      powerpaste_word_import : 'clean',
      code_dialog_height : 450,
      code_dialog_width : 1000,
      advlist_bullet_styles : 'square',
      advlist_number_styles : 'default',
      imagetools_cors_hosts : ['www.tinymce.com', 'codepen.io'],
      default_link_target : '_blank',
      link_title : false,
      nonbreaking_force_tab : true,

      toolbar_mode : 'sliding',
      content_css : '/static/custorm.css?rev=' + new Date().getTime(),
      content_style : '.minganci { color: red; } em.minganci { font-style : normal; } p { margin : 0; padding : 0; }',
      lineheight_formats : '1 1.1 1.2 1.3 1.4 1.5 1.75 2',
      fontsize_formats : '12px 14px 16px 18px 24px 36px',
      file_picker_types : 'file image media',

      file_picker_callback : function( cb, value, meta ) {
        // console.log( 'file_picker_callback meta', meta )
        // console.log( 'file_picker_callback value', value )
      },
      init_instance_callback : editor => {
        // console.log( 'init_instance_callback', props.value )
        if ( value ) {
          editor.setContent( value )
        }
        setHasInit( true )
        editor.on( 'KeyUp SetContent SetAttrib Change', () => {
          setHasChange( true )
          editoInput( editor.getContent() )

          console.log( 'get', window.tinymce.get( tinymceId ) )
        } )
      },
      setup( editor ) {
        editor.on( 'FullscreenStateChanged', ( e ) => {
          setFullscreen( e.state )
        } )
      }
    } )
  }

  const destroyTinymce = () => {
    const tinymce = window.tinymce.get( tinymceId )
    if ( fullscreen ) {
      tinymce.execCommand( 'mceFullScreen' )
    }

    if ( tinymce ) {
      tinymce.destroy()
    }
  }

  // eslint-disable-next-line no-unused-vars
  const setContent = ( value ) => {
    window.tinymce && window.tinymce.get( tinymceId ).setContent( value )
  }

  // eslint-disable-next-line no-unused-vars
  const getContent = ( value ) => {
    window.tinymce && window.tinymce.get( tinymceId ).getContent( value )
  }

  return (
    <div className={`editorSection ${fullscreen ? styles.fullscreen : ''}`} style={{ width : containerWidth }}>
      <Card bordered={false}>
        <div ref={el} className={styles.tinymceContainer}>
          <textarea id={tinymceId} className={styles.tinymceTextarea} />
        </div>
      </Card>
    </div>
  )
}

// props校验
RichTextEditor.propTypes = {
  tinymceId : PropTypes.string,
  value : PropTypes.string,
  toolbar : PropTypes.string,
  menubar : PropTypes.string,
  height : PropTypes.oneOfType( [
    PropTypes.string,
    PropTypes.number
  ] ),
  width : PropTypes.oneOfType( [
    PropTypes.string,
    PropTypes.number
  ] ),
  elStyle : PropTypes.object,
  editoInput : PropTypes.func
  // elStyle : PropTypes.objectOf( PropTypes.string )
}

export default RichTextEditor
