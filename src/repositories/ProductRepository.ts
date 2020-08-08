import { Product } from "../entities/Product";

export interface ProductReposity {
    findByName(name: string): Promise<Product>;
    save(product : Product): Promise<Product>;
}