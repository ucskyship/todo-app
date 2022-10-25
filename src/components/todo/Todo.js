import React from "react";
import "./Todo.css";
import Form from "../form/Form";

const Todo = () => {

  

  const todos = [
    {
      id: 1,
      event: "buy bag",
      date: "oct 12",
      time: "06:00",
    },
    {
      id: 2,
      event: "buy shoe",
      date: "oct 12",
      time: "06:00",
    },
 
  ];
  return (
    <div className="main-div">
      <div className="prnt">
        <h1 className="todo-app"> TODO APP </h1>

        <button className="addButton" onClick>
          {" "}
          Add To-Do{" "}
        </button>

        <form>
          <ul>
            <label className="s_n">S/N</label>
            <label> EVENT </label>
            <label className="date"> DATE </label>
            <label className="time"> TIME </label>
          </ul>
        </form>
        {
          todos.map(todo =>{
            return(<Form data={todo}/>)
          })
        }
       
      </div>
    </div>
  );
};

export default Todo;
