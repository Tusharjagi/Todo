import React from "react";
import { useDispatch } from "react-redux";
import { Grid } from "@mui/material";
import CustomButton from "../common/CustomButton";
import { textConst } from "../../common/textConst";
import styles from "../styles/addButton.module.scss";
import actionConstants from "../../redux/actionsConstants";

const AddButton = ({ inputData, setInputData }) => {
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const id = 0;
    const payload = {
      id: id + 1,
      inputValue: inputData,
    };
    dispatch({ type: actionConstants.ADD_TODO_REQUEST, payload });
    setInputData("");
  };

  return (
    <Grid className={styles.add_button}>
      <CustomButton
        color="success"
        size="lg"
        variant="soft"
        text={textConst.addTodo}
        onClick={handleAddTodo}
      />
    </Grid>
  );
};

export default AddButton;
