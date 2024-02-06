
import Image from "next/image";
import data from '@/lib/data'
import ProductItem from "@/components/products/ProductItem";


export default function Home() {


  return (
    <>
      <h2 className="text-2xl py-2">Latest Product</h2>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
        {data.products.map((product)=>(
          <ProductItem key={product.slug} product={product}/>
        ))}
      </div>
    </>
  );
}
