const APIError = require("../utils/APIError");
const { decodeToken } = require("../api/user/generate-token");
const userDao = require("../api/user/user.dao");

module.exports.verifyAccessToken = async (req, res, next) => {
  try {
    const props = req.headers;
    console.log(props, "propaprops");
    if (props.authorization) {
      /* Decode token for verify user */
      const decode = await decodeToken(props.authorization);

      console.log(decode, "llllllllllllllllll");
      if (!decode) {
        throw new APIError({ message: "Invalid Token", status: 401 });
      }
      let user = await userDao.checkUserExist(decode.payload.email);
      console.log(user, "ppppppppppppppppppppp");
      if (user) {
        req.headers["admin"] = user;
        next();
      } else {
        throw new APIError({ message: "Invalid Token", status: 401 });
      }
    } else {
      throw new APIError({
        message: "Authorization not provided!",
        status: 401,
      });
    }
  } catch (error) {
    next({ message: "Authorization not provided!", status: 401 });
  }
};
