import clsx from 'clsx';
import { Product } from '../../../../model/product';

export interface CMSProductsListProps {
    items: Product[];
    activeItem: Partial<Product> | null;
    onEditItem: (product: Partial<Product>) => void;
    onDeleteItem: (id: string) => void; 
}

export function CMSProductsList(props: CMSProductsListProps) {
  return (
    <div className="mt-12">
                
        <table className="table-auto w-full hover">
            
            <thead>
                <tr>
                    <th className="text-left">PRODOTTI</th>
                    <th className="text-left">IMMAGINE</th>
                    <th>PREZZO</th>
                    <th>ELIMINA</th>
                </tr>
            </thead>

            <tbody>
                {
                    props.items.map(item => 
                        (
                        <tr 
                            key={item.id}
                            className={clsx(
                                "cursor-pointer",
                                { "bg-indigo-600 pointer-events-none": item.id === props.activeItem?.id}
                            )}
                            onClick={() => props.onEditItem(item)}
                        >
                            <td>{item.name}</td>
                            <td>
                                {item.tmb &&
                                <img src={item.tmb} alt={item.name} className="h-16 rounded-xl"/>}
                            </td>
                            <td className="text-center">€ {item.cost}</td>
                            <td className="text-center">
                                <i 
                                    className="fa fa-trash"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        props.onDeleteItem(item.id);
                                    }}
                                >
                                </i>
                            </td>
                        </tr>
                        ))
                }
            </tbody>

        </table>

    </div>
  )
}
