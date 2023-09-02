import { useEffect } from "react";
import { useProductsService } from "../../../services/products";
import { ServerError } from "../../../shared";

export function CMSProductsPage() {
    
    const { state, actions } = useProductsService();

    useEffect(() => {
        actions.getProducts();
    }, []);

    return (
        <div>
            <h1 className="title">CMS</h1>
            Pagina prodotti

            <hr className="my-8"/>

            { state.pending && <div>Loading</div> }
            { state.error && <ServerError message={state.error} /> }

            
        </div>
    )
}