import { useState } from "react";
import ToDo from "../models/ToDo";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";

const ToDoHome = () => {
  const [todos, setTodos] = useState<ToDo[]>([
    {
      task: "buy bday gift for friend",
      completed: false,
      priorityLevel: 2,
      dueDate: new Date("2023/03/10"),
    },
    {
      task: "shovel snow",
      completed: true,
      priorityLevel: 1,
      dueDate: new Date("2023/02/20"),
    },
    {
      task: "get groceries",
      completed: false,
      priorityLevel: 3,
      dueDate: new Date("2023/03/15"),
    },
  ]);

  const addTodo = (todo: ToDo): void => {
    setTodos((prev) => [...prev, todo]);
  };

  const removeTodo = (i: number): void => {
    setTodos((prev) => [...prev.slice(0, i), ...prev.slice(i + 1)]);
  };

  const updateTodo = (i: number): void => {
    setTodos((prev) => {
      const copyOfTodo = { ...prev[i] };
      copyOfTodo.completed = !copyOfTodo.completed;
      return [...prev.slice(0, i), copyOfTodo, ...prev.slice(i + 1)];
    });
  };

  return (
    <div className="ToDoHome">
      <ToDoForm onAdd={addTodo} />
      <ol>
        {todos.map((item, i) => (
          <ToDoItem
            key={item.task + i}
            item={item}
            onRemove={() => removeTodo(i)}
            onUpdate={() => updateTodo(i)}
          />
        ))}
      </ol>
    </div>
  );
};

export default ToDoHome;
