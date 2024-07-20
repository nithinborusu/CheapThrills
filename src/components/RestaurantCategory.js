import { HiChevronDown } from "react-icons/hi";
import ItemList from "./ItemList";

const RestaurantCategory = ({data,Showitems,toggleShowIndex})=>{
    
    const handleClick =()=>{
           
        toggleShowIndex();
    };
    return (
        <div className="w-6/12 mx-auto my-8 shadow-2xl  p-4 bg-white ">
            <div className="flex justify-between hover:cursor-pointer"
            onClick={handleClick}
            >
              <span className="text-xl font-bold">{data?.title}({data.itemCards.length})</span>
              <span className="text-3xl">
                <HiChevronDown/>
               </span>  
            </div>

            { Showitems&&<ItemList items={data.itemCards} /> }
           

        </div>
    );
  
}

export default  RestaurantCategory;