import ToDo from "../models/ToDo";

interface Props {
  item: ToDo;
  onRemove: () => void;
  onUpdate: () => void;
}

const ToDoItem = ({ item, onRemove, onUpdate }: Props) => {
  return (
    <li className={`ToDoItem ${item.completed ? "complete" : ""}`}>
      <p onClick={onUpdate} className={"task priority-" + item.priorityLevel}>
        {item.task}
      </p>
      <p className="due-date">Due on: {item.dueDate.toDateString()}</p>
      <button onClick={onRemove}>x</button>
    </li>
  );
};

export default ToDoItem;
