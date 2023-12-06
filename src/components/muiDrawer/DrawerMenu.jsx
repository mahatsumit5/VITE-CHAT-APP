import { Box, Button } from "@mui/material";
import SmsIcon from "@mui/icons-material/Sms";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/userSlice";
import { setToggleMenu } from "../../redux/sideBarSlice";
import { setDisplay } from "../../redux/sideMenuSlice";
import Diversity3TwoToneIcon from "@mui/icons-material/Diversity3TwoTone";
import { logoutUser } from "../../axios/userAxios";
const DrawerMenu = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await logoutUser(user.email);
    dispatch(setUser({}));
    dispatch(setToggleMenu(false));
  };

  const handleMenuClick = (name) => {
    dispatch(setDisplay(name));
    dispatch(setToggleMenu(false));
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", p: 2, gap: 2 }}>
      <Button
        variant="contained"
        color="info"
        onClick={() => {
          handleMenuClick("chat");
        }}
        startIcon={<SmsIcon />}
      >
        Chat
      </Button>
      <Button
        variant="contained"
        color="info"
        onClick={() => {
          handleMenuClick("friends");
        }}
        startIcon={<Diversity1Icon />}
      >
        Friends
      </Button>
      <Button
        variant="contained"
        color="info"
        onClick={() => {
          handleMenuClick("findFriends");
        }}
        startIcon={<Diversity3TwoToneIcon />}
      >
        Find Friends
      </Button>
      <Button
        variant="contained"
        color="info"
        onClick={() => {
          handleMenuClick("friendRequests");
        }}
        startIcon={<PersonAddAlt1Icon />}
      >
        Friend requests
      </Button>

      <Button
        variant="contained"
        color="info"
        startIcon={<LogoutIcon />}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Box>
  );
};

export default DrawerMenu;
