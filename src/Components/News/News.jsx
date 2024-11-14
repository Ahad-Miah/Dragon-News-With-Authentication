import React from 'react';
import { FaShareAlt, FaStar, FaEye } from 'react-icons/fa';

const News = ({ news }) => {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <div className="flex justify-between items-center px-4 pt-4">
        <div className="flex items-center space-x-3">
          <img src={news.author.img} alt={news.author.name} className="w-10 h-10 rounded-full" />
          <div>
            <h2 className="font-bold">{news.author.name}</h2>
            <p className="text-xs text-gray-500">{new Date(news.author.published_date).toLocaleDateString()}</p>
          </div>
        </div>
        <button className="btn btn-circle btn-ghost">
          <FaShareAlt size={20} />
        </button>
      </div>
      <figure>
        <img src={news.image_url} alt={news.title} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{news.title}</h2>
        <p className="text-gray-600 text-sm mb-2">{news.details.substring(0, 100)}... <span className="text-primary">Read More</span></p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaStar className="text-yellow-500" />
            <span className="ml-1 font-semibold text-gray-600">{news.rating.number}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaEye />
            <span className="ml-1">{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
