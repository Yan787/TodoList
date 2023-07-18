import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "../StartPage";
import Todo from "./Todo";

export enum RoutesList {
  Home = "/",
  Todo = "/todo",
  Default = "*",
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesList.Home} element={<StartPage />}></Route>
        <Route path={RoutesList.Todo} element={<Todo />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
