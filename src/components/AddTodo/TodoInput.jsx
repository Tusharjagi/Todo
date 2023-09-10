import React from "react";
import Input from "@mui/joy/Input";
import { Grid } from "@mui/material";
import { textConst } from "../../common/textConst";

const TodoInput = ({ inputData, setInputData }) => {
  const handleOnChange = (event) => {
    setInputData(event.target.value);
  };

  return (
    <Grid>
      <Input
        placeholder={`${textConst.addTodo} ${textConst.here}...`}
        variant="outlined"
        color="success"
        size="lg"
        onChange={(event) => handleOnChange(event)}
        value={inputData}
      />
    </Grid>
  );
};

export default TodoInput;
