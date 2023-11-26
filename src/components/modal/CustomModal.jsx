import { Dialog, TextField } from "@mui/material";
import React from "react";

const CustomModal = () => {
  return (
    <Dialog open={true} sx={{ p: 2 }}>
      <TextField />
    </Dialog>
  );
};

export default CustomModal;
