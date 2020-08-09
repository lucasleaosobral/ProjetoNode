import { CreateProductUseCase } from "./CreateProductUseCase";
import { Request, Response } from "express";

export class CreateProductController {

    createProductUseCase: CreateProductUseCase;

    constructor(createProductUseCase: CreateProductUseCase) {
        this.createProductUseCase = createProductUseCase;
    }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const product = await this.createProductUseCase.execute(request.body);
            return response
                .status(201)
                .send(product);
        } catch (error) {
            return response.status(400).json({
                message: error.message || "Internal Server Error"
            });
        }
    }
}