import React from "react";
import { Grid } from "@mui/material";
import TodoInput from "./TodoInput";
import AddButton from "./AddButton";
import styles from "../styles/addTodo.module.scss";
import { isMobileDevice } from "../../common/common";

const AddTodo = () => {
  const isMobile = isMobileDevice();
  return (
    <Grid
      className={
        isMobile
          ? styles.add_todo_wrapper_mobile
          : styles.add_todo_wrapper_desktop
      }
    >
      <TodoInput />
      <AddButton />
    </Grid>
  );
};

export default AddTodo;
