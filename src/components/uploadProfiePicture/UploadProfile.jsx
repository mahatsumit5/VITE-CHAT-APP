import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useDispatch, useSelector } from "react-redux";
import { uploadProfileAction } from "../../action/userAction";
function UploadProfile() {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [profileImg, setProfileImg] = useState("");
  function handleSelectImage(e) {
    const file = e.target.files[0];
    setProfileImg(file);
  }
  const handleOnUpload = async (e) => {
    e.preventDefault();
    const formdt = new FormData();
    formdt.append("profile", profileImg);
    formdt.append("email", user.email);

    dispatch(uploadProfileAction(formdt));
  };
  console.log(`http://localhost:8000/${user.profile.slice(7)}`);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: 150,
          height: 150,
          mt: 2,
          boxShadow: 2,
          position: "relative",
          borderRadius: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <img
          src={`http://localhost:8000${user.profile.slice(6)}`}
          className="profile-image"
        />
        {profileImg ? (
          <img
            src={URL.createObjectURL(profileImg)}
            className="profile-image"
          />
        ) : undefined}

        <input
          type="file"
          style={{ width: 0 }}
          id="input-file"
          name="profile"
          onChange={handleSelectImage}
        />

        <Button>
          <label htmlFor="input-file">
            <AddCircleIcon />
          </label>
        </Button>
      </Box>
      <Button
        variant="contained"
        disabled={profileImg === ""}
        onClick={handleOnUpload}
      >
        Upload
      </Button>
    </Box>
  );
}

export default UploadProfile;
