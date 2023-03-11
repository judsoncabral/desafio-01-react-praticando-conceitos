import styles from "./CreateTask.module.css";
import { PlusCircle } from "phosphor-react";

export function CreateTask() {
  return (
    <div className={styles.createTask}>
      <input placeholder="Adicione uma nova tarefa"></input>
      <button>
        Criar <PlusCircle size={16} />
      </button>
    </div>
  );
}
