import AddTodoForm from "../components/AddTodoForm";
import Navbar from "../components/Navbar";
import TodoList from "../components/TodoList";
import TotalCompleteItems from "../components/TotalCompleteItems";
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
