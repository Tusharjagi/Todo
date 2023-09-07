import React from "react";
import { Grid } from "@mui/material";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import CustomButton from "../common/CustomButton";
import { textConst } from "../../common/textConst";
import { isMobileDevice } from "../../common/common";

const UpdateButton = () => {
  const isMobile = isMobileDevice();
  return (
    <Grid>
      <CustomButton
        size="lg"
        text={!isMobile && textConst.update}
        color="warning"
        icon={<UpgradeIcon />}
        isMobile={isMobile}
      />
    </Grid>
  );
};

export default UpdateButton;
