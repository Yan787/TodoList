import React, { ChangeEvent, useMemo, useState } from "react";
import classNames from "classnames";
import TodoTask from "../../components/TodoTask";
import { ITask } from "../../utils/@globalTypes";

import styles from "./Todo.module.scss";

const Todo = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDealine] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDealine(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };

    setTodoList([...todoList, newTask]);
    setTask("");
    setDealine(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  const isValid = useMemo(() => {
    return task.length === 0;
  }, [task]);

  return (
    <div className={styles.mainInfo}>
      <div className={styles.continue}>
        <div className={styles.continueInput}>
          <input
            className={styles.addText}
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            className={styles.deadline}
            type="number"
            placeholder="Deadline (in Days)..."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <div className={classNames({ [styles.available]: isValid })}>
          <button
            disabled={isValid}
            className={classNames(styles.btn, {
              [styles.availableDtn]: isValid,
            })}
            onClick={addTask}
          >
            Add Task
          </button>
        </div>
      </div>
      <div className={styles.todoCards}>
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default Todo;
