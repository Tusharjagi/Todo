import React from "react";
import Card from "@mui/joy/Card";
import { Grid } from "@mui/material";
import styles from "../styles/todoCard.module.scss";
import { isMobileDevice } from "../../common/common";

const TodoCard = ({ item }) => {
  const isMobile = isMobileDevice();
  return (
    <Grid className={isMobile ? styles.card_mobile : styles.card_desktop}>
      <Card color="success">
        <span>{item.inputValue}</span>
      </Card>
    </Grid>
  );
};

export default TodoCard;
