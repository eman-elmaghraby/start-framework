import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Contact from './components/layout/contact/Contact';
import Home from './components/layout/home/Home';
import About from './components/layout/about/About';
import Portfolio from './components/layout/portfolio/Portfolio';
import NotFound from './components/layout/NotFound/NotFound';



const routers = createHashRouter([
  {path:'' , element:<Layout/>, children:[
    {path:'', element:<Navigate to={"/home"}/>},
    {path:"home", element: <Home/>},
    {path:"portfolio", element: <Portfolio/>},
    {path:"contact", element:<Contact/>},
    {path:"about", element:<About/>},
    {path:"*", element: <NotFound/>}
  ]}
]);

 export default function App() {
  return (
    <RouterProvider router={routers}></RouterProvider>
  );
}