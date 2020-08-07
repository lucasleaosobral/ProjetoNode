export class Product {
    public readonly id: string;
    public name: string;

    constructor(props: Omit<Product, 'id'>, id?: string) {
        Object.assign(this, props);
    }
}