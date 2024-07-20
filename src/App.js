import React ,{lazy,Suspense, useEffect, useState}from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Error from './components/Error'
import RestroMenu from './components/RestroMenu'
import Login from './components/Login'
import Shimmer from './components/Shimmer'
import UserContext from './utils/UserContext'
import Cart from './components/Cart'

import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'

const Instamart = lazy(()=>import("./components/Instamart"))
const About = lazy(()=>import('./components/About'))
 
const AppList = ()=>{
    const [userName,setUserName] = useState();
 useEffect(()=>{

    const data ={
        name:"NithiN"
    }
   setUserName(data.name);
   
 },[])
    return (
            <Provider store={appStore}>
                <UserContext.Provider value={{LoggedInUser:userName ,setUserName}}>
                    <div className='App'>
                        <Header/>
                        <Outlet/>
                        <Footer/>
                    </div>
                </UserContext.Provider>

            </Provider>
        
        
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppList/>,
        children:[
            {
                path:"/",
                element:<Main/>
            },
            {
                path:"/about",
                element:<Suspense fallback={<Shimmer/>}><About/></Suspense>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/Cart",
                element:<Cart/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestroMenu/>
            },

            {
                path:"/instamart",
                element:<Suspense fallback={<Shimmer/>}> 
                    <Instamart/>
                </Suspense>
            },
           
            
        ],
        errorElement:<Error/>
    },
    {
        path:"/login",
        element:<Login/>,
        errorElement:<Error/>
    }
   
  
])

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(<RouterProvider router={appRouter}/>);

