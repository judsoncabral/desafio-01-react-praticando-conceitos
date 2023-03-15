import styles from "./Task.module.css";
import { Check, Trash } from "phosphor-react";
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
    onChangeIsCompletedTask(task);
  }

  return (
    <div className={styles.task}>
      <button
        className={styles.taskSelect}
        onClick={handleChangeIsCompletedTask}
      >
        {task.isCompleted ? (
          <div className={styles.taskIsSelected}>
            {" "}
            <Check />
          </div>
        ) : (
          <div className={styles.taskIsNotSelected}></div>
        )}
      </button>
      <div className={styles.taskContent}>
        <p className={task.isCompleted ? styles.textIsCompleted : ""}>
          {task.content}
        </p>
      </div>
      <button className={styles.taskButtonRemove} onClick={handleDeleteTask}>
        <Trash size={14} />
      </button>
    </div>
  );
}
