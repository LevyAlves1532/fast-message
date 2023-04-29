const config = {
  development: {
    baseUrl: "http://localhost:3000",
    requestUrl: "",
    pathName: "/",
  },
  production: {
    baseUrl: "http://localhost:3000",
    requestUrl: "",
    pathName: "/",
  },
};

export default config[process.env.NODE_ENV];