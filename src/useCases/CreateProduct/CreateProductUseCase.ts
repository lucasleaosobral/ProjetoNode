import { ProductDTO } from "../../dtos/ProductDTO";
import { Product } from "../../entities/Product";

export interface CreateProductUseCase {
    execute(data: ProductDTO): Promise<ProductDTO>;
}