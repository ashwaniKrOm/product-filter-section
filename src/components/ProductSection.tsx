import PRODUCTS from "../data/products.json"
import { ProductType } from "@/types";
import Product from "./Product";
import { ProductSkeleton } from "./ProductSkeleton";
import { SUBCATEGORIES } from "@/constants";
import { Accordion,AccordionItem, AccordionTrigger, AccordionContent} from "@/components/ui/accordion";

const ProductSection = ()=>{
    return(
        <section>
            <div>

                {/* Filters */}
                <div>
                <ul className='space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900'>
              {SUBCATEGORIES.map((category) => (
                <li key={category.name}>
                  <button
                    disabled={!category.selected}
                    className='disabled:cursor-not-allowed disabled:opacity-60'>
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>

            <Accordion types="multiple">
            <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
            </Accordion>
                </div>

                {/* Product grid */}
                <div className=" ">
                <ul className="bg-red-400 flex flex-wrap justify-center">
                    {PRODUCTS.length>0 ? PRODUCTS.map((product)=>(
                        
                        <Product product={product} key={product.id}/>
                       
                    ))
                    :
                    (
                        new Array(12)
                          .fill(null)
                          .map((_, i) =>( 
                          <div className="flex flex-wrap">
                          <ProductSkeleton key={i} />
                          </div>
                          ))
                      )
                    }
                </ul>
                </div>
            </div>
        </section>
    )
}

export default ProductSection;