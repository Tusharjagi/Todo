import React from "react";
import Input from "@mui/joy/Input";
import { Grid } from "@mui/material";
import { textConst } from "../../common/textConst";

const TodoInput = () => {
  return (
    <Grid>
      <Input
        placeholder={`${textConst.addTodo} ${textConst.here}...`}
        variant="outlined"
        color="success"
        size="lg"
      />
    </Grid>
  );
};

export default TodoInput;
