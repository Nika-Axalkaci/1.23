import React, { useEffect, useState } from "react";
import Todo from "./components/Todo";
import { Todos } from "./interfaces/todos.inteface";
import UseRequest from "./hooks/UseRequest";
import UseFetch from "./hooks/UseFetch";

const App: React.FC = () => {
  const {
    error,
    loading: fetchLoading,
    response,
  } = UseFetch({
    url: "/api/v1/todos",
    method: "GET",
  });
  const { sendRequest, loading: reqLoading } = UseRequest({
    url: "/api/v1/todos",
    method: "POST",
  });
  const toDoList =
    response?.map((todo: Todos) => {
      return {
        todo: todo.todo,
        id: todo._uuid,
      };
    }) || [];

  const onFormSubmit = (todo: string) => {
    sendRequest([{ todo }]).catch((err) => console.log(err));
  };
  if (reqLoading || fetchLoading) return <p>loading . . .</p>;
  if (error) return <p>error</p>;

  return (
    <div>
      <Todo onFormSubmit={onFormSubmit} />
      {toDoList.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.todo}</h3>
        </div>
      ))}
    </div>
  );
};

export default App;
