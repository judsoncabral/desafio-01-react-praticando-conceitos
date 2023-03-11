import styles from "./Task.module.css";
import { Trash } from "phosphor-react";

export interface TaskType {
  id: string;
  content: string;
  isCompleted: boolean;
}

interface TaskProps {
  task: TaskType;
}
export function Task({ task }: TaskProps) {
  return (
    <div className={styles.task}>
      <input
        className={styles.taskSelect}
        type="radio"
        checked={task.isCompleted}
      ></input>
      <div className={styles.taskContent}>{task.content}</div>
      <button>
        <Trash size={14} />
      </button>
    </div>
  );
}
