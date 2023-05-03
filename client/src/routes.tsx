import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from './App';
import LoginPage from './components/loginPage';

export const app_router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    }
]);