import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  //console.log(process.env.JWT_TOKEN_VALIDITY);
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || "somethingsecret2",
    { expiresIn: process.env.JWT_TOKEN_VALIDITY }
  );
};

export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length); //Bearer xxxxxx, so it will get rid of Bearer .
    jwt.verify(
      token,
      process.env.JWT_SECRET || "somethingsecret2",
      (err, decode) => {
        if (err) {
          res.status(401).send({ message: "Invalid token" });
        } else {
          req.user = decode;
          next();
        }
      }
    );
  } else {
    res.send(401).send({ message: "No token" });
  }
};
