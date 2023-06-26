import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { TodoContext } from "../../pages/Todo";
const TodoItem = ({ id, title, completed }) => {
  const { getMyTask } = useContext(TodoContext);
  const handleUpdateDelete = async (event) => {
	// handling update and delete both in a single function
	const elementType=event.target.tagName;
	const methodForAPI=elementType === "BUTTON" ? "DELETE" : "PUT";
      try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/task/${id}`,
        {
          method: methodForAPI,
          credentials: "include",
        }
      );
      const data = await response.json();
      if (data.success) {
        toast.success(data.message);
        getMyTask();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            checked={completed}
            onClick={handleUpdateDelete}
          ></input>
          {title}
        </span>
        {completed && (
          <button
            className="btn btn-danger"
            onClick={handleUpdateDelete}
          >
            Delete
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
