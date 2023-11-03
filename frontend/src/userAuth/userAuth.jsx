export const useGetUser = () => {
  const token = window.localStorage.getItem("accessToken"); // Retrieve the user's access token
  const userID = window.localStorage.getItem("userID"); // Retrieve the user's ID

  // You can return the token and user ID or use them for making authenticated requests
  return { token, userID };
};
