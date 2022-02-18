import { withNavigationWatcher } from './contexts/navigation';
import { TasksPage, ProfilePage } from './pages';
import { HomePage } from './pages/home/home';
import { ReservePage } from './pages/reserve/reserve';

const routes = [
  {
    path: '/tasks',
    component: TasksPage
  },
  {
    path: '/profile',
    component: ProfilePage
  },
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/reserve',
    component: ReservePage
  }
];

export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
});
