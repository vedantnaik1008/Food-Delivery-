import Home from './pages/Home';
import { Restuarants } from './pages/Restuarants';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import CreateRestaurant from './pages/CreateRestaurant';
import ResOwnerPage from './pages/ResOwnerPage';

export const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/restuarants',
        element: <Restuarants />
    },
    {
        path: '/restuarants/:id',
        element: <ResOwnerPage />
    },
    {
        path: '/user/signin',
        element: <SignIn />
    },
    {
        path: '/user/signup',
        element: <SignUp />
    },
    {
        path: '/register-restaurant',
        element: <CreateRestaurant />
    }
];
