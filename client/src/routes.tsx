import { createBrowserRouter } from 'react-router-dom';
import { HomePage, LoginForm } from './App';

export const app_router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/login",
        element: <LoginForm />,
    }
]);