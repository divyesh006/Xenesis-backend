const userService = require("./user.service");

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 * Login Admin controller
 */
module.exports.loginUserHandler = async (req, res, next) => {
  try {
    const props = req.body;
    const result = await userService.loginUserHandler(props);
    return res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 */
module.exports.getUserFromId = async (req, res, next) => {
  try {
    const adminId = req.params.id;
    const result = await userService.getUserFromId(adminId);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 */
module.exports.signUpUser = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await userService.signUpUser(body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 */
module.exports.editUser = async (req, res, next) => {
  try {
    const adminId = req.params.id;
    const result = await userService.editUser(adminId, req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
