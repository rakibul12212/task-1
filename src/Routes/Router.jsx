
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';
import Main from '../Layout/Main';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/signin",
          element: <SignIn/>,
        },
        {
          path: "/signup",
          element: <SignUp/>,
        },
       
      ],
    },
    {
      path: "*",
      element: <ErrorPage/>,
    },
  ]);
  


export default router;