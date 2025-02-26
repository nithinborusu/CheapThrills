import { useState ,useEffect, useContext} from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';


const Title = () => (
    <Link className=" " to="/">  <div className="text-white flex items-center mx-4">
      <img data-testid="logo" className=" h-12" src="https://cdn-icons-png.flaticon.com/128/3655/3655682.png" alt="" />
      <h1 className="font-serif font-bold text-xl m-0 mx-1">Cheap Thrills</h1>
    </div>
    </Link>
  
  );
const Header=()=>{
    const [isFixed,setIsFixed] =  useState(false);
    const [btnName, setbtnName] = useState('Login');

    const location = useLocation();
    
     
    const {LoggedInUser} = useContext(UserContext);
    const cartItems = useSelector((store)=> store.cart.items);

   
    const navigate = useNavigate();
    const handleButtonClick = ()=>{
        // if(btnName ==='Login'){
        //     navigate('/login');
        // }
        // else{
        //     ///handle logout logic
        //     console.log('Logged out');
        //     navigate('/home');
        // }
        setbtnName(btnName ==='Login'?'Logout':'Login');
    };


    useEffect(()=>{
        const handleScroll =()=>{
            if(window.scrollY>50){
                setIsFixed(true);
            }
            else{
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll',handleScroll);
    },[]);


    return (
        <div className={`font-serif  ${isFixed? 'fixed  top-0 z-10':'relative' } w-full`} >
              <div className=' bg-fixed items-center bg-black shadow-2xl flex  flex-col sm:flex-row sm:justify-between'>
            <Title/>
            <div className='navitems py-5 whitespace-nowrap '>
                <ul className='flex flex-wrap text-white space-x-4 mx-4  lg:space-x-8 lg:mx-8 '>
                  
                    <li className={`p-2 px-4 rounded-lg hover:bg-[#192A56] ${location.pathname =="/"?"bg-[#192A56]":"hover:scale-105"}`}>
                        <Link to="/">Home</Link>
                        </li>
                    <li className={`p-2 px-4 rounded-lg hover:bg-[#192A56] ${location.pathname=="/about" ? "bg-[#192A56]": "scale-105"}`}>
                    <Link to="/about">About</Link>
                    </li>
                    <li className={`p-2 px-4 rounded-lg hover:bg-[#192A56] ${location.pathname =="/contact"? "bg-[#192A56]":"slate-105"}`}>
                        <Link to="/contact">Contact</Link>
                        </li>
                    <li className={`p-2 px-4 rounded-lg hover:bg-[#192A56] ${location.pathname =="#"? "bg-[#192A56]":"slate-105"}`}>
                    <Link to="/Cart">Cart ({cartItems.length} items)</Link>
                    </li>
                    <li className={`p-2 px-4 rounded-lg hover:bg-[#192A56] ${location.pathname =="/instamart"? "bg-[#192A56]":"slate-105"}`}>
                        
                        <Link to="/instamart">Instamart</Link>
                            </li>

                    <li className={`p-2 px-4 rounded-lg hover:bg-[#192A56] hover:slate-105`}>
                        <button className='btn'
                        
                        onClick={handleButtonClick}
                        
                        >{btnName}</button>
                    </li>
                    <li  className='p-2 px-4 text-yellow-300'>{LoggedInUser}</li>
                </ul>
            </div>
        </div>
        </div>
    
    )
}

export default Header;