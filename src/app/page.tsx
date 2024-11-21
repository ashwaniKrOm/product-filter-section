"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ChevronDown, Filter } from "lucide-react";
import { useState } from "react";
import { SORT_OPTIONS } from "@/constants";
import PRODUCTS from "../data/products.json"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const SUBCATEGORIES = [
  { name: 'T-Shirts', selected: true, href: '#' },
  { name: 'Hoodies', selected: false, href: '#' },
  { name: 'Sweatshirts', selected: false, href: '#' },
  { name: 'Accessories', selected: false, href: '#' },
]

const COLOR_FILTERS ={
    id:"color",
    name:"Color",
    options:[
      {value:"white",label:"White"},
      {value:"blue",label:"Blue"},
      {value:"beige",label:"Beige"},
      {value:"purple",label:"Purple"},
      {value:"green",label:"Green"},
    ]
}

export default function Home() {

  //to handle sort value
  const [filter,setFilter]=useState({
    sort:"none"
  })

  return (
    <main className="mx-auto max-w-7xl px-4 smLpx-6 lg:px-8">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">High-Quality Clothes Selection</h1>
        <div>
          
          {/* sorting */}
         <DropdownMenu>
          <DropdownMenuTrigger className="inline-flex">
            sort
            <ChevronDown/>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="flex flex-col">
        {SORT_OPTIONS.map((option)=>(
          <button 
          key={option.name} 
          className={cn("",{"text-gray-900 bg-gray-100":option.value===filter.sort},
            {"text-gray-500":option.value!==filter.sort}
          )}
          onClick={()=>{setFilter((prev)=>(
            {
              ...prev,
              sort:option.value
            }
          ))}} 
          
          >{option.name}
          </button>
        ))}
          </DropdownMenuContent>
         </DropdownMenu>

        <button>
          <Filter/>
        </button>

        </div>
        </div>


       <section>
        <div>
          {/* Filter */}
          <ul>
          {SUBCATEGORIES.map((category)=>(
               <li key={category.name}>
               <button
                 disabled={!category.selected}
                 className='disabled:cursor-not-allowed disabled:opacity-60'>
                 {category.name}
               </button>
             </li>
          ))}
          </ul>

          {/* Color Filter */}
          <Accordion type="multiple">
            <AccordionItem value="color">
            <AccordionTrigger className='py-3 text-sm text-gray-400 hover:text-gray-500'>
                  <span className='font-medium text-gray-900'>Color</span>
                </AccordionTrigger>

                <AccordionContent>
                  <ul className="space-y-4">

                  </ul>
                </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Size Filter */}

          {/* Price Filter */}

          {/* Product grid */}
          <ul>
            {PRODUCTS?.map((product)=>(
              <div key={product.id} className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
              <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                <img className="object-cover" src={product.image} alt={product.name} />
              </a>
              <div className="mt-4 px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl tracking-tight text-slate-900">{product.name}</h5>
                </a>
                <div className="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    <span className="text-2xl font-bold text-slate-900">${product.price}</span>
  
                  </p>
                  <div className="flex items-center">
                   
                  <span className="mr-2 ml-3 rounded bg-gray-200 px-2.5 py-0.5 text-xs font-semibold">{product.color}</span>
                   
                    <span className="mr-2 ml-3 rounded bg-gray-200 px-2.5 py-0.5 text-xs font-semibold">{product.size}</span>
                  </div>
                </div>
              </div>
            </div>
            
            ))}
          </ul>

        </div>
       </section>
    </main>
  );
}

