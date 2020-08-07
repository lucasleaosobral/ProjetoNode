import { IProductsReposity } from "../IProductsRepository";
import { Product } from "../../entities/Product";

export class MysqlProductReposity implements IProductsReposity {
    private products: Product[] = [];
    
    async findByName(name: string): Promise<Product> {
        const product = this.products.find(product => product.name === name);

        return product;
    }
    async saveProduct(product: Product): Promise<void> {
        this.products.push(product);
        console.log(this.products);
    }
}