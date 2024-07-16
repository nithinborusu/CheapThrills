
import { CDN_LINK } from "../utils/constants";
import { AiOutlineStar } from 'react-icons/ai';
import { AiOutlineClockCircle } from "react-icons/ai";
const RestroCard= (props)=>{
    const {resData} = props;

    const{cloudinaryImageID,
      name,
      cuisines,
      avgRating,
      sla,
      costForTwo,
   } = resData?.info;
   if (!resData) {
    return null;
  }
    return (
       <div className='m-8 border shadow-xl  rounded-lg duration-200 hover:scale-105 h-full w-[260px] bg-[#024388] text-white'>

           <img className='rounded-t-lg w-full h-[200px] '
               src= {CDN_LINK + resData.info.cloudinaryImageId}
               alt='food'/>
           <div className="m-2 p-1">
           <h3 className="pb-1 text-xl text-white  font-bold truncate ...">{name}</h3>
           <hr/>
           <h4 className=" pt-1 text-sm text-slate-200 italic truncate ...">{cuisines.join(", ")}</h4>
           <h4 className=" mt-1 text-md text-slate-100">{costForTwo} </h4>
           <div className=" my-1 mt-2 flex space-x-8 items-center"> 
            
           <h4 className="px-1 flex items-center bg-green-700 rounded-md">
            <span>
              <AiOutlineStar/>
            </span>
            {avgRating} </h4>
           <h4 className="flex  items-center text-slate-100 ">
            <span>
              <AiOutlineClockCircle/> 
            
            </span>
            {sla.deliveryTime}-mins</h4>
           
           </div>
           </div>

         
         
          
             
       </div>
    )
}; 

//higher order component
//input- Restaurant => restaurantcardPromoted



export default RestroCard;