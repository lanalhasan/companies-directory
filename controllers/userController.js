const {
  validateName,
  validateEmail,
  validatePassword,
} = require("../services/validationService");
const models = require("../models");
const { hashPassword, verifyPassword } = require("../services/passwordService");
const register = async (req, res, next) => {
  const result = {
    success: true,
    data: null,
    messages: [],
  };
  const { name = "", email = "", password = "" } = req.body;

  //1.validation
  if (!validateName(name)) {
    result.success = false;
    result.messages = ["Please enter a valid Name"];
  }
  if (!validateEmail(email)) {
    result.success = false;
    result.messages = ["Please enter a valid Email"];
  }
  if (!validatePassword(password)) {
    result.success = false;
    result.messages = ["Please enter a valid Password"];
  }
  if (!result.success) {
    //validation failed
    res.send(result);
    return; // we wrote return so it stops where the error occured
  }
  //validation succssed
  //2.store in database
  const [user, created] = await models.User.findOrCreate({
    where: {
      email,
    },
    defaults: {
      name,
      password: hashPassword(password),
    },
  });
  if (created) {
    result.messages.push("User created");
  } else {
    (result.success = false),
      result.messages.push("You are already registered");
  }

  //3. send response
  return res.send(result);
};

const login = async (req, res, next) => {
  const result = {
    success: true,
    data: null,
    messages: [],
  };
  const { email = "", password = "" } = req.body;

  if (!validateEmail(email)) {
    result.success = false;
    result.messages = ["Please enter a valid Email"];
  }
  if (!validatePassword(password)) {
    result.success = false;
    result.messages = ["Please enter a valid Password"];
  }
  if (!result.success) {
    res.send(result);
    return;
  }
  //validation passed - get the user
  const user = await models.User.findOne({
    where: {
      email,
    },
  });
  if (user) {
    //compare passwords
    if (verifyPassword(password, user.password)) {
      result.data = user; //nrj3 data for the frontEnd
      result.messages.push("Logged in yayy!");
      //send Token - soon
    } else {
      result.success = false;
      result.messages.push("Invalid password");
    }
  } else {
    result.success = false;
    result.messages.push("account is not found");
  }
  return res.send(result);
};

module.exports = {
  register,
  login,
};
