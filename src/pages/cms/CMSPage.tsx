import { NavLink, Outlet } from "react-router-dom";

const isActive = (obj: {isActive: boolean}) => {
    return obj.isActive ? 'btn primary' : 'btn'
}

export function CMSPage() {
    return (
        <div>
            <NavLink className={isActive} to="/cms/products">Prodotti</NavLink>
            <NavLink className={isActive} to="/cms/orders">Ordini</NavLink>

            <Outlet />
        </div>
    )
}