import React, { useState, useContext } from "react";
import { toast } from "react-hot-toast";
import { TodoContext } from "../../pages/Todo";
const AddTodoForm = () => {
	// getting the task function to update the task instantly after creation
  const { getMyTask } = useContext(TodoContext);
  const [value, setValue] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
//     check for empty task 
    if (value) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_BASE_URL}/task/new`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              title: value,
            }),
            credentials: "include",
          }
        );
        // getting the resposne
        const result = await response.json();
        if (result.success) {
          toast.success(result.message);
	    getMyTask()
        }
      } catch (error) {
		console.log(error)
        console.log(error.message);
      }
    } else {
      toast.error("Enter a task please");
      return;
    }
  };

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <label className="sr-only">Name</label>
      <input
        type="text"
        name="title"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
      <button type="submit" className="btn btn-primary mb-2">
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;
