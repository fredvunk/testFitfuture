import Workouts from './components/Workouts.vue';
import Exercise from './components/Exercise.vue';
import Home from './components/Home.vue';
import Login from './components/Auth/Login.vue';
import Signup from './components/Auth/SignUp.vue';
// import axios from 'axios';

// async function guard(to, from, next) {
//
//   try {
//     await axios.get('/session');
//     next();
//   } catch (err) {
//       next({name: 'Login'});
//   }
// }


export const routes = [
  {
    path: '/', name: 'Home', component: Home, meta: {
      guest: true
    }
  },
  {path: '/workouts', name: 'Workouts', component: Workouts},
  {
    path: '/exercise', name: 'Exercise', component: Exercise, meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login', name: 'Login', component: Login, meta: {
      guest: true
    }
  },
  {
    path: '/signup', name: 'Signup', component: Signup, meta: {
      guest: true
    }
  },
];
