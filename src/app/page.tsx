"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ChevronDown, Filter } from "lucide-react";
import { useState } from "react";
import ProductSection from "@/components/ProductSection";
import { SORT_OPTIONS } from "@/constants";



export default function Home() {

  //to handle sort value
  const [filter,setFilter]=useState({
    sort:"none"
  })

  return (
    <main className="mx-auto max-w-7xl px-4 smLpx-6 lg:px-8">
      {JSON.stringify(filter)}
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">High-Quality Clothes Selection</h1>

        <div>
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


        <ProductSection/>
    </main>
  );
}

