const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUser,
  getLoginUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/user");

router.get("/", getAllUsers);

router.get("/:id", getUser);

router.get("/login", getLoginUser);

router.post("/", createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
