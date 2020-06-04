let routesFile = require.context("./routes", false, /\.js$/);
let modulesrRoutes = [];
routesFile.keys().map((key) => {
  modulesrRoutes.push(routesFile(key).default);
});
export default modulesrRoutes;
