import styles from "./Task.module.css";
import { Trash } from "phosphor-react";
import { FormEvent } from "react";

export interface TaskType {
  id: string;
  content: string;
  isCompleted: boolean;
}

interface TaskProps {
  task: TaskType;
  onDeleteTask: (task: TaskType) => void;
  onChangeIsCompletedTask: (task: TaskType) => void;
}

export function Task({
  task,
  onDeleteTask,
  onChangeIsCompletedTask,
}: TaskProps) {
  function handleDeleteTask(event: FormEvent) {
    event.preventDefault();
    onDeleteTask(task);
  }

  function handleChangeIsCompletedTask(event: FormEvent) {
    event.preventDefault();
    onChangeIsCompletedTask(task);
  }

  return (
    <div className={styles.task}>
      <input
        className={styles.taskSelect}
        type="radio"
        checked={task.isCompleted}
        onClick={handleChangeIsCompletedTask}
      ></input>
      <div className={styles.taskContent}>{task.content}</div>
      <button onClick={handleDeleteTask}>
        <Trash size={14} />
      </button>
    </div>
  );
}
