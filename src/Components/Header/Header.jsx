import moment from "moment/moment";
import logo from "../../assets/logo.png"
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
             <div>
             <img src={logo} alt="" />
             </div>
             <div>
                <h1 className="text-gray-500">Journalism Without Fear or Favour</h1>
               <p className="text-gray-400">{ moment().format("dddd, MMMM Do YYYY")}</p>
             </div>
                
            </div>

            <div className="flex p-2 bg-gray-200 mt-4">
                <p className="bg-[#D72050] text-white py-2 px-3">Latest</p>
                <Marquee pauseOnHover={true}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur temporibus quod quo? Voluptatum, dolore. Dolor accusantium qui provident repellendus vero.</Marquee>
            </div>
        </div>
    );
};

export default Header;