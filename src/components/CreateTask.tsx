import styles from "./CreateTask.module.css";
import { PlusCircle } from "phosphor-react";
import { useState, FormEvent, InvalidEvent, ChangeEvent } from "react";
import { TaskType } from "./Task";
import { v4 as uuidv4 } from "uuid";
interface CreateTaskProps {
  onAddTask: (task: TaskType) => void;
}

export function CreateTask({ onAddTask }: CreateTaskProps) {
  const [newTask, setNewTask] = useState("");

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");

    setNewTask(event.target.value);
  }
  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    const task: TaskType = {
      id: uuidv4(),
      content: newTask,
      isCompleted: false,
    };
    onAddTask(task);
    setNewTask("");
  }

  return (
    <form onSubmit={handleCreateTask}>
      <div className={styles.createTask}>
        <input
          id="newTask"
          name="newTask"
          value={newTask}
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        ></input>
        <button type="submit">
          Criar <PlusCircle size={16} />
        </button>
      </div>
    </form>
  );
}
