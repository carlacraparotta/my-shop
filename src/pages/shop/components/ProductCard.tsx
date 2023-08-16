import { Product } from "../../../model/product"

interface ProductCardProps {
    product: Partial<Product>;
    onAddToCart: (product: Partial<Product>) => void;
}

export function ProductCard(props: ProductCardProps) {
    const { onAddToCart, product } = props;

    return (
        <div key={product.id}
        className="bg-white text-black rounded-xl shadow-2xl overflow-hidden" >
        
            {product.img && <img src={product.img} alt={product.name} className="h-64 w-full object-cover" />}
            
            <div className="flex justify-between items-center p-3 text-xl font-bold">
            <div>{product.name}</div>
            <div>€ {product.cost}</div>
            </div>


            <p className="p-3">{product.description}</p>

            <button
                className="bg-sky-600 text-white hover:bg-sky-800 transition
                            w-full text-center font-bold p-3"
                onClick={() => onAddToCart(product)}>
                AGGIUNGI AL CARRELLO
            </button>
        </div>
    )

}