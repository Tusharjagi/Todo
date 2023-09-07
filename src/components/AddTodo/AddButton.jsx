import React from "react";
import { Grid } from "@mui/material";
import CustomButton from "../common/CustomButton";
import { textConst } from "../../common/textConst";
import styles from "../styles/addButton.module.scss";

const AddButton = () => {
  return (
    <Grid className={styles.add_button}>
      <CustomButton
        color="success"
        size="lg"
        variant="soft"
        text={textConst.addTodo}
      />
    </Grid>
  );
};

export default AddButton;
