
import { RiGoogleLine } from "react-icons/ri";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"
import swimming from "../../assets/swimming.png"
import Class from "../../assets/class.png"
import playground from "../../assets/playground.png"

const RightSide = () => {
    return (
        <div>
            <h1 className="text-gray-700 font-bold text-left">Login With</h1>

            <div className="flex flex-col gap-2 mt-3 *:bg-white">
                <button className="btn border border-blue-400 rounded-lg text-blue-500"><RiGoogleLine /> Login with Google</button>
                <button className="btn border border-slate-700 rounded-lg text-slate-700"><FaGithub /> Login with Github</button>
            </div>
            <h1 className="text-gray-700 my-4 font-bold text-left">Find Us on</h1>

            <div className="join flex join-vertical *:bg-base-100">
                <button className="btn justify-start join-item">   <FaFacebook />  Facebook</button>
                <button className="btn justify-start join-item">  <FaTwitter />  Twitter</button>
                <button className="btn justify-start join-item"> <FaInstagram />Instagram</button>
            </div>

            <div className="bg-base-300 p-3">
                <h1 className="text-gray-700 font-bold text-left">Q-Zone</h1>

                <div className="flex flex-col gap-3">

                    <img src={swimming} alt="" />
                    <img src={Class} alt="" />
                    <img src={playground} alt="" />

                </div>

            </div>


        </div>
    );
};

export default RightSide;