import { NavLink } from "react-router-dom";
import logo from "../../../assets/laptop.png";

const isActive = (obj: {isActive: boolean}) =>
  obj.isActive ? 'text-xl text-sky-400 font-bold' : 'text-xl text-white';

export function NavBar() {
    return (
        <div className="fixed top-0 left-0 right-0 shadow-2xl z-10">
            <div className="bg-indigo-900 flex justify-between items-center h-20 text-white p-3">
                
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img src={logo} alt="my logo" className="w-16"/>
                    <NavLink to="shop" className={isActive}>Shop</NavLink>
                </div>

                <div>
                    <NavLink to="login" className="btn accent lg">login</NavLink>
                    <NavLink to="cms" className="btn accent lg">CMS</NavLink>
                    <button className="btn primary lg">logout</button>
                </div>

                {/* Button cart */}
                <div>
                    <button className="btn accent lg">
                        Cart: 0
                    </button>
                </div>

                
                
            </div>
        </div>
    )
}