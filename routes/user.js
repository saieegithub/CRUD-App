const express = require ("express");
const router = express.Router();

//to create  new user                    //("/")=localhost:5000/user
router.post("/", require("./../controllers/user").createUser); 

router.get("/", require("./../controllers/user").getAllUser);

router.get("/:userID", require("./../controllers/user").getUser);

router.delete("/:userID", require("./../controllers/user").deleteUser);

router.put("/:userID", require("./../controllers/user").updateUser);

module.exports = router;