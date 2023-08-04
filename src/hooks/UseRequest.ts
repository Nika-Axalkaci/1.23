import { useState } from "react";
import { InRequset, InReturnTodo } from "../interfaces/todos.inteface";

const UseRequest = ({ url, method }: InRequset) => {
  const [loading, setLoading] = useState(false);
  const sendRequest = async (body: InReturnTodo[]) => {
    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
      body: !!body && method !== "GET" ? JSON.stringify(body) : undefined,
    });
    const data = await res.json();
    setLoading(false);
    return data;
  };

  return { sendRequest, loading };
};

export default UseRequest;
