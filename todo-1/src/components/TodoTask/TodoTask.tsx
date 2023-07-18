import React, { FC } from "react";
import { TrashCan } from "../../assets/icons";
import { ITask } from "../../utils/@globalTypes";
import styles from "./TodoTask.module.scss";

type TodoTaskProps = {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
};

const TodoTask: FC<TodoTaskProps> = ({ task, completeTask }) => {
  return (
    <div className={styles.continue}>
      <div className={styles.wrapperTask}>
        <div className={styles.mainInfo}>
          <div>{task.taskName ? task.taskName : "Where is the task?"}</div>
          <div className={styles.deadline}>Deadline: {task.deadline} day</div>
        </div>
        <div
          className={styles.btn}
          onClick={() => {
            completeTask(task.taskName);
          }}
        >
          <TrashCan />
        </div>
      </div>
    </div>
  );
};

export default TodoTask;
