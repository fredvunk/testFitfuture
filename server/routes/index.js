const router = require('express').Router();
const authentication = require('./authentication');
const workouts = require('./workouts');
const exercises = require('./exercises');
const authCheck = require('../middleware/token');

router.post('/login', authentication.doLogin);
router.post('/logout', authentication.doLogout);
router.post('/signup', authentication.doSignup);
router.get('/session', authCheck, authentication.isUserLoggedIn); // check if user has session

router.get('/workouts', authCheck, workouts.getWorkouts); // Get all workouts
router.get('/workouts/:workoutId', authCheck, workouts.getWorkout); //Get single workout
router.post('/workouts', authCheck, workouts.addWorkout); // Add new workout
router.put('/workouts/:workoutId', authCheck, workouts.editWorkout); // edit workout
router.delete('/workouts/:workoutId', authCheck, workouts.deleteWorkout); // delete workout

router.get('/workouts/:workoutId', authCheck, exercises.getExercises); // Returns all exercises
router.get('/workouts/:workoutId/exercise/:exerciseId', authCheck, exercises.getExercise); // Returns single exercises
router.post('/workouts/:workoutId/exercise', authCheck, exercises.addExercise); // add exercise
router.put('/workouts/:workoutId/exercise/:exerciseId', authCheck, exercises.editExercise); // edit exercise
router.delete('/workouts/:workoutId/exercise/:exerciseId', authCheck, exercises.deleteExercise); // delete exercise

module.exports = router;