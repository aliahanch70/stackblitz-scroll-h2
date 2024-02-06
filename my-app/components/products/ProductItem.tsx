import { Product } from '@/lib/Models/ProductModel'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductItem({product}:{product:Product}) {
  return (
    <div className='card bg-base-300 shadow-xl mb-4'>
      <figure>
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className='object-cover h-64 w-full'
          />
        </Link>
      </figure>
    </div>
  )
}
