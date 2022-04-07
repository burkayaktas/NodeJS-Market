export interface Market {
    id : string,
    name: string;
    description: string;
    image: string;
    price: number;
    quantity: number;   

	timestamps?: { createdAt?: Date; updatedAt?: Date };
}