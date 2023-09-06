import { NavLink, useNavigate } from "react-router-dom";

import logo from "../../../assets/carla_shop_logo.png";

import { CartPanel } from "./CartPanel";
import { selectCartIsEmpty, selectTotalCartItems, useCart, useCartPanel } from "../../../services/cart";
import { selectAuthLogout, useAuth } from "../../../services/auth";
import { IfLogged } from "../..";

const isActive = (obj: {isActive: boolean}) =>
  obj.isActive ? 'text-3xl text-pink-600 font-bold' : 'text-3xl text-white font-bold';

export function NavBar() {

    const logout = useAuth(selectAuthLogout);
    const navigate = useNavigate();

    const isCartPanelOpened = useCartPanel(state => state.open);
    const toggleCartPanel = useCartPanel(state => state.toggle);
    const totalCartItems = useCart(selectTotalCartItems);
    const isEmpty = useCart(selectCartIsEmpty);

    function logoutHandler(): void {
       logout();
       navigate("/login");
    }

    return (
        <div className="fixed top-0 left-0 right-0 shadow-2xl z-10">
            <div className="bg-pink-200 flex justify-between items-center h-24 text-white p-3">
                
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img src={logo} alt="my logo" className="w-24"/>
                    <NavLink to="shop" className={isActive}>Shop</NavLink>
                </div>


                {/* Button cart */}
                <div>
                    <button className="btn accent lg" disabled={isEmpty} onClick={toggleCartPanel}>
                        Carrello: {totalCartItems}
                    </button>
                </div>

                {/* CartPanel */}
                { isCartPanelOpened && <CartPanel />}

                {/*actions button*/}
                <div className="fixed bottom-2 right-2 p-5">
                    
                    <NavLink to="cms" className="btn accent lg">CMS</NavLink>
                    <IfLogged else={
                        <NavLink to="login" className="btn accent lg">login</NavLink>
                    }>
                        <button onClick={logoutHandler} className="btn primary lg">logout</button>
                    </IfLogged>
                </div>
                
            </div>
        </div>
    )
}