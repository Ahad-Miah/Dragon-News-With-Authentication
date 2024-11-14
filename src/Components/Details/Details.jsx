import { Link, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import RightSide from "../RightSide/RightSide";
import { GoArrowDownLeft, GoArrowLeft } from "react-icons/go";


const Details = () => {
    const { data: details } = useLoaderData();
    console.log(details[0].category_id);

    return (
        <div className="container mx auto">
            <Header></Header>

            <div className="grid grid-cols-12 mt-8 gap-3">

                <div className="col-span-9">
                    <div className="card w-full bg-base-100 shadow-lg border *:text-left border-gray-200 rounded-lg p-6">
                        <figure className="mb-4">
                            <img src={details[0].image_url} alt={details[0].title} className="w-full h-full object-cover rounded-lg" />
                        </figure>
                        <h2 className="text-xl font-bold mb-2">{details[0].title}</h2>
                        <p className="text-gray-600 text-sm mb-4">
                            {details[0].details}
                        </p>
                        <Link to={`/category/${details[0].category_id}`}>
                        <button className="btn btn-secondary w-6/12 flex items-center space-x-2 mt-4 rounded-none ">
                            <span className="flex justify-center items-center gap-2">
                            <GoArrowLeft />All news in this category</span>
                           
                        </button>
                        </Link>
                    </div>
                </div>

                <div className="col-span-3">
                    <RightSide></RightSide>
                </div>
            </div>

        </div>
    );
};

export default Details;