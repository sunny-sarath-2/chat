import serviceBase from "./serviceBase";

const Services = {
  test: () => serviceBase.get("/api/test"),
  login: (payload) => serviceBase.post("/api/authentication/login", payload),
  verifyToken: () => serviceBase.get("/api/authentication/verify-token"),
  getAllUsers: () => serviceBase.get("/api/user/all"),
};
export default Services;
