
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { Link } from "react-router-dom";
import { clearCart } from "../utils/cartSlice";
const Cart =()=>{
    const cartItems = useSelector((store)=> store.cart.items)
    console.log(cartItems);
    const dispatch = useDispatch();

    const handleClearCart = ()=>{

        dispatch(clearCart());
    }
    return(

        <div className="text-center  m-4 p-2  ">
            <h1 className="font-bold text-2xl">Cart</h1>

            <ItemList items={cartItems} />
            {

           cartItems.length!==0?
          (<button className="bg-black text-white rounded-lg px-2  py-1 my-10 text-xl"
            onClick={handleClearCart}
          >Clear Cart</button>):
             <div className="my-8  ">
                <h1 className="text-red-600 my-4">Cart is Empty!!</h1>
                <h2 className="mb-6">Add Items To your Cart</h2>
                <Link to='/' className="bg-black text-white p-2 ">Browse Restaurants</Link>
             </div>
            }
           
        </div>
    )
}

export default Cart;