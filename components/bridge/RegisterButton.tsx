import * as React from "react";
import { registerUrl } from "./Metadata";
import VioletButton from "components/VioletButton";

export const RegisterButton: React.FC<{ className?: string }> = ({
  className,
}) => (
  <VioletButton
    href={registerUrl}
    target="_blank"
    rel="noopener noreferrer"
    variant="contained"
    size="large"
    className={className}
  >
    Register
  </VioletButton>
);

export default RegisterButton;
