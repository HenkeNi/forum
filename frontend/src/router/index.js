import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/pages/HomePage';
import SubforumPage from '@/pages/SubforumPage';
import ThreadPage from '@/pages/ThreadPage';
import ThreadCreationPage from '@/pages/ThreadCreationPage';
import ProfilePage from '@/pages/ProfilePage';
import MessagePage from '@/pages/MessagePage';
import ConversationsPage from '@/pages/ConversationsPage';
import UserListPage from '@/pages/UserListPage';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/forum/:subforum',
    name: 'SubforumPage',
    component: SubforumPage,
    props: true,
  },
  {
    path: '/thread/:thread',
    name: 'ThreadPage',
    component: ThreadPage,
    props: true,
  },
  {
    path: '/threadCreation/:subforum',
    name: 'threadCreation',
    component: ThreadCreationPage,
    props: true,
  },
  {
    path: '/profile/:user',
    name: 'ProfilePage',
    component: ProfilePage,
    props: true,
  },
  {
    path: '/messagepage/:user',
    name: 'MessagePage',
    component: MessagePage,
    props: true,
  },
  {
    path: '/conversationspage/:user',
    name: 'ConversationsPage',
    component: ConversationsPage,
    props: true,
  },
  {
    path: '/userlistpage',
    name: 'UserListPage',
    component: UserListPage,
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;