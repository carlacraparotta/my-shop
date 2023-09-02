import { ListResult } from "pocketbase";
import { Product } from "../../model/product";
import { pb } from "../../pocketbase";

export function get(): Promise<ListResult<Product>> {
    return pb.collection("products").getList<Product>();
}

export function remove(id: string): Promise<boolean> {
    return pb.collection("products").delete(id);
}

export function add(product: Partial<Product>): Promise<Product> {
    return pb.collection("products").create<Product>(product);
}

export function edit(product: Partial<Product>): Promise<Product> {
    return pb.collection("products").update<Product>(product.id!, product);
}