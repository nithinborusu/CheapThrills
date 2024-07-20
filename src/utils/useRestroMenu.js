import { MENU_LINK } from '../utils/constants';
import { useState,useEffect } from "react";

 const useRestroMenu = (resId)=>{

const [resInfo, setResInfo] = useState(null);

 

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_LINK + resId);
    const json = await data.json();
    // console.log(json);
    setResInfo(json.data);
  };

  return resInfo;

}

export default useRestroMenu;