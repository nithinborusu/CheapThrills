import { CDN_LINK } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    const handleAdditems =(item)=>{
        dispatch(addItem(item));
    }
    return (
        <div>
            {items.map((item) => (
                <div className='shadow-lg m-2 my-2 p-2 text-left border-b border-black  flex justify-between  '
                key={item?.card?.info?.id}>
                    <div className='w-9/12 '>
                        <div className='py-6 flex flex-col space-y-2'>
                            <span className='text-l font-semibold text-red-900'>{item?.card?.info?.name}</span>
                            <span className='text-md font-semibold'>₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</span>
                        </div>
                        <p className='text-sm'>{item?.card?.info?.description}</p>
                    </div>
                    <div className='w-3/12 '>
                       <div className='absolute'>

                       <button className="p-2  mt-[80px] ml-5 rounded-lg bg-black text-white shadow-lg hover:bg-green-800  transition-all duration-[.3s] "
                          onClick={()=>handleAdditems(item)}>
                            Add+
                        </button>
                       </div>
                       
                        <img
                            src={CDN_LINK + item?.card?.info?.imageId}
                            alt={item?.card?.info?.name || 'Item Image'}
                            className=' w-full h-[100px] lg:w-[144px] lg:h-[156px] '
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
