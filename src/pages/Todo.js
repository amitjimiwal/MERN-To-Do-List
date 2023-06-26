import {AddTodoForm,TodoList,TodoItem,TotalCompleteItems} from '../components/todopage/index'
import Navbar from '../components/Navbar';
const Todo = () => {
  return (
    <div>
    <Navbar/>
      <div className="container bg-white p-4 mt-5">
        <AddTodoForm />
        <TodoList />
        <TotalCompleteItems />
      </div>
    </div>
  );
};

export default Todo;
