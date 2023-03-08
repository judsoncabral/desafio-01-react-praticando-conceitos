import { useState } from "react";
import { Header } from "./components/Header";
import { Task } from "./components/Task";
import styles from "./App.module.css";
import "./global.css";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Task />
        <main>
          <strong> TESTE !!!</strong>
        </main>
      </div>
    </div>
  );
}
