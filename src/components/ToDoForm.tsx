// import { FormEvent, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ToDo from "../models/ToDo";
import { formSchema, SchemaProps } from "../services/formSchema";

interface Props {
  onAdd: (todo: ToDo) => void;
}

const ToDoForm = ({ onAdd }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaProps>({
    resolver: yupResolver(formSchema),
  });
  //   const [task, setTask] = useState("");

  //   const submitHandler = (e: FormEvent): void => {
  //     e.preventDefault();
  //     onAdd({ task, priorityLevel: 3, completed: false, dueDate: new Date() });
  //     setTask("");
  //   };

  const yupSubmitHandler = (values: SchemaProps) => {
    onAdd({
      ...values,
      completed: false,
      dueDate: new Date(values.dueDate),
    });
  };
  return (
    <form className="ToDoForm" onSubmit={handleSubmit(yupSubmitHandler)}>
      <label htmlFor="task">task</label>
      <input
        type="text"
        //   name="task"
        id="task"
        //   value={task}
        //   onChange={(e) => setTask(e.target.value)}
        {...register("task")}
      />
      <span className="error">{errors?.task?.message}</span>
      <label htmlFor="dueDate">Due date:</label>
      <input
        type="date"
        //   name="dueDate"
        id="dueDate"
        {...register("dueDate")}
      />
      <span className="error">{errors?.dueDate?.message}</span>
      <label htmlFor="priorityLevel">Priority Level (1-3):</label>
      <input
        type="number"
        //   name="priorityLevel"
        id="priorityLevel"
        {...register("priorityLevel")}
      />
      <span className="error">{errors?.priorityLevel?.message}</span>
      <button className="submit-btn">Add Task</button>
    </form>
  );
};

export default ToDoForm;
