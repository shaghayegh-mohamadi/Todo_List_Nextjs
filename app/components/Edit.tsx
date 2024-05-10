

'use client'
import React, { useState } from 'react'
import { Todo } from './Todo'

 export interface Task {
  id: string;
  task: string;
 }

 interface Props {
    task: Task;
    editTodo: (id:string, newTask: string) => void
  
  }
  

 const Edit: React.FC<Props> = ({ editTodo, task }) => {
  const [newTask ,setNewTask] = useState<string>(task.task)

  const  handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const todo = {
    //   id: task.id,
    //   task: newTask,
    // }
    editTodo(task.id, newTask,)
    setNewTask('');
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-6 ">
    <input
    value={newTask}
    onChange={(e) => setNewTask(e.target.value)}
     placeholder='Update Task'
     type='text'
     className=' w-96 px-4 py-2 outline-none focus:outline-none rounded border ' />
     <button type="submit" className="px-3 py-2 rounded bg-gray-500 text-white ml-1">Update</button>
    </form>
  )
}

export default Edit;



// 'use client'
// import React, { useState } from 'react'
// import {v4 as uuidv4} from 'uuid'
// import { Todo } from './Todo'

//  interface Props {
//     task: string;
//     editTodo: (id : string , todoId: string) => void
  
//   }
  

//  const Edit: React.FC<Props> = ({ editTodo, task }) => {
//   const [value ,setValue] = useState<string>('')

//   const  handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const todo = {
//       id: task.id,
//       task: value
//     }
//     editTodo(value,task.id)
//     setValue('');
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//     <input
//     value={value}
//     onChange={(e) => setValue(e.target.value)}
//      placeholder='Update Task'
//      type='text'
//      className=' w-96 px-4 py-2 outline-none focus:outline-none rounded border ' />
//      <button type="submit" className="px-4 py-2 rounded bg-teal-700 text-white ml-1">Update</button>
//     </form>
//   )
// }

// export default Edit;