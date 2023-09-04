import clsx from "clsx";
import { Product } from "../../../../model/product"
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export interface CMSProductFormProps {
    activeItem: Partial<Product> | null;
    onClose: () => void;
    onAdd: (product: Partial<Product>) => void;
    onEdit: (product: Partial<Product>) => void;
}

const initialState: Partial<Product>= {
    name:"", cost: 0, description:""
}

export function CMSProductForm(props: CMSProductFormProps) {

    const [formData, setFormData] = useState<Partial<Product>>(initialState);
    const [dirty, setDirty] = useState(false);

    useEffect(() => {
        if(props.activeItem?.id)
            setFormData({...props.activeItem});
        else
            setFormData(initialState);
    }, [props.activeItem]);
    

    function changeHandler(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        setFormData(s => ({ ...s, [name]: value }));
        setDirty(true);
    }

    function saveHandler(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        if(props.activeItem?.id)
            props.onEdit(formData);
        else
            props.onAdd(formData);
    }

    const isNameValid = formData.name?.length;
    const isCostValid = formData.cost! > 0;
    const isDescValid = formData.description?.length;
    const isValid = isNameValid && isCostValid && isDescValid;


    return (
        <div className={clsx(
            "fixed bg-slate-200 text-black z-10 top-0 w-96 h-full transition-all overflow-auto",
            { "-right-96": !props.activeItem, "right-0": props.activeItem }
        )}>
            
            
            <form onSubmit={saveHandler}>
                <div className="flex justify-around h-16">

                    <button 
                        className="text-white w-1/2 bg-green-500 hover:bg-green-600 disabled:opacity-30"
                        disabled={!isValid}
                        type="submit"
                    >
                        Salva
                    </button>
                    
                    <button 
                        className="text-white w-1/2 bg-slate-500 hover:bg-slate-600"
                        onClick={props.onClose}
                        type="button"
                    >
                        Chiudi
                    </button>
                
                </div>

                {
                    formData.img &&
                    <img src={formData.img} alt={formData.name} className="w-full" />
                }

                <div className="flex flex-col gap-3 mx-3 mt-16">
                    Nome prodotto:
                    <input
                        className={clsx({ "error": !isNameValid && dirty})}
                        type="text"
                        name="name"
                        value={formData?.name}
                        onChange={changeHandler}
                    />

                    Prezzo prodotto:
                    <input
                        className={clsx({ "error": !isCostValid && dirty})}
                        type="number"
                        name="cost"
                        value={formData?.cost}
                        onChange={changeHandler}
                    />

                    Descrizione prodotto:
                    <textarea 
                        className={clsx("mb-3", { "error": !isDescValid && dirty})}
                        name="description" 
                        value={formData.description}
                        onChange={changeHandler}
                    />
                </div>



            </form>
            
        </div>
    )
}
