import { Product } from "../../model/product";
import { useState, useEffect } from "react";
import { pb } from "../../pocketbase";

export function ShopPage() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      loadData()
    
    }, [])
    

    function loadData() {
        pb.collection('products').getList<Product>()
          .then(res => {
            setProducts(res.items)
          }) 
    }

    return (
        <div>
            <h1 className="title">SHOP</h1>

            {
            products.map(p => {
                return(
                    <li key={p.id}>
                        {p.name}
                    </li>
                )
            })
           }
        </div>
    )
}