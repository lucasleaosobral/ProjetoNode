import { IProductsReposity } from "../../repositories/IProductsRepository";
import { ICreateProductRequestDTO } from "../CreateProduct/CreateProductDTO";
import { Product } from "../../entities/Product";

export class CreateProductUseCase {
    constructor(
       private productsRepository: IProductsReposity
    ) {}
    
    async execute(data: ICreateProductRequestDTO) {
        const productAlreadyExists = await this.productsRepository.findByName(data.name);

        if(!productAlreadyExists) {
            
            const product = new Product(data);

            await this.productsRepository.saveProduct(product);
        
        } else {
            throw new Error('Product already exists.');
        }

    }
}