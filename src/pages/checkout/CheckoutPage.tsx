import clsx from "clsx";

import { useCheckout } from "./hooks/useCheckout";

export function CheckoutPage() {
    const {
        validators, actions,
        user, dirty, totalCartCost
    } = useCheckout();

    return (
        <div className="max-w-sm mx-auto">
            <h1 className="title">CHECKOUT</h1>

            <div className="text-xl my-3 border-b">€ {totalCartCost}</div>

            <form action="" className="flex flex-col gap-3" onSubmit={actions.sendOrder}>
                Il tuo nome:
                <input 
                    type="text" 
                    placeholder="Inserisci nome" 
                    name="name" 
                    value={user.name} 
                    onChange={actions.changeHandler}
                    className={clsx({ "error": !validators.isNameValid && dirty })}
                />  

                La tua e-mail:
                <input 
                    type="email" 
                    placeholder="Inserisci email" 
                    name="email" 
                    value={user.email} 
                    onChange={actions.changeHandler}
                    className={clsx({ "error": !validators.isEmailValid && dirty})}
                />

                <button 
                    type="submit" 
                    className={clsx ("btn", {primary: !validators.isValid, success: validators.isValid})} 
                    disabled={!validators.isValid}
                >
                    Conferma ordine!
                </button>

            </form>
        </div>
    )
}