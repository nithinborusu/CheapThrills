import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
// import ShimmerMenu from './ShimmerMenu';
import { CDN_LINK } from '../utils/constants';
import { FiClock } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';
import useRestroMenu from '../utils/useRestroMenu';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestroMenu(resId);

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

  const menuCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

  return (
    <div className="flex flex-col justify-center items-center gap-10 ">
      <header className="my-10 mx-6 bg-[#024388] flex  items-center space-x-10 rounded-lg ">
        {cloudinaryImageId && (
          <div className="img"> 
            <img  className=" rounded-lg  h-[250px] "src={CDN_LINK + cloudinaryImageId} alt="Restaurant Info" />
          </div>
        )}
        <div className="pr-20">
          <div className="mb-4 text-wrap">
            <h1 className='text-xl text-white font-bold'>{name || 'Restaurant Name'}</h1>
            {cuisines &&
             <h3 className='text-sm  text-slate-100  italic '>{cuisines.join(', ')}</h3>}
          </div>
          <div className="bottom">
            {avgRating && (
              <h4 className="avg-rating">
                <span
                  className="icons"
                  style={{
                    position: 'relative',
                    top: '2px',
                      marginRight: '3px',
                  }}
                >
                  <AiOutlineStar />
                </span>
                <span>{avgRating}</span>
              </h4>
            )}
            {sla?.deliveryTime && (
              <h4 className="time">
                <span
                  className="icons"
                  style={{
                    position: 'relative',
                    top: '2px',
                    marginRight: '3px',
                  }}
                >
                  <FiClock />
                </span>
                <span> {sla.deliveryTime} MINS</span>
              </h4>
            )}
            <h3>{costForTwoMessage || 'Cost for Two'}</h3>
          </div>
        </div>
      </header>

      <div className="menu-main">
        <h2>Menu</h2>
        <h3 className="items">{menuCards.length} items</h3>
        <div className="menu-main-card-container">
          {menuCards.length > 0 ? (
            menuCards.map((item) => (
              <div key={item.card.info.id} className="menu-card">
                <div className="menu-card-left">
                  <h2 className="menu-name">{item.card.info.name}</h2>
                  <h3 className="menu-price">
                    ₹
                    {item.card.info.price / 100 ||
                      item.card.info.defaultPrice / 100}
                  </h3>
                  <h4 className="menu-description">
                    {item.card.info.description}
                  </h4>
                </div>
                {item.card.info.imageId && (
                  <div className="menu-card-right">
                    <img src={CDN_LINK + item.card.info.imageId} alt="Menu Info" />
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>No menu items available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
