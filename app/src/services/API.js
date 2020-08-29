import serviceBase from "./serviceBase";

const Services = {
  test: () => serviceBase.get("/api/test"),
  login: (payload) => serviceBase.post("/api/authentication/login", payload),
  verifyToken: () => serviceBase.get("/api/authentication/verify-token"),
  getAllUsers: () => serviceBase.get("/api/user/all"),
  getMessageByUsers: (payload) =>
    serviceBase.post("/api/messages/get-by-user", payload),
  signUp: (payload) => serviceBase.post("/api/user/create", payload),
  searchUser: (searchString) =>
    serviceBase.get(`/api/user/search/${searchString}`),
};
export default Services;
