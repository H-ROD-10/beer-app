import { IProducts } from "@/interface/IProduct"

export const getProducts = async () => {
    const response = await fetch('http://localhost:3000/api/products')

    const data: IProducts = await response.json()

    return data
}