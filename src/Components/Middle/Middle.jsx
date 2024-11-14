import React from 'react';
import { useLoaderData, useParams} from 'react-router-dom';
import News from '../News/News';

const Middle = () => {

    const {data:newses} =useLoaderData();
    console.log(newses);

    return (
        <div>
           <h1 className='font-bold text-left text-gray-600'>Dragon news Home</h1>

           <div>
           {
            newses.map(news => <News news={news}></News>)
           }
           </div>

         
        </div>
    );
};

export default Middle;