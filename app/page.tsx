import { addProductToDatabase } from '@/actions/serverActions'
import { Product } from '@/typings'

export default async function Home() {
  const res = await fetch(
    'https://64ad213bb470006a5ec56616.mockapi.io/products',
    {
      cache: 'no-cache',
      next: {
        tags: ['products'],
      },
    }
  )

  const products: Product[] = await res.json()

  return (
    <main className="">
      <h1 className="text-3xl font-bold text-center">Products Warehouse</h1>

      <form
        action={addProductToDatabase}
        className="flex flex-col gap-5 max-w-xl mx-auto p-5"
      >
        <input
          name="product"
          placeholder="Enter Product name..."
          className="border border-gray-300 p-2 rounded-md"
        />
        <input
          name="price"
          placeholder="Enter Price name..."
          className="border border-gray-300 p-2 rounded-md"
        />

        <button className="bg-rose-500 text-white p-2 rounded-md border">
          Add Product
        </button>
      </form>

      <h2 className="font-bold p-5">List of Products</h2>

      <div className="flex flex-wrap gap-5">
        {products.map((product) => (
          <div key={product.id} className="p-5 shadow">
            <p>{product.product}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
