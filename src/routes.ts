import { Router } from "express";
import { createProductController } from "./useCases/CreateProduct";

const router = Router();

router.get('/', (request, response) => {
     response.send("Hello World");
});

router.post('/product', (request, response) => {
     return createProductController.handle(request, response);
});

router.get('*', (request, response) => {
     response.redirect('/');
 });
 
export { router };
