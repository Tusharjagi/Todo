import React from "react";
import { Grid } from "@mui/material";
import styles from "../styles/showTodo.module.scss";
import { isMobileDevice } from "../../common/common";
import TodoCard from "./TodoCard";
import DeleteButton from "./deleteButton";
import UpdateButton from "./updateButton";

const ShowTodo = () => {
  const isMobile = isMobileDevice();
  return (
    <Grid
      className={
        isMobile
          ? styles.show_todo_wrapper_mobile
          : styles.show_todo_wrapper_desktop
      }
    >
      <Grid className={styles.todo_items}>
        <TodoCard />
        <UpdateButton />
        <DeleteButton />
      </Grid>
    </Grid>
  );
};

export default ShowTodo;
