import {createRouter, createWebHistory} from "vue-router";

import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import Surveyss from "../views/Surveyss.vue";
import SurveyView from "../views/SurveyView.vue";
import AuthLayout from "../components/AuthLayout.vue";
import store from "../store";
const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    component:DefaultLayout,
    meta: {requiresAuth: true},
    children: [
      {path: '/dashboard', name:'Dashboard',component:Dashboard},
      {path: '/surveyss', name:'Surveyss',component:Surveyss},
      { path: "/surveyss/create", name: "SurveyCreate", component: SurveyView },
      { path: "/surveyss/:id", name: "SurveyView", component: SurveyView },
    ]

  },
  {
    path: '/auth',
    redirect: '/login',
    name: 'Auth',
    meta: {isGuest: true},
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Login,
      },
      {
        path: '/register',
        name: 'Register',
        component: Register,
      },
    ]
  },

]


const router = createRouter({

  history: createWebHistory(),
  routes

})

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth && !store.state.user.token){
    next({name: 'Login'})
  }else if (store.state.user.token && (to.meta.isGuest)) {
    next({name: 'Dashboard'});
  }else {
    next();
  }
})

export default router;
