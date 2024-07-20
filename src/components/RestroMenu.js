import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
// import ShimmerMenu from './ShimmerMenu';
import { CDN_LINK } from '../utils/constants';
import { FiClock } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';
import useRestroMenu from '../utils/useRestroMenu';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestroMenu(resId);
  
  const [ShowIndex,SetShowIndex] = useState(0);

 toggleShowIndex =(index)=>{
     if(ShowIndex === index){
       SetShowIndex(-1);
     }
     else{
      SetShowIndex(index);
     }
 }

  if (resInfo === null) return <Shimmer />;

  const restaurantDetails = resInfo?.cards?.[2]?.card?.card?.info || {};
  const {
    name,
    cuisines,
    costForTwoMessage,
    cloudinaryImageId,
    avgRating,
    sla,
  } = restaurantDetails;

  // const menuCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];
  // console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  
  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>
    c?.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);
console.log(categories);


  return (
    <div className=" text-center py-4 bg-[rgb(239,233,217)] ">
      <header className="w-1/2 bg-[#023469] mx-auto flex flex-wrap justify-center items-center lg:justify-normal ">
        {cloudinaryImageId && (
         
            <img  className="w-[300px]  h-[180px]   p-2 lg:h-auto  lg:mr-10 lg:w-3/12"src={CDN_LINK + cloudinaryImageId} alt="Restaurant Info" />
          
        )}
        <div className="flex flex-col lg:space-y-4 ">
          <div className="mb-4 text-wrap">
            <h1 className='text-xl text-white font-bold lg:text-3xl'>{name || 'Restaurant Name'}</h1>
            {cuisines &&
             <h3 className='text-sm  text-slate-100  italic '>{cuisines.join(', ')}</h3>}
          </div>
          <div className="flex justify-evenly gap-3 mb-2">
            {avgRating && (
              <h4 className="flex items-center bg-green-700 px-1  rounded-md text-slate-300 mr-2">
                <span
                  className="icons"
                  
                >
                  <AiOutlineStar />
                </span>
                <span>{avgRating}</span>
              </h4>
            )}
            {sla?.deliveryTime && (
              <h4 className="flex items-center text-slate-300">
                <span className="icons mr-1" >
                  <FiClock />
                </span>
                <span> {sla.deliveryTime} MINS</span>
              </h4>
            )}
            <h3 className='text-slate-300'>{costForTwoMessage || 'Cost for Two'}</h3>
          </div>
        </div>
      </header>
      {
        categories.map((category,index)=>(               
          <RestaurantCategory key={category?.card?.card.title}
           data = {category?.card?.card}
           index={index}
           Showitems={index===ShowIndex?true:false}
           toggleShowIndex ={()=>{toggleShowIndex(index)}}

           
          />


        ))
      }
       
    </div>
  );
};

export default RestaurantMenu;
