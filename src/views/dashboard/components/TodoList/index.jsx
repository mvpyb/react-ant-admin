
import React, { useState, useMemo } from 'react'
import './index.less'

import cloneDeep from 'loadsh/cloneDeep'

import Todo from './todo'

import { localStorageHandle } from '@/utils/storages'
const TODO_LIST_KEY = 'react-todos'
const defaultTodo = [
  { id : 1, text : 'star this repository', done : false },
  { id : 2, text : 'fork this repository', done : false },
  { id : 3, text : 'follow author', done : false },
  { id : 4, text : 'react-ant-admin', done : true },
  { id : 5, text : 'webpack', done : true },
  { id : 6, text : 'react', done : true },
  { id : 7, text : 'redux', done : true },
  { id : 8, text : 'react router', done : true },
  { id : 9, text : 'vite', done : true },
  { id : 10, text : 'vite-element-plus', done : true }
]

const filters = {
  all : ( todos ) => todos,
  active : ( todos ) => todos.filter( ( todo ) => !todo.done ),
  completed : ( todos ) => todos.filter( ( todo ) => todo.done )
}

const TodoList = ( props ) => {
  const [visibility, setVisibility] = useState( 'all' )

  const [todos, setTodos] = useState( localStorageHandle.get( TODO_LIST_KEY ) || defaultTodo )

  const remaining = useMemo( () => todos.filter( todo => !todo.done ).length, [todos] )

  const newPluralize = useMemo( () => remaining === 1 ? 'item' : 'items', [remaining] )

  const allChecked = useMemo( () => todos.every( todo => todo.done ), [todos] )

  const filteredTodos = useMemo( () => filters[visibility]( todos ), [todos, filters, visibility] )

  const setLocalStorage = () => {
    localStorageHandle.set( TODO_LIST_KEY, todos )
  }

  const addTodo = ( e ) => {
    const keyCode = e.keyCode
    if ( keyCode == 13 ) {
      const text = e.target.value
      const data = cloneDeep( todos )
      if ( text.trim() ) {
        data.push( {
          id : +new Date(),
          text,
          done : false
        } )
        setTodos( data )
        setLocalStorage()
      }
      e.target.value = ''
    }
  }

  const toggleTodo = ( id ) => {
    const data = cloneDeep( todos )
    const index = data.findIndex( item => item.id == id )
    data.splice( index, 1, {
      ...data[index],
      done : !data[index]['done']
    } )
    setTodos( data )
    setLocalStorage()
  }

  const deleteTodo = ( id ) => {
    const data = cloneDeep( todos )
    const index = data.findIndex( item => item.id == id )
    data.splice( index, 1 )
    setTodos( data )
    setLocalStorage()
  }

  const toggleAll = ( { done } ) => {
    const data = cloneDeep( todos )
    data.forEach( todo => {
      todo.done = done
    } )
    setTodos( data )
    setLocalStorage()
  }

  const editTodo = ( { id, value } ) => {
    const data = cloneDeep( todos )
    const index = data.findIndex( item => item.id == id )
    data.splice( index, 1, {
      ...data[index],
      text : value
    } )
    setTodos( data )
    setLocalStorage()
  }

  return (
    <section className='todoapp'>
      <header className='header'>
        <input
          className='new-todo'
          autoComplete='off'
          placeholder='Todo List'
          onKeyUp={ addTodo }
        />
      </header>

      <section className='main' style={{ display : todos.length ? 'block' : 'none' }}>
        <input
          id='toggle-all'
          checked={allChecked}
          className='toggle-all'
          type='checkbox'
          onChange={ ( e ) => toggleAll( { done : !allChecked } ) }
        />
        <label htmlFor='toggle-all' />

        <ul className='todo-list'>
          {
            filteredTodos && filteredTodos.map( ( todo, index ) => {
              return (
                <Todo
                  key={index}
                  todo={todo}
                  toggleTodo={toggleTodo}
                  editTodo={editTodo}
                  deleteTodo={deleteTodo}
                />
              )
            } )
          }
        </ul>
      </section>

      <footer style={{ display : todos.length ? 'block' : 'none' }} className='footer'>
        <span className='todo-count'>
          <strong>{remaining}</strong>
          {newPluralize} left
        </span>

        <ul className='filters'>
          {
            Object.keys( filters ).map( ( item, index ) => (
              <li key={item}>
                <a className={ `${visibility === item ? 'selected' : ''} ` } onClick={ () => setVisibility( item ) }>{ item }</a>
              </li>
            ) )
          }
        </ul>

      </footer>

    </section>
  )
}

export default TodoList
