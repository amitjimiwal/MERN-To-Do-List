import {
  AddTodoForm,
  TodoList,
  TotalCompleteItems,
} from "../components/todopage/index";
import Navbar from "../components/todopage/Navbar";
import { useEffect, useState, createContext } from "react";
export const TodoContext = createContext();
const Todo = () => {
  const [todoItems, settodoItems] = useState([]);
  const getMyTask = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/task/gettask`,
        {
          credentials: "include",
        }
      );
      const data = await response.json();
      if (data.success) {
        settodoItems(data.tasks);
      }
    } catch (error) {
      // toast.error(error.response.data.message);
      console.log(error);
    }
  };
  
  useEffect(() => {
    getMyTask();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container bg-white p-4 mt-5">
        <TodoContext.Provider value={{ getMyTask, todoItems }}>
          <AddTodoForm />
          <TodoList todolist={todoItems} />
          <TotalCompleteItems />
        </TodoContext.Provider>
      </div>
    </div>
  );
};

export default Todo;
