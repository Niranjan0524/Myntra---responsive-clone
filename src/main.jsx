import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css';
import Bag from "./routes/Bag.jsx";
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import Home from './routes/Home.jsx';
import {Provider} from 'react-redux';
import myntraStore from './store/index.js';
import MenSection from './routes/MenSection.jsx';
import WomenSection from './routes/WomenSection.jsx';
import KidsSection from './routes/KidsSection.jsx';
import HomeLivingSection from './routes/HomeLivingSection.jsx';
import BeautySection from './routes/BeautySection.jsx';
import StudioSection from './routes/Studio.jsx';
import WishList from './routes/WishList.jsx';
import LoginSignup from './routes/Login_Signup.jsx';
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[     
      {path:"/",element:<Home/>,} ,
      {path:"/bag",element:<Bag/>,},
      {path:"/men",element:<MenSection/>},
      {path:"/women",element:<WomenSection/>},
      {path:"/kids",element:<KidsSection/>},
      {path:"/homeandliving",element:<HomeLivingSection/>},
      {path:"/beauty",element:<BeautySection/>},
      {path:"/studio",element:<StudioSection/>},
      {path:"/wishlist",element:<WishList/>},
      {path:"/loginSignup",element:<LoginSignup/>}
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>

    <RouterProvider router={router}>
    </RouterProvider>

    </Provider>
  </React.StrictMode>,
)
