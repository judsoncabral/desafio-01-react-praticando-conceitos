import styles from "./TodoList.module.css";
import { Task } from "./Task";
import { TaskType } from "./Task";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { CreateTask } from "./CreateTask";
export function TodoList() {
  const [tasks, setTasks] = useState([
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
  ]);

  function onAddTask(task: TaskType) {
    setTasks(tasks.concat(task));
  }

  function onDeleteTask(taskToDelete: TaskType) {
    const taskWithouDeleteOne = tasks.filter((task) => {
      return task.id != taskToDelete.id;
    });
    setTasks(taskWithouDeleteOne);
  }

  return (
    <div>
      <CreateTask onAddTask={onAddTask} />
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
    </div>
  );
}
