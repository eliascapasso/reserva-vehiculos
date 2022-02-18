import { withNavigationWatcher } from './contexts/navigation';
import { TasksPage, ProfilePage } from './pages';
import { CameraPage } from './pages/camera/cameraPage';
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
  },
  {
    path: '/reserve/camera',
    component: CameraPage
  }
];

export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
});
