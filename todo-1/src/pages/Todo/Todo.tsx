import React, { ChangeEvent, useMemo, useState } from "react";
import classNames from "classnames";

import TodoTask from "../../components/TodoTask/TodoTask";
import { ITask } from "../../utils/@globalTypes";
import styles from "./Todo.module.scss";
import ThemeSwitcher from "../../components/ThemeSwitcher";
import { Theme, useThemeContext } from "../../context/Theme/Context";

const Todo = () => {
  const { theme } = useThemeContext();
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
    <>
      <div
        className={classNames(styles.logo, {
          [styles.logoDark]: theme === Theme.Dark,
        })}
      >
        My to do
      </div>
      <div className={styles.switcher}>
        <ThemeSwitcher />
      </div>
      <div
        className={classNames(styles.mainInfo, {
          [styles.mainInfoDark]: theme === Theme.Dark,
        })}
      >
        <div
          className={classNames(styles.continue, {
            [styles.continueDark]: theme === Theme.Dark,
          })}
        >
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
              className={classNames(styles.deadline, {
                [styles.deadlineDark]: theme === Theme.Dark,
              })}
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
                [styles.btnDark]: theme === Theme.Dark,
              })}
              onClick={addTask}
            >
              Add Task
            </button>
          </div>
        </div>
        <div
          className={classNames(styles.todoCards, {
            [styles.todoCardsDark]: theme === Theme.Dark,
          })}
        >
          {todoList.map((task: ITask, key: number) => {
            return (
              <TodoTask key={key} task={task} completeTask={completeTask} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Todo;