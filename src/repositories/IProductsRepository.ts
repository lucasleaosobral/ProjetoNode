import { Product } from "../entities/Product";

export interface IProductsReposity {
    findByName(name: string): Promise<Product>;
    saveProduct(product : Product): Promise<void>;
}