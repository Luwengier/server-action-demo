'use client'

import { addProductToDatabase } from '@/actions/serverActions'
import { useTransition } from 'react'

const AddProductButton = () => {
  const [isPending, startTransition] = useTransition()

  const formData = new FormData()
  formData.append('product', 'Macbook Pro 16')
  formData.append('price', '2000')

  return (
    <button
      disabled={isPending}
      onClick={() => startTransition(() => addProductToDatabase(formData))}
      className="fixed bottom-10 right-10 border bg-amber-500 text-white p-2 rounded-md w-48"
    >
      {isPending ? 'Adding...' : 'Add Macbook Pro 16'}
    </button>
  )
}

export default AddProductButton
