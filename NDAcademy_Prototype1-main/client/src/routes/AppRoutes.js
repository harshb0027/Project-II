/*
*AUTHORS: Daniel Gribanov, Mathieu Theriault
*PURPOSE: Browser routing for application.
*VERSION:1.0
*DATE:
*/
import { Login } from "../components/Login/Login";
import { Features } from "../components/NavMenu/Features";
import { Fees } from "../components/NavMenu/Fees";
import { Home } from "../components/NavMenu/Home";
import Signup from "../components/Signup/Signup.js";
import { AboutUS } from "../components/NavMenu/AboutUS";
import { Ad } from "../components/Ads/Ad";
import { FAQ } from "../components/FAQ'S/faq's";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/ads',
    element: <Ad />
  },
  {
    path: '/features',
    element: <Features />
  },
  {
    path: '/FAQ',
    element: <FAQ />
  },
  
  {
    path: '/fees',
    element: <Fees />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/aboutus',
    element: <AboutUS />
  }
];

export default AppRoutes;
