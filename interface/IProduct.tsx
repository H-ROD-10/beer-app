export interface IProduct {
    name: string;
    description: string;
    price: number;
    img: string;
    filterId: number
}

export interface IProducts{
    products: IProduct[]
}