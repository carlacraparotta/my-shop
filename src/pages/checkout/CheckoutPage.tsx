import { useState } from "react";
import { selectTotalCartCost, useCart } from "../../services/cart"

export function CheckoutPage() {
    const [user, setUser] = useState({name: '', email: ''});
    const totalCartCost = useCart(selectTotalCartCost);

    return (
        <div className="page-sm">
            <h1 className="title">CHECKOUT</h1>

            <div className="text-xl my-3 border-b">€ {totalCartCost}</div>

            <form action="" className="flex flex-col gap-3">
                Il tuo nome:
                <input type="text" placeholder="Inserisci nome" value={user.name}/>

                La tua e-mail:
                <input type="email" placeholder="Inserisci email" value={user.email}/>

                <button className="btn primary">Conferma ordine!</button>

            </form>
        </div>
    )
}