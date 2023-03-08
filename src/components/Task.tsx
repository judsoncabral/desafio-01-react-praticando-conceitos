import styles from "./Task.module.css";
import { PlusCircle } from "phosphor-react";

export function Task() {
  return (
    <div className={styles.task}>
      <input placeholder="Adicione uma nova tarefa"></input>
      <button>
        Criar <PlusCircle size={16} />
      </button>
    </div>
  );
}
