import * as React from "react";
import Button from "@material-ui/core/Button";

const SignUpButton: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Button
      className={className}
      variant="contained"
      size="large"
      color="secondary"
      href="https://www.tfaforms.com/4835077"
      target="_blank"
      rel="noopener noreferrer"
    >
      Become a Volunteer
    </Button>
  );
};

export default SignUpButton;
