import { useState } from "react";
import { Header } from "./components/Header";
import { CreateTask } from "./components/CreateTask";
import styles from "./App.module.css";
import "./global.css";
import { TodoList } from "./components/TodoList";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <CreateTask />
        <TodoList />
      </div>
    </div>
  );
}
