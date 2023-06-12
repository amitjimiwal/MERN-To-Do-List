import AddTodoForm from "../components/AddTodoForm"
import TodoList from "../components/TodoList"
import TotalCompleteItems from "../components/TotalCompleteItems"
const Todo = () => {
  return (
      <div className='container bg-white p-4 mt-5'> 
      <AddTodoForm />
      <TodoList />
      <TotalCompleteItems />
</div>
  )
}

export default Todo
