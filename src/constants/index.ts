//array of dropdown content
export const SORT_OPTIONS=[
    {name:"None",value:'none'},
    {name:"Price: Low to High",value:"price-asc"},
    {name:"Price: High to Low",value:"price-desc"}
  ] as const //we have used "as const" to make it readonly

  export  const SUBCATEGORIES = [
    { name: 'T-Shirts', selected: true, href: '#' },
    { name: 'Hoodies', selected: false, href: '#' },
    { name: 'Sweatshirts', selected: false, href: '#' },
    { name: 'Accessories', selected: false, href: '#' },
  ] 