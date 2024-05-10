
'use client'
import React, { useState } from 'react'
import Form from './Form'
import {v4 as uuidv4} from 'uuid'
import { Todo } from './Todo';
import Edit from './Edit';

interface TodoItem {
    id: string;
    task: string;
    deleteTodo: () => void;
    editTodo: () => void
    isEditing: boolean; 
  }

  
const TodoList  = () => {
    const [taskValue, setTaskValue] = useState<TodoItem[]>([]);

    const createTodo = (todo: TodoItem) => {
      setTaskValue([...taskValue, todo ])
    }

    const deleteTodo = (id: string) => {
      setTaskValue(taskValue.filter(todo => todo.id  !== id))  
    }

    const editTodo = (id:string , ) => {
      setTaskValue(taskValue.map((t) => t.id === id ? {...t,isEditing : !t.isEditing } : t))
    }

    const editTask = (id : string ,task:string) => {
      setTaskValue(taskValue.map((t) => t.id === id ? 
        {...t,task , isEditing: !t.isEditing} : t))
    }

    return(
     <div className=' text-center my-6 mt-10'>
     <h1 className='text-2xl font-bold mb-6'>Todo List App</h1>
     <div className="flex flex-col items-center ">
      <Form  createTodo={createTodo}/> 
      {
        taskValue.map((todo,i) => 
          todo.isEditing ? (
            <div className="mt-3" key={i}>
              <Edit  editTodo={editTask} task={todo} />
            </div>
           ):
           (
            <Todo task={todo.task} key={i}  
            deleteTodo={() => deleteTodo(todo.id) } 
            editTodo={() => editTodo(todo.id)}/>

          )

         )
       
     }
      </div>
     
     </div>
    );

}

export default TodoList;
