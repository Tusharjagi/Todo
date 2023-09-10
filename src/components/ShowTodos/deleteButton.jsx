import React from "react";
import { Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomButton from "../common/CustomButton";
import { textConst } from "../../common/textConst";
import { isMobileDevice } from "../../common/common";

const DeleteButton = ({ item }) => {
  const isMobile = isMobileDevice();

  const handleDeleteTodo = () => {
    console.log(item.id);
  };

  return (
    <Grid>
      <CustomButton
        size="lg"
        text={!isMobile && textConst.delete}
        color="danger"
        icon={<DeleteIcon />}
        isMobile={isMobile}
        onClick={handleDeleteTodo}
      />
    </Grid>
  );
};

export default DeleteButton;
