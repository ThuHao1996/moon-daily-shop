const { default: mongoose } = require("mongoose");
const { UserSignUp } = require("../models");
var express = require("express");
var router = express.Router();

mongoose.connect("mongodb://127.0.0.1:27017/Moon-Daily");

router.post("/", (req, res) => {
  try {
    const data = req.body;
    data["gender"] = "Male";
    data["phoneNumber"] = "8423455789";
    const newItem = new UserSignUp(data);
    newItem
      .save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log("error", err);
        res.status(400).send(err);
      });
  } catch (error) {
    console.log("error", error);
    res.sendStatus(500);
  }
});

// router.post(
//   "/login-validate",
//   validateSchema(loginSchema),
//   async (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     const found = await findDocuments(
//       {
//         query: {
//           username: username,
//           password: password,
//         },
//       },
//       "login"
//     );

//     if (found && found.length > 0) {
//       res.send({ message: "Login Success" });
//       return;
//     }
//     res.status(401).send({ message: "Login Failed" });
//   }
// );

module.exports = router;
