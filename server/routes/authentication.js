const pool = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const helpers = require('../middleware/helpers');

async function doSignup(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!email || !password) {
    return res.status(400).json({msg: 'Invalid credentials'});
  }

  if (password.length <= 5 ) {
    return res.status(400).json({msg: 'Password must be minimum 6 symbols'});
  }

  if(!email.match(emailRegex)) {
    return res.status(400).json({msg: 'Enter a valid email'});
  }

  const usersByEmail = await pool.query('SELECT * FROM users where email = ? AND deleted_at IS NULL', [email]);

  if (usersByEmail.length > 0) {
    return res.status(400).json({msg: 'Email already exists'});
  }

  try {

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    await pool.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, passwordHash]);
    // TODO when user signs up, insert into workouts 2 example workouts with exercises
    // addExampleWorkouts(email)
    // const user = seleect * from users where email = ? and deleted_at is null, [email]
    // insert into workouts user_id, workout_name, muscle_group (values)[user_id..]
  } catch(e) {
    console.log(e);
  }

  res.send('Sign up successful');
}

async function doLogin(req, res) {
  const secret = process.env.JWT_SECRET;
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(400).json({msg: 'Please enter all fields'});
  }
  const users = await pool.query('SELECT email, password, id FROM users WHERE email = ? AND deleted_at IS NULL', [email]);

  if (users.length !== 1) {
    return res.status(403).json({msg: 'Incorrect email or password'})
  }
  const user = users[0];
  let validPassword;

  try {
    validPassword = await helpers.matchPassword(password, user.password);
  } catch (err) {
    throw res.status(400).send(err);
  }

  if (!validPassword) {
    return res.status(400).json({msg: 'Incorred password'});
  }

  if (validPassword) {

    const token = jwt.sign({
      userId: user.id
    }, secret);
    res.cookie('access_token', token, {
      maxAge: 3600 * 60 * 9000 * 60,
      httpOnly: true,
      path: '/'
    });

    return res.status(200).json({msg: 'Logged in'});
  }
}

async function isUserLoggedIn(req, res) {
  let currentUser = res.locals.loggedInUser;
  try {
    const results = await pool.query('SELECT * FROM users WHERE id = ? AND deleted_at IS NULL', [currentUser.id]);
    if (!results) {
      return res.status(400).json({error: 'No session found'});
    }
    return res.status(200).json({msg: 'Ok'});
  } catch (err) {
    res.status(400).send(err)
  }
}

async function doLogout(req, res) {
  await res.cookie('access_token', 'none', {
    expires: new Date(0),
    httpOnly: true

  });
  return res.status(200).json('Logged out');
}

module.exports = {
  doLogin,
  doSignup,
  doLogout,
  isUserLoggedIn
};