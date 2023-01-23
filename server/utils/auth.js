const jwt = require("jsonwebtoken");

const secret = "hoteltransylvania";
const adminSecret = "stuff";
const expiration = "2h";

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      //if (req.body.isAdmin(true)) {
      //  const { data: dataAdmin } = jwt.verify(token, adminSecret, {
      //    maxAge: expiration,
      //  });
        // console.log(dataAdmin);
      //  req.user = dataAdmin;
      //} else {
        const { data: dataUser } = jwt.verify(token, secret, {
          maxAge: expiration,
        });
        req.user = dataUser;
      //}
    } catch {
      console.log("Invalid token");
    }

    return req;
  },
  signAdmin: function ({ email, username, _id, isAdmin }) {
    const payload = { email, username, _id, isAdmin };
    return jwt.sign({ data: payload }, adminSecret, { expiresIn: expiration });
  },

  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
