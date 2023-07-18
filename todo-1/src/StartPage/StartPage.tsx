import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RoutesList } from "../pages/Router";
import styles from "./StartPage.module.scss";

const StartPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>Welcome to To Do!</div>
      <NavLink className={styles.nav} to={RoutesList.Todo}>
        <div className={styles.btn}>Start</div>
      </NavLink>
      <div className={styles.stacks}>
        Technology stack: - SASS/SCSS - Flex - TypeScript - Redux - React Router
        - React Hooks
      </div>
    </div>
  );
};

export default StartPage;
