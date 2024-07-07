import React ,{lazy,Suspense}from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
// import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import RestroMenu from './components/RestroMenu'
import Login from './components/Login'
import Shimmer from './components/Shimmer'

import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
// import Instamart from './components/Instamart'

// * Modularity is also known as:
// * Chunking
// * Code Splitting
// * Dynamic Bundling
// * Lazy Loading
// * On-Demand Loading
// * Dynamic Import
const Instamart = lazy(()=>import("./components/Instamart"))
const About = lazy(()=>import('./components/About'))


const AppList = ()=>{
   
    return (
        <div className='App'>
            <Header/>
           <Outlet/>
            <Footer/>
        </div>
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

