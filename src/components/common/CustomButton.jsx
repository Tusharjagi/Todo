import React from "react";
import { Button } from "@mui/joy";
import styles from "../styles/customButton.module.scss";

const CustomButton = ({
  color,
  size,
  variant,
  text,
  onClick,
  icon,
  isMobile,
}) => {
  return (
    <Button
      color={color}
      size={size}
      variant={variant}
      onClick={onClick}
      className={!isMobile && styles.custom_button}
    >
      {icon}
      {text}
    </Button>
  );
};

export default CustomButton;
