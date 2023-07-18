import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Theme } from "./context/Theme/Context";
import ThemeProvider from "./context/Theme/Provider";
import Router from "./pages/Router";
import { chengeTheme, ThemeSelector } from "./redux/reducers/themeSlice";

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector(ThemeSelector.getThemeValue);

  const onChengeTheme = (value: Theme) => {
    dispatch(chengeTheme(value));
  };

  return (
    <ThemeProvider theme={theme} onChengeTheme={onChengeTheme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
