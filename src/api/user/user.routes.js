const router = require("express").Router();
const userController = require("./user.controller");
const { verifyAccessToken } = require("../../middleware/verifyAccessToken");

/* User Login */
router.post("/login", userController.loginUserHandler, verifyAccessToken);

/* Get User By Id */
router.get("/:id", verifyAccessToken, userController.getUserFromId);

/* Add User */
router.post("/signup-user", userController.signUpUser);

/* Edit User */
router.put("/edit-user/:id", verifyAccessToken, userController.editUser);

module.exports = router;
