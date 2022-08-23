import React from "react";
import { default as BsButton } from "react-bootstrap/Button";
import { ButtonType } from "./Button.types";

const Button = ({ label }: ButtonType) => <BsButton>{label}</BsButton>;

export default Button;
