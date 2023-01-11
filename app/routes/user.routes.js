const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  app.put("/api/test/update", controller.updatePassword);

  app.post("/api/test/logworkout", controller.logWorkout);

  app.post("/api/test/getplan", controller.getPlan);

  app.post("/api/test/addcurrentplan", controller.addCurrentPlan);

  app.put("/api/test/updateplan", controller.updatePlan);

  app.post("/api/test/gethist", controller.getHist);

  app.put("/api/test/updatepart", controller.updatePart);

  app.post("/api/test/getinfo", controller.getInfo);
};
