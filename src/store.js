import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import chatRoomReducer from "./redux/chatRoomSlice";
import userReducer from "./redux/userSlice";
import currentRoomReducer from "./redux/currentRoomSlice";
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
  },
});

const persistor = persistStore(store);

export { store, persistor };
