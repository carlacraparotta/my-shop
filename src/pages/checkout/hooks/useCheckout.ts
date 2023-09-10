import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { OrderForm } from "../../../model/order-form";
import { selectCartList, selectClearCart, selectTotalCartCost } from "../../../services/cart/cart.selectors";
import { useCart } from "../../../services/cart";
import { useOrdersService } from "../../../services/orders";
import { ClientResponseError } from "pocketbase";

export function useCheckout() {
    const [user, setUser] = useState({name: '', email: ''});
    const [dirty, setDirty] = useState(false);
    const navigate = useNavigate();

    const clearCart = useCart(selectClearCart);
    const totalCartCost = useCart(selectTotalCartCost);
    const order = useCart(selectCartList);
    const { actions, state } = useOrdersService();

    const isNameValid = user.name.length;
    const isEmailValid = user.email.length;
    const isValid = isEmailValid && isNameValid;


    function changeHandler(e: ChangeEvent<HTMLInputElement>): void {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        setUser(state => ({...state, [name]: value}));
        setDirty(true);
        
    }

    function sendOrder(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        const orderInfo: OrderForm = {
            user, 
            order,
            status: 'pending',
            total: totalCartCost
        }

        actions.addOrder(orderInfo)
               .then(response => {
                    if(!(response instanceof ClientResponseError)) {                   
                        clearCart();
                        navigate('/thankyou');
                    }
                });
    }

    return {
        validators: {
            isNameValid,
            isEmailValid,
            isValid,
        },
        
        actions: {
            sendOrder,
            changeHandler,
        },
        

        user,
        dirty,
        totalCartCost,
        error: state.error
    }
}