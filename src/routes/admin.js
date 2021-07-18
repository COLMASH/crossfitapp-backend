const router = require("express").Router();
const adminController = require("../controller/admin.controller");
const { auth } = require("../utils/middlewares");

router.route("/adminList").get(adminController.list);
router.route("/adminInfo").get(auth, adminController.show);
router.route("/:adminId").put(adminController.update);
router.route("/adminDelete").delete(adminController.destroy);
router.route("/create").post(adminController.create);
router.route("/signin").post(adminController.signin);

module.exports = router;
