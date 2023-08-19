import { NavLink } from "react-router-dom";
import { 
    selectCartIsEmpty,
    selectCartList,
    selectDecreaseQuantity,
    selectIncreaseQuantity,
    selectTotalCartCost,
    useCart } 
from "../../services/cart"

export function CartPage() {
    
    const isEmpty = useCart(selectCartIsEmpty);
    const list = useCart(selectCartList);
    const totalCost = useCart(selectTotalCartCost);

    const decreaseQuantity = useCart(selectDecreaseQuantity);
    const increaseQuantity = useCart(selectIncreaseQuantity);
    
    return (
        <div>
            <h1 className="title">CART</h1>

            <ul>
                {
                    list.map(item => (
                        <li
                            key={item.product.id}
                            className="flex flex-col sm:flex-row justify-between items-center 
                                       gap-3 my-3 border-b border-white py-3"
                        >
                            <div className="flex items-center gap-3">
                                <img src={item.product.tmb} alt={item.product.name} 
                                     className="w-24 rounded-xl"/>
                                <div className="font-bold">{item.product.name}</div> 
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 items-center">
                                <div className="flex items-center gap-3">

                                    <button className="btn primary"
                                            onClick={() => decreaseQuantity(item.product.id)}>
                                        -
                                    </button>

                                    <div>quantità: {item.quantity}</div>

                                    <button className="btn primary" 
                                            onClick={() => increaseQuantity(item.product.id)}>
                                                +
                                    </button>
                                </div>

                                <div className="w-16 text-center">
                                    € {item.product.cost * item.quantity}
                                </div>


                            </div>
                            
                        </li>
                    ))
                }
            </ul>

            <div className="text-4xl text-right my-4 mr-4">
                Totale: € {totalCost}
            </div>

            {
                !isEmpty &&
                <div className="flex justify-center">
                    <NavLink to="/checkout" className="btn primary lg">Conferma Ordine!</NavLink>
                </div>
            }
            
        </div>
    )
}