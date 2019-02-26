export class Product {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;

  constructor(options: {
    id?: number,
    name?: string,
    description?: string,
    quantity?: number,
    price?: number,
  } = {}) {
    this.id = options.id;
    this.name = options.name ? options.name : '';
    this.description = options.description ? options.description : '';
    this.quantity = options.quantity ? options.quantity : 0;
    this.price = options.price ? options.price : 0;
  }
}
