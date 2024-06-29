import logo from '../../logo.png'
import { useState } from 'react';
const Header=()=>{
    const [btnName, setbtnName] = useState('Login');
    return (
        <div className='header'>
            <div className='logoimg'>
                <img className='logo' alt="logo" src={logo}></img>
            </div>
            <div className='navitems-container'>
                <ul className='navitems'>
                    <li className='item'>Home</li>
                    <li className='item'>About</li>
                    <li className='item'>Contact</li>
                    <li className='item'>Cart</li>
                    <li>
                        <button className='btn'
                        
                        onClick={()=>{
                           btnName =='Login'?
                           setbtnName('Logout'):
                           setbtnName('Login')
                        }}
                        
                        >{btnName}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;