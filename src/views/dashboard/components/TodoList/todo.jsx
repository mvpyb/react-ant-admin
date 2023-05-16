
import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const TodoItem = (props) => {
  const {
    todo = () => {
      return {}
    }
  } = props

  const [editing, setEditing] = useState(false)
  const [editVal, setEditVal] = useState(todo.text)

  const todoRef = useRef()

  const deleteTodo = () => {
    props.deleteTodo && props.deleteTodo(todo.id)
  }

  const editTodo = (value) => {
    props.editTodo && props.editTodo({ id: todo.id, value })
  }

  const toggleTodo = () => {
    props.toggleTodo && props.toggleTodo(todo.id)
  }

  const doneEdit = (e) => {
    const value = e.target.value.trim()
    if (!value) {
      deleteTodo()
    } else if (editing) {
      editTodo(value)
      setEditing(false)
    }
  }

  const cancelEdit = (e) => {
    e.target.value = todo.text
    setEditing(false)
  }

  const handleKeyUp = (e) => {
    const keyCode = e.keyCode
    if (keyCode == 13) {
      doneEdit(e)
    } else if (keyCode == 27) {
      cancelEdit()
    }
  }

  const editingTodo = () => {
    setEditing(true)
    setEditVal(todo.text)
  }

  const changeTodo = (e) => {
    const val = e.target.value.trim()
    setEditVal(val)
  }

  useEffect(() => {
    if (editing && todoRef.current) {
      todoRef.current.select()
    }
  }, [editing])

  return (
    <li className={ `todo ${todo.done ? 'completed' : ''} ${editing ? 'editing' : ''}` }>
      <div className='view'>
        <input
          checked={todo.done}
          className='toggle'
          type='checkbox'
          onChange={ toggleTodo }
        />
        <label onDoubleClick={ editingTodo } >{todo.text}</label>
        <button className='destroy' onClick={ deleteTodo } />
      </div>

      <input
        ref={todoRef}
        value={editVal}
        className='edit'
        onKeyUp={handleKeyUp}
        onBlur={doneEdit}
        onChange={changeTodo}
      />

    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  deleteTodo: PropTypes.func,
  editTodo: PropTypes.func,
  toggleTodo: PropTypes.func
}

export default TodoItem
