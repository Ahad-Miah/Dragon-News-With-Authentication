import { NavLink } from "react-router-dom";
import profile from "../../assets/user.png"


const Navbar = () => {
    return (
        <div className="flex justify-between mt-8">
            <div></div>
            <div className="flex gap-2 *:text-gray-500">
                <NavLink to='/'>Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="career">Career</NavLink>
            </div>
            <div className="flex justify-center items-center gap-2">
                <div>
                    <img src={profile} alt="" />
                </div>
                <div>
                    <button className="rounded-none bg-gray-800 text-white px-4 py-1">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;