import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import chatRoomReducer from "./redux/chatRoomSlice";
import userReducer from "./redux/userSlice";
import currentRoomReducer from "./redux/currentRoomSlice";
import sideBarReducer from "./redux/sideBarSlice";
import sideMenuReducer from "./redux/sideMenuSlice";
import friendRedReducer from "./redux/friendRequests";
const userPresistConfig = {
  key: "user",
  storage,
};

const persistedUserReducer = persistReducer(userPresistConfig, userReducer);

const store = configureStore({
  reducer: {
    chatRoom: chatRoomReducer,
    user: persistedUserReducer,
    currentRoom: currentRoomReducer,
    sideBar: sideBarReducer,
    sideMenu: sideMenuReducer,
    friendReq: friendRedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
