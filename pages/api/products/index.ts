// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IProduct } from '@/interface/IProduct'
import type { NextApiRequest, NextApiResponse } from 'next'
import products from '../../../data/products.json'

type Data = {
  products: IProduct[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).send(products)
}
