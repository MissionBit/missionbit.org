import * as React from "react";
import Button from "@material-ui/core/Button";

const SignUpButton: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Button
      className={className}
      variant="contained"
      size="large"
      color="secondary"
      href="https://docs.google.com/forms/d/e/1FAIpQLSddADoXnDOTw9Y-dlgn47P_hcSyO_BtZpbhB4pntEygKQzMCg/viewform"
      target="_blank"
      rel="noopener noreferrer"
    >
      Become a Volunteer
    </Button>
  );
};

export default SignUpButton;
