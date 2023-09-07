import React from "react";
import { Button } from "@mui/joy";

const CustomButton = ({ color, size, variant, text, onClick }) => {
  return (
    <Button color={color} size={size} variant={variant} onClick={onClick}>
      {text}
    </Button>
  );
};

export default CustomButton;
