import { ProductReposity } from "../../../repositories/ProductRepository";
import { ProductDTO } from "../../../dtos/ProductDTO";
import { Product } from '../../../entities/Product';
import { CreateProductUseCase } from '../CreateProductUseCase';

export class CreateProductUseCaseImpl implements CreateProductUseCase {
    constructor(
        private productsRepository: ProductReposity
    ) { }

    async execute(data: ProductDTO): Promise<ProductDTO> {
        
        let productDto = new ProductDTO();
        
        const product = new Product();
        product.name = data.name;
        
        productDto = await this.productsRepository.save(product);
        
        return productDto;
    }
}