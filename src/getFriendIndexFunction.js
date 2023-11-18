export const getFriendIndex = (userArray, loggedInUserId) => {
  let friendIndex;
  for (let i = 0; i < userArray?.length; i++) {
    if (loggedInUserId !== userArray[i].id) {
      friendIndex = i;
    }
  }
  return friendIndex;
};
