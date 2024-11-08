import React, { createContext, useEffect, useState } from 'react'
import { AiFillStar } from "react-icons/ai";
export const Context = createContext()

const Store = ({ children }) => {

  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1405&auto=format&fit=crop",
      title: "Casual Cotton Sweater",
      star: 4.5,
      reviews: "(89 reviews)",
      prevPrice: "$140,00",
      newPrice: "200",
      company: "H&M",
      color: "white",
      category: "sweaters",
      quantity: 0
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1372&auto=format&fit=crop",
      title: "Wool Blend Cardigan",
      star: 4.8,
      reviews: "(245 reviews)",
      prevPrice: "$140,00",
      newPrice: "200",
      company: "Zara",
      color: "red",
      category: "sweaters",
      quantity: 0
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1374&auto=format&fit=crop",
      title: "Knit Turtleneck Sweater",
      star: 4.2,
      reviews: "(167 reviews)",
      prevPrice: "$140,00",
      newPrice: "200",
      company: "Uniqlo",
      color: "green",
      category: "sweaters",
      quantity: 0
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1472&auto=format&fit=crop",
      title: "Oversized Pullover",
      star: 4.7,
      reviews: "(312 reviews)",
      prevPrice: "$140,00",
      newPrice: "200",
      company: "Gap",
      color: "black",
      category: "sweaters",
      quantity: 0
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1440&auto=format&fit=crop",
      title: "Elegant Evening Dress",
      star: 4.9,
      reviews: "(428 reviews)",
      prevPrice: "$140,00",
      newPrice: "200",
      company: "Mango",
      color: "green",
      category: "dresses",
      quantity: 0
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1386&auto=format&fit=crop",
      title: "Winter Coat",
      star: 4.3,
      reviews: "(156 reviews)",
      prevPrice: "$140,00",
      newPrice: "50",
      company: "Topshop",
      color: "black",
      category: "coats",
      quantity: 0
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=1470&auto=format&fit=crop",
      title: "Denim Jacket",
      star: 4.6,
      reviews: "(278 reviews)",
      prevPrice: "$140,00",
      newPrice: "50",
      company: "Levi's",
      color: "white",
      category: "jackets",
      quantity: 0
    },
    {
      id: 8,
      img: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1435&auto=format&fit=crop",
      title: "Casual T-Shirt",
      star: 4.4,
      reviews: "(198 reviews)",
      prevPrice: "$140,00",
      newPrice: "200",
      company: "Pull&Bear",
      color: "green",
      category: "t-shirts",
      quantity: 0
    },
    {
      id: 9,
      img: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=1374&auto=format&fit=crop",
      title: "Summer Dress",
      star: 4.1,
      reviews: "(145 reviews)",
      prevPrice: "$140,00",
      newPrice: "200",
      company: "Forever21",
      color: "blue",
      category: "dresses",
      quantity: 0
    },
    {
      id: 10,
      img: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?q=80&w=1374&auto=format&fit=crop",
      title: "Casual Blazer",
      star: 4.7,
      reviews: "(267 reviews)",
      prevPrice: "$140,00",
      newPrice: "150",
      company: "Bershka",
      color: "green",
      category: "blazers",
      quantity: 0
    },
    {
      id: 11,
      img: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1470&auto=format&fit=crop",
      title: "Leather Jacket",
      star: 4.8,
      reviews: "(389 reviews)",
      prevPrice: "$140,00",
      newPrice: "150",
      company: "Stradivarius",
      color: "red",
      category: "jackets",
      quantity: 0
    },
    {
      id: 12,
      img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1470&auto=format&fit=crop",
      title: "Cotton T-Shirt",
      star: 4.2,
      reviews: "(178 reviews)",
      prevPrice: "$140,00",
      newPrice: "150",
      company: "Massimo Dutti",
      color: "black",
      category: "t-shirts",
      quantity: 0
    },
    {
      id: 13,
      img: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1411&auto=format&fit=crop",
      title: "Classic White Shirt",
      star: 4.6,
      reviews: "(234 reviews)",
      prevPrice: "$140,00",
      newPrice: "150",
      company: "COS",
      color: "white",
      category: "shirts",
      quantity: 0
    },
    {
      id: 14,
      img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1470&auto=format&fit=crop",
      title: "Leather Jacket",
      star: 4.9,
      reviews: "(412 reviews)",
      prevPrice: "$140,00",
      newPrice: "150",
      company: "AllSaints",
      color: "black",
      category: "jackets",
      quantity: 0
    },
    {
      id: 15,
      img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1376&auto=format&fit=crop",
      title: "Summer Hat",
      star: 4.3,
      reviews: "(167 reviews)",
      prevPrice: "$140,00",
      newPrice: "100",
      company: "&Other Stories",
      color: "green",
      category: "accessories",
      quantity: 0
    },
    {
      id: 16,
      img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1405&auto=format&fit=crop",
      title: "Casual Sweater",
      star: 4.5,
      reviews: "(289 reviews)",
      prevPrice: "$140,00",
      newPrice: "100",
      company: "Urban Outfitters",
      color: "red",
      category: "sweaters",
      quantity: 0
    },
    {
      id: 17,
      img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=1470&auto=format&fit=crop",
      title: "Denim Jacket",
      star: 4.7,
      reviews: "(345 reviews)",
      prevPrice: "$140,00",
      newPrice: "100",
      company: "River Island",
      color: "white",
      category: "jackets",
      quantity: 0
    },
    {
      id: 18,
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1440&auto=format&fit=crop",
      title: "Evening Dress",
      star: 4.8,
      reviews: "(378 reviews)",
      prevPrice: "$140,00",
      newPrice: "100",
      company: "Ted Baker",
      color: "blue",
      category: "dresses",
      quantity: 0
    },
    {
      id: 19,
      img: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=1374&auto=format&fit=crop",
      title: "Summer Dress",
      star: 4.4,
      reviews: "(198 reviews)",
      prevPrice: "$140,00",
      newPrice: "50",
      company: "French Connection",
      color: "black",
      category: "dresses",
      quantity: 0
    },
    {
      id: 20,
      img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1386&auto=format&fit=crop",
      title: "Winter Coat",
      star: 4.6,
      reviews: "(267 reviews)",
      prevPrice: "$140,00",
      newPrice: "50",
      company: "Karen Millen",
      color: "black",
      category: "coats",
      quantity: 0
    },
    {
      id: 21,
      img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1374&auto=format&fit=crop",
      title: "Knit Sweater",
      star: 4.3,
      reviews: "(156 reviews)",
      prevPrice: "$140,00",
      newPrice: "100",
      company: "Reiss",
      color: "black",
      category: "sweaters",
      quantity: 0
    },
    {
      id: 22,
      img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1472&auto=format&fit=crop",
      title: "Oversized Sweater",
      star: 4.7,
      reviews: "(289 reviews)",
      prevPrice: "$140,00",
      newPrice: "150",
      company: "Whistles",
      color: "red",
      category: "sweaters",
      quantity: 0
    },
    {
      id: 23,
      img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1372&auto=format&fit=crop",
      title: "Cardigan",
      star: 4.5,
      reviews: "(234 reviews)",
      prevPrice: "$140,00",
      newPrice: "200",
      company: "Phase Eight",
      color: "red",
      category: "sweaters",
      quantity: 0
    },
    {
      id: 24,
      img: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1435&auto=format&fit=crop",
      title: "Casual T-Shirt",
      star: 4.2,
      reviews: "(167 reviews)",
      prevPrice: "$140,00",
      newPrice: "200",
      company: "Hobbs",
      color: "black",
      category: "t-shirts",
      quantity: 0
    },
    {
      id: 25,
      img: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=1374&auto=format&fit=crop",
      title: "Summer Dress",
      star: 4.8,
      reviews: "(345 reviews)",
      prevPrice: "$140,00",
      newPrice: "50",
      company: "Coast",
      color: "black",
      category: "dresses",
      quantity: 0
    },
    {
      id: 26,
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1440&auto=format&fit=crop",
      title: "Evening Gown",
      star: 4.9,
      reviews: "(412 reviews)",
      prevPrice: "$140,00",
      newPrice: "150",
      company: "Warehouse",
      color: "white",
      category: "dresses",
      quantity: 0
    },
    {
      id: 27,
      img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=1470&auto=format&fit=crop",
      title: "Denim Jacket",
      star: 4.4,
      reviews: "(198 reviews)",
      prevPrice: "$140,00",
      newPrice: "50",
      company: "Oasis",
      color: "black",
      category: "jackets",
      quantity: 0
    },
    {
      id: 28,
      img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1405&auto=format&fit=crop",
      title: "Casual Sweater",
      star: 4.6,
      reviews: "(267 reviews)",
      prevPrice: "$140,00",
      newPrice: "50",
      company: "Miss Selfridge",
      color: "black",
      category: "sweaters",
      quantity: 0
    },
  ];



  const [product, setproduct] = useState(data)
  const [input, setinput] = useState("")
  const [first, setfirst] = useState(false)
  const [cart, setcart] = useState([])
  const [num, setnum] =  useState(0)
  
  // console.log(input);

  function search() {
    let One = data.filter((e) => {
      return e.title.toLowerCase().includes(input.toLowerCase())
    })
    setproduct(One)
  }

  useEffect(() => {
    search()
  }, [input])

  // This section for Category 
  function t_shirts(item) {
    let t_shirt = data.filter((e) => {
      return e.category.toLowerCase() === item.toLowerCase()
    })
    setproduct(t_shirt)
    // console.log(item);
  }

  // This section for Brands 
  function Company(item) {
    let brand = data.filter((e) => {
      return e.company.toLowerCase() === item.target.value.toLowerCase()
    })
    setproduct(brand)
    console.log(item);
  }

  function cat() {
    setfirst(true)
  }

  function closed() {
    setfirst(false)
  }

  const addtocart = (item) => {
    setcart((prev)=>{
      const existingItem = prev.find((cartItem)=>cartItem.id===item.id);
      if (existingItem) {
        return prev.map((cartItem)=>cartItem.id===item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
      }
      else {
        return [...prev,{...item, quantity: 1}];
      }
    })
  }
  function sub(i) {
    console.log(i);
    setcart((pre)=>{
      return pre.map((e)=>{
        return e.id===i?{...e,quantity:e.quantity-1}:e
      })
    })
  }

  function add(i) {
    console.log(i);
    setcart((pre)=>{
      return pre.map((e)=>{
        return e.id===i?{...e,quantity:e.quantity+1}:e
      })
    })
  }

  function del(i) {
    const Del = cart.filter((id)=>{
      return id.id!==i
    })
    setcart(Del)
  }

  const [open, setopen] = useState(false)
  function Open() {
    setopen(true)
    console.log("hi");
  }

  function Close() {
    setopen(false)
  }

  

  

  return (
    <Context.Provider value={{ product, search, input, setinput, t_shirts, Company, cat, first, closed, addtocart, cart,sub,add,num,del,Open,open,Close }}>
      {children}
    </Context.Provider>
  )
}

export default Store