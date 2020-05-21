const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

module.exports = function (req, res, next) {
  const token = req.cookies.access_token;
  let decodedJwt;
  if (!token) {
    return res.status(401).send({msg: 'Unauthorized'});
  }
  try {
    decodedJwt = jwt.verify(token, secret);
    if (!decodedJwt.userId) {
        return res.status(401).send({msg: 'Unauthorized'});
    }
  } catch (err) {
    res.status(401).send(err, {msg: 'Unauthorized'})
  }
  res.locals.loggedInUser = {
    id: decodedJwt.userId
  };
  next();
};