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

  function onChangeIsCompletedTask(taskSelected: TaskType) {
    tasks.map((task) => {
      if (task.id == taskSelected.id) {
        task.isCompleted = !task.isCompleted;
        console.log(task);
      }
    });
    setTasks(tasks);
  }

  function getCompletedTasks() {
    const result = tasks.reduce(function (acumulador, taskAtual) {
      if (taskAtual.isCompleted) {
        return acumulador + 1;
      } else {
        return acumulador;
      }
    }, 0);
    return result;
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
        <header>
          <div className={styles.taskCreate}>
            <strong>Tarefas Criadas</strong>{" "}
            <div className={styles.result}> {tasks.length}</div>
          </div>
          <div className={styles.taskComplete}>
            <strong>Concluídas</strong>
            <div className={styles.result}>
              {getCompletedTasks()} de {tasks.length}
            </div>
          </div>
        </header>
        {tasks.length == 0 && (
          <div className={styles.contentEmpty}>
            <p>
              <span>Você ainda não tem tarefas cadastradas</span>
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        )}

        {tasks.map((task: TaskType) => {
          return (
            <Task
              key={task.id}
              task={task}
              onDeleteTask={onDeleteTask}
              onChangeIsCompletedTask={onChangeIsCompletedTask}
            />
          );
        })}
      </div>
    </div>
  );
}
