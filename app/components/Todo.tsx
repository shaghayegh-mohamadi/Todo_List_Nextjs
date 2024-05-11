
import { FiEdit, FiTrash2 } from 'react-icons/fi'

interface Props {
  task: string;
  deleteTodo: () => void;
  editTodo: () => void

}

export const Todo : React.FC<Props> = ({ task,deleteTodo,editTodo }) => {
  return (
    <div className='flex justify-between items-center bg-gray-200 rounded mt-4 py-3 px-4 md:w-[470px] xs:w-[337px] '>
    <p className="text-lg" >{task}</p>
    <div  className='flex items-center gap-5 cursor-pointer'>
    <FiEdit 
    onClick={editTodo}
     size={25}
     className="text-blue-500" 
     cursor='opinter'
     />
     <FiTrash2 size={25}
      onClick={deleteTodo}
      className="text-red-400"
      cursor='pointer'
         />

    </div>
    </div>
  )
}
