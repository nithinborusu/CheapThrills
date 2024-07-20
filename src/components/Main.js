import RestroCard, {isVeg} from "./RestroCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import { API_LINK } from "../utils/constants";
import { Link } from "react-router-dom";
import { useOnline } from "../utils/useOnline";
import Offline from "./Offline";
import UserContext from "../utils/UserContext";

const Main = () => {


  const [resList, setRestros] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [noResError, setNoResError] = useState("");
  
  const {LoggedInUser,setUserName} = useContext(UserContext);

  const RestroCardVeg = isVeg(RestroCard);
  const isOnline = useOnline();

  console.log("list",resList);
  useEffect(() => {
    fetchapi();
  }, []);

  const fetchapi = async () => {
    try {
      const response = await fetch(API_LINK);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setRestros(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
      setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
      setNoResError("");
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const handleSearch = (searchText) => {
    if (searchText) {
      const searchedRestros = resList.filter(
        (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setListOfRestaurants(searchedRestros);
      if (searchedRestros.length === 0) {
        setNoResError("No Restaurants Found");
      } else {
        setNoResError("");
      }
    } else {
      setListOfRestaurants(resList);
      setNoResError("");
    }
  };

  if (!isOnline) {
    return <Offline />;
  }

  return(listOfRestaurants.length==0)? (
    <Shimmer />
  ):
  (
    <div className="bg-[rgb(239,233,217)]" >
      <div className="filter bg-[url('./public/Images/bgrnd.jpg')] text-slate-100 text-center p-8 bg-fixed">
        <div className="m-8 mt-0 whitespace-nowrap">
          <div className="heading text-3xl">Order Delivery & Take-Out</div>
          <div className="m-2 text-lg">Find Best Restaurants near you</div>
        </div>

        <div className="Search m-2 space-x-2 text-black">
          <input
            type="text"
            value={searchText}
            className="rounded-md h-8 w-4/5 sm:w-1/5 p-3"
            placeholder="Search For Your fav Restra.."
            onChange={(e) => {
              const text = e.target.value;
              setSearchText(text);
              handleSearch(text);
            }}
          />
          <button className="h-8 mx-4 px-4 bg-red-700 text-slate-100 rounded-md hidden sm:inline-block">Search</button>
        </div>
      </div>

      <div className="top-rated my-4 flex items-center justify-center text-white gap-3 ">
        <button
          className="bg-red-700 p-2 px-4  rounded-md"
          onClick={() => {
            const topRestros = resList.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfRestaurants(topRestros);
            if (topRestros.length === 0) {
              setNoResError("No Top Rated Restaurants Found");
            } else {
              setNoResError("");
            }
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="text-black">
          <label className="font-bold">UserName: </label>
          <input className="border border-black p-2"
          value={LoggedInUser}  onChange={(e)=>setUserName(e.target.value)}
          />
        </div>
      
      </div>

      {noResError ? (
        <div className="text-center text-red-500">{noResError}</div>
      ) : (
        <div className="mx-6 my-2 p-2 flex flex-wrap gap-2 justify-center items-center">
          {listOfRestaurants.map((restaurant) => (
            <Link to={'/restaurants/' + restaurant.info.id} key={restaurant.info.id}>
             

              {restaurant.info.veg?(
                <RestroCardVeg resData={restaurant}/>
              ):
              (<RestroCard resData={restaurant} />

              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;
