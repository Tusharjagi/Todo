import React from "react";
import { Button } from "@mui/joy";

const CustomButton = ({ color, size, variant, text }) => {
  return (
    <Button color={color} size={size} variant={variant}>
      {text}
    </Button>
  );
};

export default CustomButton;
