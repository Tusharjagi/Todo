import React from "react";
import { Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomButton from "../common/CustomButton";
import { textConst } from "../../common/textConst";
import { isMobileDevice } from "../../common/common";

const DeleteButton = () => {
  const isMobile = isMobileDevice();
  return (
    <Grid>
      <CustomButton
        size="lg"
        text={!isMobile && textConst.delete}
        color="danger"
        icon={<DeleteIcon />}
        isMobile={isMobile}
      />
    </Grid>
  );
};

export default DeleteButton;
