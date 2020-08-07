import { CreateProductUseCase } from "../useCases/CreateProduct/CreateProductUseCase";
import { Request, Response } from "express";

export class CreateProductController {
    constructor(
        private createProductUseCase: CreateProductUseCase,
    ) {}
    
    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;

        try {
            await this.createProductUseCase.execute({ name });

            return response.status(201).send();
        }catch(error) {
            return response.status(400).json({
                message: error.message || "Internal Server Error"
            });
        }
    }
}