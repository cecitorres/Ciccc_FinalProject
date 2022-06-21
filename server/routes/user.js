const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is User end point")
});

module.exports = router;







// const express = require("express");
// const router = express.Router();
// const {
//   getAllUsers,
//   getUser,
//   getLoginUser,
//   createUser,
//   updateUser,
//   deleteUser,
// } = require("../controller/user");

// router.get("/", getAllUsers);

// router.post("/", createUser);

// router.get("/login", getLoginUser);

// router.get("/:id", getUser);

// router.put("/:id", updateUser);

// router.delete("/:id", deleteUser);

// module.exports = router;
