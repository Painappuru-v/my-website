import { lazy } from 'react'
// import {Navigate} from 'react-router-dom'
// import Loading from '../components/Loading'
// import Home from '../pages/Home/index'
// import Blog from '../pages/Blog/index'
// import Illustration from '../pages/Illustration/index'
// import PCDIY from '../pages/PCDIY/index'
// import Customization from '../pages/KeyboardCustomization/index'
// import PoemName from '../pages/PoemName/index'
const Home = lazy(() => import('../pages/Home/Home'))
const Blog = lazy(() => import('../pages/Blog/Blog'))
const Illustration = lazy(() => import('../pages/Illustration/Illustration'))
const PCDIY = lazy(() => import('../pages/PCDIY/DIY'))
const Garbage = lazy(() => import('../pages/Garbage/Garbage'))
const Customization = lazy(() => import('../pages/KeyboardCustomization/Customization'))
const PoemName = lazy(() => import('../pages/PoemName/PoemName'))

const routes = [
    // {
    //     path: "/",
    //     element: <Navigate to="/home"/>
    // },
    {
        path: "/home",
        element: <Home/>

    },
    {
        path: "/blog",
        element: <Blog/>
    },
    {
        path: "/illustration",
        element: <Illustration/>
    },
    {
        path: "/pc-diy",
        element: <PCDIY/>
    }, 
    {
        path: "/pc-garbage",
        element: <Garbage/>
    }, 
    {
        path: "/keyboard-customization",
        element: <Customization/>
    },  
    {
        path: "/poem-name",
        element: <PoemName/>
    },
    
]

export default routes