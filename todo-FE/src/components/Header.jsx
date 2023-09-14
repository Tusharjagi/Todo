import React from "react";
import { Grid } from "@mui/material";
import styles from "./styles/header.module.scss";
import { textConst } from "../common/textConst";
import { isMobileDevice } from "../common/common";

const Header = () => {
  const isMobile = isMobileDevice();

  return (
    <Grid className={isMobile ? styles.mobile_header : styles.desktop_header}>
      <span>{textConst.todoApp}</span>
    </Grid>
  );
};

export default Header;
