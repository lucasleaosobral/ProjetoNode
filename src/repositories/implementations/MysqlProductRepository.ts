import { ProductReposity } from "../ProductRepository";
import { Product } from "../../entities/Product";
import { getRepository } from 'typeorm';

export class MysqlProductReposityImpl implements ProductReposity {

    async findByName(ProductName: string): Promise<Product> {

        const product = await getRepository(Product).findOne( { name: ProductName });
        
        return product;
    }
    async save(product: Product): Promise<Product> {
        
        const savedProduct = await getRepository(Product).save(product);

        return savedProduct;
    }
}