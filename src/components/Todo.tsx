import React, { useState } from "react";
import { TodoProps } from "../interfaces/todos.inteface";

const Todo: React.FC<TodoProps> = ({ onFormSubmit }) => {
  const [todo, setTodo] = useState<string>("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFormSubmit(todo);
    setTodo("");
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={handleInputChange} />
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

export default Todo;
