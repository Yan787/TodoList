import classNames from "classnames";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Theme, useThemeContext } from "../../context/Theme/Context";
import { RoutesList } from "../Router";
import styles from "./StartPage.module.scss";

const StartPage = () => {
  const { theme } = useThemeContext();

  return (
    <div
      className={classNames(styles.container, {
        [styles.containerDark]: theme === Theme.Dark,
      })}
    >
      <div
        className={classNames(styles.text, {
          [styles.textDark]: theme === Theme.Dark,
        })}
      >
        Welcome to To Do!
      </div>
      <NavLink className={styles.nav} to={RoutesList.Todo}>
        <div
          className={classNames(styles.btn, {
            [styles.btnDark]: theme === Theme.Dark,
          })}
        >
          Start
        </div>
      </NavLink>
      <div
        className={classNames(styles.stacks, {
          [styles.stacksDarks]: theme === Theme.Dark,
        })}
      >
        Technology stack: - SASS/SCSS - Flex - TypeScript - Redux - React Router
        - React Hooks
      </div>
    </div>
  );
};

export default StartPage;
