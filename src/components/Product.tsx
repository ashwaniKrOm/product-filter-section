import Image from "next/image";
import { ProductType } from "@/types";

const Product = ({product}:{product:ProductType})=>{
    return(
        <div className=' relative m-1 w-72 h-72 bg-gray-200 p-2'>
           
        <div className=' overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75 h-4/5'>
          <Image
            src={product.image}
            alt={product.name}
           fill
            className=' object-cover '
          />
        </div>
        <div className=' flex justify-between'>
          <div>
            <h3 className='text-sm text-gray-700'>{product.name}</h3>
            <p className='mt-1 text-sm text-gray-500'>
              Size:{product.size} , {product.color}
            </p>
          </div>
  
          <p className='text-sm font-medium text-gray-900'>${product.price}</p>
        </div>
      </div>
    )
}

export default Product;