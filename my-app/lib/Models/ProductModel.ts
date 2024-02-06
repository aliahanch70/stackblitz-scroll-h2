
export type Product = {
    _id:string
    name:string
    slug:string
    image:string
    banner:string
    price:number
    describtion:string
    category:string
    rating:number
    numReviews: number
    colors?:[]
    sizes?:[]
}