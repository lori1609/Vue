import User from './components/user/User.vue';
import Home from './components/Home.vue';
import UserStart from './components/user/UserStart.vue';
import UserEdit from './components/user/UserEdit.vue';
import UserDetail from './components/user/UserDetail.vue';
import Header from './components/Header.vue';

export const routes = [
  {path: '', name: 'Home', components: {
    default: Home,
    'header-top': Header
  }},
  {path: '/user', name: 'User', components: {
    default: User,
    'header-bottom': Header
  }, children: [
    { path: '', name: 'UserStart', component: UserStart },
    { path: ':id', name: 'UserDetail', component: UserDetail },
    { path: ':id/edit', name: "UserEdit", component: UserEdit }
  ]},
  {path: 'redirect-me', redirect: {name: 'User'}}
]
