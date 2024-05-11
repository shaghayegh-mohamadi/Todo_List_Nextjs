'use client'
import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import { Todo } from './Todo'

 interface Props {
  createTodo: (todo: any) => void;
 }
   

 const Form: React.FC<Props> = ({ createTodo }) => {
  const [value ,setValue] = useState<string>('')

  const  handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todo = {
      id:uuidv4(),
      task: value
    }
    createTodo(todo)
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-6 ">
    <input
    value={value}
    onChange={(e) => setValue(e.target.value)}
     placeholder='add task'
     type='text'
     className=' md:w-96 xs:w-64  px-4 py-2 outline-none focus:outline-none rounded border ' />
     <button type="submit" className="px-4 py-2 rounded bg-teal-700 text-white ml-1">submit</button>
    </form>
  )
}

export default Form;