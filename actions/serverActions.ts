'use server'

import { Product } from '@/typings'
import { revalidateTag } from 'next/cache'

export const addProductToDatabase = async (e: FormData) => {
  'use server'

  const product = e.get('product')?.toString()
  const price = e.get('price')?.toString()

  if (!product || !price) return

  const newProduct: Product = {
    product,
    price,
  }

  await fetch('https://64ad213bb470006a5ec56616.mockapi.io/products', {
    method: 'POST',
    body: JSON.stringify(newProduct),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  revalidateTag('products')
}
