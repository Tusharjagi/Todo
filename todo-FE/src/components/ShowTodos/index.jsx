import React from "react";
import { Grid } from "@mui/material";
import styles from "../styles/showTodo.module.scss";
import { isMobileDevice } from "../../common/common";
import TodoCard from "./TodoCard";
import DeleteButton from "./deleteButton";
import UpdateButton from "./updateButton";
import { useSelector } from "react-redux";

const ShowTodo = () => {
  const isMobile = isMobileDevice();

  const todo = useSelector((state) => state.todo);

  return (
    <>
      {todo.length ? (
        <Grid
          className={
            isMobile
              ? styles.show_todo_wrapper_mobile
              : styles.show_todo_wrapper_desktop
          }
        >
          {todo.map((item, id) => {
            return (
              <Grid className={styles.todo_items} key={id}>
                <TodoCard {...{ item }} />
                <UpdateButton {...{ item }} />
                <DeleteButton {...{ item }} />
              </Grid>
            );
          })}
        </Grid>
      ) : null}
    </>
  );
};

export default ShowTodo;
