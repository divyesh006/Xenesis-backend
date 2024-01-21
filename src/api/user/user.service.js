const userDao = require("./user.dao");
const { Format } = require("../../config/formate");
const APIError = require("../../utils/APIError");
const bcrypt = require("bcrypt");
const { getToken } = require("./generate-token");
const generator = require("generate-password");

module.exports.loginUserHandler = async (props) => {
  try {
    /* Check admin is  registered or not */
    const user = await userDao.checkUserExist(props.email);
    if (user && user !== null) {
      const dbPassword = user.password;
      const password = props.password;
      if (dbPassword === password) {
        const token = await getToken({
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
        });
        return Format.success({ user, token }, "success");
      } else {
        throw new APIError({ message: "Incorrect Password.", status: 500 });
      }
    } else {
      throw new APIError({ message: "User not registered.", status: 500 });
    }
  } catch (error) {
    throw error;
  }
};

/**
 *
 * @param {userId} userId - userId of restaurant
 */
module.exports.getUserFromId = async (userId) => {
  try {
    const user = await userDao.getUserFromId(userId);
    const result = user;
    return Format.success(result, "Success");
  } catch (error) {
    throw error;
  }
};

/**
 * Add Admin
 *
 * @param {props} params - Admin details
 */
module.exports.signUpUser = async (params) => {
  try {
    const user = await userDao.checkUserExist(params.email);
    if (user) {
      throw new APIError({
        message: "Admin already registered with Email.",
        status: 500,
      });
    }
    const result = await userDao.signUpUser(params);
    return Format.success(result, "Success");
  } catch (error) {
    throw error;
  }
};

/**
 * Edit Admin
 *
 * @param {userId} userId - req.param
 * @param {params} params - req.body
 */
module.exports.editUser = async (userId, params) => {
  try {
    const result = await userDao.editUser(userId, params);
    return Format.success(result, "success");
  } catch (error) {
    throw error;
  }
};
