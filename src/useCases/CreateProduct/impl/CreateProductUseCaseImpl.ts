import { ProductReposity } from "../../../repositories/ProductRepository";
import { ProductDTO } from "../../../dtos/ProductDTO";
import { Product } from '../../../entities/Product';
import { CreateProductUseCase } from '../CreateProductUseCase';

export class CreateProductUseCaseImpl implements CreateProductUseCase {
    constructor(
        private productsRepository: ProductReposity
    ) { }

    async execute(data: ProductDTO): Promise<ProductDTO> {

        const product = new Product();

        const productDto = new ProductDTO();
        productDto.id = product.id;
        productDto.name = product.name;

        return productDto;
    }
}