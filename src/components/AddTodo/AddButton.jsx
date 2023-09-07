import React from "react";
import { Button } from "@mui/joy";
import { Grid } from "@mui/material";
import { textConst } from "../../common/textConst";
import styles from "../styles/addButton.module.scss";

const AddButton = () => {
  return (
    <Grid className={styles.add_button}>
      <Button color="success" size="lg" variant="soft">
        {textConst.addTodo}
      </Button>
    </Grid>
  );
};

export default AddButton;
