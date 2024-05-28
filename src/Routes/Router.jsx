
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
       
      ],
    },
    {
      path: "*",
      element: <ErrorPage/>,
    },
  ]);
  


export default router;