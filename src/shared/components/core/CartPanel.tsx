import { useNavigate } from "react-router-dom";
import { selectCartList, selectTotalCartCost, useCart, useCartPanel } from "../../../services/cart";

export function CartPanel() {

    const navigate = useNavigate();
    const closeCartPanel = useCartPanel(state => state.closeOverlay);
    const list = useCart(selectCartList);
    const totalCartCost = useCart(selectTotalCartCost);

    function goToCart(): void {
        navigate("cart");
        closeCartPanel();
    }

    return (
        <div className="fixed bg-slate-800 right-4 top-32 p-3 rounded-xl shadow-2xl w-96">
            <ul className="flex flex-col gap-4">
                {
                    list.map(item => {
                        return (
                            <li key={item.product.id} className="flex justify-between items-center border-b border-slate-600 pb-3">
                                <div>{item.product.name}</div>
                                <div className="flex gap-3">
                                    <div>({item.quantity} x € {item.product.cost})</div>
                                    <div>{item.product.cost * item.quantity}</div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul> 

            <div className="flex justify-end text-xl font-bold my-3">
                Totale: € {totalCartCost}
            </div>

            <div className="flex justify-center">
                <button className="btn primary" onClick={goToCart}>Vai al Carrello</button>
            </div>
        </div>
    )
}