import React ,{useContext}from "react";
import { TodoContext } from "../../pages/Todo";
const TotalCompleteItems = () => {
  const {todoItems}=useContext(TodoContext);
  const totalCompleteItems =todoItems.filter(item => item.conpleted===true).length
  return <h4 className="mt-3">Total Complete Items: {totalCompleteItems}</h4>;
};
export default TotalCompleteItems;