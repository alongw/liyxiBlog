import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import ArticleList from '@/views/ArticleList.vue'
import Project from '@/views/Project.vue'
import Login from '@/views/Login.vue'
import About from '@/views/About.vue'
import Article from '@/views/Article.vue'
import EditArticle from '@/views/EditArticle.vue'
import User from '@/views/User.vue'
import Loginout from '@/views/Loginout.vue'
import Err404 from '@/views/error/404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/article',
    name: 'ArticleList',
    component: ArticleList
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/project',
    name: 'project',
    component: Project
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/article/:id',
    name: 'article',
    component: Article
  },
  {
    path: '/article/:id/edit',
    name: 'editarticle',
    component: EditArticle
  },
  {
    path: '/user/article/add',
    name: 'editarticle',
    component: EditArticle
  },
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/loginout',
    name: 'loginout',
    component: Loginout
  },

  // 404
  {
    path: '/404',
    name: '404',
    component: Err404
  },
  {
    path: '*',
    name: '404',
    component: Err404
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
