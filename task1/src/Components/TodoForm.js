import React, { useState } from "react";

export default function TodoForm(props) {
  const [input, setInput] = useState("");
  const handleChanges = (e) => {
      setInput(e.target.value)
  }
  const handleSubmit = (e) =>{
      e.preventDefault();
      props.addTask({
          id:Math.floor(Math.random()*100000),
          text:input,
          isComplete : false
      })
      setInput('')
  }

  return (
    <form className="todo-form">
      <input type="text" placeholder="Add a ToDo" onChange={handleChanges} className="todo-input" value={input} name="text" autoComplete="off"/>
      <button type="submit" onClick={handleSubmit} className="todo-btn" >ADD TODO</button>
    </form>
  );
}
