import styles from "./TodoList.module.css";
import { v4 as uuidv4 } from "uuid";
import { Task } from "./Task";
import { TaskType } from "./Task";

export function TodoList() {
  const tasks: TaskType[] = [
    {
      id: uuidv4(),
      content:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      content:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      isCompleted: true,
    },
  ];

  return (
    <div className={styles.todoList}>
      <header className={styles.header}>
        <div className={styles.taskCreate}>
          <strong>Tarefas Criadas</strong>{" "}
          <div className={styles.result}> {tasks.length}</div>
        </div>
        <div className={styles.taskComplete}>
          <strong>Concluídas</strong>
          <div className={styles.result}>2 de {tasks.length}</div>
        </div>
      </header>
      {tasks.map((task: TaskType) => {
        return <Task key={task.id} task={task} />;
      })}
    </div>
  );
}
