const config = {
  auth: {
    opts: {
      passReqToCallback: true,
      salt: 10,
    },
    token: {
      tokenExpire: "2m",
      refreshTokenExpire: "2m",
      secret: "keyboard cat",
    },
  },
};

module.exports.config = config;
