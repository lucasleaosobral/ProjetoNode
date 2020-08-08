import { ProductReposity } from "../ProductRepository";
import { Product } from "../../entities/Product";

export class MysqlProductReposityImpl implements ProductReposity {
    
    private products: Product[] = [];

    async findByName(name: string): Promise<Product> {
        const product = this.products.filter(p => p.name === name)[0];
        return product;
    }
    async save(product: Product): Promise<Product> {
        this.products.push(product);
        return product;
    }
}