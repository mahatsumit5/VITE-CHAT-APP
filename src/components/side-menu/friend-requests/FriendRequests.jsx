import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
import DoneTwoToneIcon from "@mui/icons-material/DoneTwoTone";
import { updateReqStatusAction } from "../../../action/friendReqAction";
const FriendRequests = () => {
  const dispatch = useDispatch();
  const { friendReq } = useSelector((store) => store.friendReq);
  const handleStatus = (status, req) => {
    console.log(req);
    const obj = {
      from: req.fromId,
      to: req.toId,
      status: status,
    };
    dispatch(updateReqStatusAction(obj));
  };
  return (
    <>
      <Divider />
      {friendReq.map((req) => {
        return (
          <Box sx={{ display: "flex", flexDirection: "column", mt: 4, gap: 2 }}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Avatar sx={{ width: 50, height: 50 }} />
              <Box
                sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
              >
                <Typography
                  variant="body2"
                  color={"black"}
                  sx={{ mt: 1, fontSize: 18 }}
                >
                  {req.from.fName.toUpperCase()}&nbsp;
                  {req.from.lName.toUpperCase()}&nbsp;
                </Typography>
                <Typography
                  variant="subtitle"
                  color={"grey"}
                  sx={{ mt: 1, fontSize: 10 }}
                >
                  {req.from.email}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ display: "flex", gap: 2, justifyContent: "space-around" }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  handleStatus("ACCEPTED", req);
                }}
                startIcon={<DoneTwoToneIcon color="white" />}
              >
                Accept
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => {
                  handleStatus("REJECTED", req);
                }}
                startIcon={<ClearIcon color="white" />}
              >
                Reject
              </Button>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default FriendRequests;
