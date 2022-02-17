
import React, { useState } from 'react'
import { Alert } from 'antd'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const getItems = count =>
  Array.from( { length : count }, ( v, k ) => k ).map( k => ( {
    id : `item-${k}`,
    content : `item ${k}`
  } ) )

const reorder = ( list, startIndex, endIndex ) => {
  const result = Array.from( list )
  const [removed] = result.splice( startIndex, 1 )
  result.splice( endIndex, 0, removed )

  return result
}

const grid = 8

const getItemStyle = ( isDragging, draggableStyle ) => ( {
  userSelect : 'none',
  padding : grid * 2,
  margin : `0 0 ${grid}px 0`,

  // 拖动时改变背景颜色
  background : isDragging ? 'lightgreen' : 'grey',

  // 我们需要将样式应用在可拖放的物体上
  ...draggableStyle
} )

const getListStyle = isDraggingOver => ( {
  background : isDraggingOver ? 'lightblue' : 'lightgrey',
  padding : grid,
  width : 250
} )

const TitleContent = () => {
  // return <p> 此页面用到的富文本编辑器是 <a href='https://www.npmjs.com/package/react-draggable'>react-draggable</a>。</p>
  return <p> 此页面用到依赖是 <a href='https://github.com/atlassian/react-beautiful-dnd'>react-beautiful-dnd</a>。</p>
}

const DragList = () => {
  const [items, setItems] = useState( getItems( 5 ) )

  // const onBeforeCapture = () => {
  //
  // }
  // const onBeforeDragStart = () => {
  //
  // }
  // const onDragStart = () => {
  //
  // }
  // const onDragUpdate = () => {
  //
  // }
  const onDragEnd = ( result ) => {
    // dropped outside the list
    if ( !result.destination ) {
      return
    }

    const newItems = reorder(
      items,
      result.source.index,
      result.destination.index
    )

    setItems( newItems )
  }

  return (
    <div className='app-container'>
      <Alert message={ <TitleContent /> } />
      <br/>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='droppable'>
          {( provided, snapshot ) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle( snapshot.isDraggingOver )}
            >
              {items.map( ( item, index ) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {( provided, snapshot ) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ) )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default DragList
