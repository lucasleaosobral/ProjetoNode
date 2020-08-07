import { MysqlProductReposity } from "../../repositories/implementations/MysqlProductRepository";
import { CreateProductUseCase } from "./CreateProductUseCase";
import { CreateProductController } from "../../controllers/CreateProductController";

const mysqlProductReposity = new MysqlProductReposity();

const createProductUseCase = new CreateProductUseCase( mysqlProductReposity );

const createProductController = new CreateProductController ( createProductUseCase );

export {createProductController , createProductUseCase }