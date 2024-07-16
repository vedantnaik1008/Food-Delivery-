import Home from './pages/Home';
import { Restuarants } from './pages/Restuarants';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';

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
        path: '/user/signin',
        element: <SignIn />
    },
    {
        path: '/user/signup',
        element: <SignUp />
    }
];
