import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MoonIcon, SunIcon } from "../../assets/icons";
import { Theme, useThemeContext } from "../../context/Theme/Context";
import { ThemeSelector } from "../../redux/reducers/themeSlice";
import styles from "./ThemeSwitcher.module.scss";

const ThemeSwitcher = () => {
  const { onChengeTheme } = useThemeContext();

  const theme = useSelector(ThemeSelector.getThemeValue);

  const onClick = (value: Theme) => () => onChengeTheme(value);

  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.button, {
          [styles.activeButton]: theme === Theme.Light,
        })}
        onClick={onClick(Theme.Light)}
      >
        <SunIcon />
      </div>
      <div
        className={classNames(styles.button, {
          [styles.activeButton]: theme === Theme.Dark,
        })}
        onClick={onClick(Theme.Dark)}
      >
        <MoonIcon />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
