import { MysqlProductReposityImpl } from "../../repositories/implementations/MysqlProductRepository";
import { CreateProductUseCaseImpl } from "./impl/CreateProductUseCaseImpl";
import { CreateProductController } from "./CreateProductController";

const mysqlProductReposity = new MysqlProductReposityImpl();

const createProductUseCase = new CreateProductUseCaseImpl(mysqlProductReposity);

const createProductController = new CreateProductController( createProductUseCase );

export { createProductController , createProductUseCase }