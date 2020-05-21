const pool = require('../db');

// get 2 free example workout programs for all users

async function getWorkouts(req, res) {
  let currentUser = res.locals.loggedInUser;
  try {
    const results = await pool.query('SELECT * FROM workouts WHERE user_id = ? AND deleted_at IS NULL', [currentUser.id]);
    if (!results) {
      return res.status(400).json({error: 'No workouts found'})
    }
    return res.send(results);
  } catch (err) {
    res.status(400).send(err)
  }
}

async function getWorkout(req, res) {
  let currentUser = res.locals.loggedInUser;
  const {workoutId} = req.params;
  try {
    const results = await pool.query('SELECT * FROM workouts WHERE user_id = ? AND id = ? AND deleted_at IS NULL', [currentUser.id, workoutId]);
    if (!results) {
      return res.status(400).json({error: 'No workouts found'})
    }
    return res.send(results[0]);
  } catch (err) {
    res.status(400).send(err)
  }
}

async function addWorkout(req, res) {
  let currentUser = res.locals.loggedInUser;
  const {workout_name, muscle_group} = req.body;
  try {
    const results = await pool.query('INSERT INTO workouts (workout_name, muscle_group, user_id) VALUES (?,?,?)',
      [workout_name, muscle_group, currentUser.id]);
    if (!results) {
      return res.status(400).json({error: 'Something went wrong, try again!'});
    }
    return res.send(results);
  } catch (err) {
    res.status(401).send(err);
  }
}

async function editWorkout(req, res) {
  let currentUser = res.locals.loggedInUser;
  const {workoutId} = req.params;
  const {workout_name, muscle_group} = req.body;
  const newWorkout = {workout_name, muscle_group};
  try {
    const results = await pool.query('UPDATE workouts SET ? WHERE id = ? AND user_id = ? AND deleted_at IS NULL',
      [newWorkout, workoutId, currentUser.id]);
    if (!results) {
      return res.status(400).json({error: 'Something went wrong, try again!'});
    }
    return res.send(results);
  } catch (err) {
    res.status(401).send(err);
  }
}

async function deleteWorkout(req, res) {
  let currentUser = res.locals.loggedInUser;
  const {workoutId} = req.params;
  try {
    const results = await pool.query('UPDATE workouts SET deleted_at = now() WHERE id = ? AND user_id = ?',
      [workoutId, currentUser.id]);
    if (!results) {
      return res.status(400).json({error: 'Something went wrong, try again!'});
    }
    return res.send(results);
  } catch (err) {
    res.status(401).send(err);
  }
}

module.exports = {
  getWorkouts,
  getWorkout,
  addWorkout,
  editWorkout,
  deleteWorkout,
};