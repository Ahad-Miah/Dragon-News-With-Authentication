import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSide = () => {
  const[categories,setCategories]=useState([]);

  useEffect(()=>{

    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res=>res.json())
    .then(data=>setCategories(data.data.news_category))
    .catch(err=>console.log(err));
  },[])
 
    return (
        <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-left">All category</h1>
            {
                categories.map(category=> <NavLink  key={category.category_id} to={`/category/${category.category_id}`} className="btn bg-white">{category.category_name}</NavLink>)
            }
        </div>
    );
};

export default LeftSide;