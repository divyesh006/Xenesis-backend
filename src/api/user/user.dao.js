const User = require("./user.model");

const buildSaveuserJson = (props) => {
  const json = {};
  json.name = props.name;
  json.enrollment_number = props.enrollment_number;
  json.email = props.email;
  json.degree = props.degree || "";
  json.course = props.course || "";
  json.college = props.college || "";
  json.events = props.events || [];
  json.mobile = props.mobile;
  return json;
};

module.exports.checkUserExist = async (email) => {
  try {
    const user = await User.findOne({ email: email });
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports.getUserFromId = async (id) => {
  try {
    const user = User.findOne({ _id: id }).lean();
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports.signUpUser = (userDetail) => {
  try {
    const user = new User(buildSaveuserJson(userDetail));
    const result = user.save();
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports.editUser = async (userId, params) => {
  try {
    const user = await User.findOneAndUpdate({ _id: userId }, params, {
      new: true,
    });
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports.deleteAdmin = async (userId) => {
  try {
    const user = await User.findOneAndDelete({ _id: userId });
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports.checkUserExist = async (email) => {
  try {
    const isUserExist = await User.findOne({ email: email });
    return isUserExist;
  } catch (error) {
    next(error);
  }
};
