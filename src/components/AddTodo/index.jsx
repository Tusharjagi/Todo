import React, { useState } from "react";
import { Grid } from "@mui/material";
import TodoInput from "./TodoInput";
import AddButton from "./AddButton";
import styles from "../styles/addTodo.module.scss";
import { isMobileDevice } from "../../common/common";

const AddTodo = () => {
  const isMobile = isMobileDevice();
  const [inputData, setInputData] = useState("");

  return (
    <Grid
      className={
        isMobile
          ? styles.add_todo_wrapper_mobile
          : styles.add_todo_wrapper_desktop
      }
    >
      <TodoInput {...{ inputData, setInputData }} />
      <AddButton {...{ inputData, setInputData }} />
    </Grid>
  );
};

export default AddTodo;
