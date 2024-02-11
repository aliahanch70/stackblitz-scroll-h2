import data from "@/lib/data"
import Image from "next/image"
import Link from "next/link"


export default function ProductDetails({
    params,
}:{params:{slug:string}
}) {
    const product = data.products.find(x=>x.slug===params.slug)
    if(!product){
        return <div>Product not found</div>
    }
  return (
    
    <>
        <div className="my-2">
            <Link href="/">
                Back to product
            </Link>
        </div>
        <div className="grid md:grid-cols-4 md:gap-3">
            <div className="md:col-span-2">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={640}
                    height={640}
                    style={{
                        width:'100%',
                        height:'auto',

                    }}
                >

                </Image>
            </div>
            <div className="p-3 m-3 bg-base-100 rounded-2xl shadow border-amber-50 grid w-full min-w-[500px]">
                <h1 className="mb-3 text-2xl">
                    {product.brand}{" "}{product.name}
                </h1>
                <h2 style={{fontSize:'0.9rem'}}>
                    Camera: {product.MAINCAMERA}
                </h2>
                <h2 style={{fontSize:'0.9rem'}}>
                    Chipset: {product.Chipset}
                </h2>
                <h2 style={{fontSize:'0.9rem'}}>
                    Display: {product.display}
                </h2>
                <h2 style={{fontSize:'0.9rem'}}>
                    Battery: {product.BATTERY}
                </h2>
                <p className="bg-base-200">
                    price: ${product.price}
                </p>
            </div>
        </div>
    </>
  )
}
