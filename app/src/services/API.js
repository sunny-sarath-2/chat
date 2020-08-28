import serviceBase from "./serviceBase";

const Services = {
  test: () => serviceBase.get("/api/test"),
};
export default Services;
