import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {useForm} from 'react-hook-form';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [category, setCategory] = useState("");
  // const [filteredProducts, setFilteredProducts] = useState([]);

  const {register, handleSubmit} = useForm();

  //returns function to navigate
  const navigate = useNavigate();

  //navigate to product component
  const gotoProduct = (productObj) => {
    //navigate logic
    //while navigatoing transfer product obj too
    navigate("/product", {state:{product : productObj}});
  }

  useEffect(() => {
    setLoading(true);
    async function getProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if(!res.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await res.json();
        // console.log(data);
        // console.log("hi", category.category);

        if(category) {
          const filteredProducts = data.filter(d => d.category == category);
          // console.log(filteredProducts);
          setProducts(filteredProducts);  
        }else{
          setProducts(data);
        }

      }catch(err) {
        setError(err);
      }finally {
        setLoading(false);
      }
    }

    getProducts();
  }, [category]);

  //search function
  function searchProduct(obj) {
    setCategory(obj.category);
    // console.log(obj);
  }

  if(loading === true) return <p className="text-center text-2xl text-red-500">Loading....</p>
  if(error === true) return <p className="text-center text2xl text-red-400">{err}</p>

  return (
    <div className="gap-20">
      <div className="flex justify-center p-5">
        <form onSubmit={handleSubmit(searchProduct)}>
          <input type="text" placeholder="Search by category" {...register("category")} className="border-2 border-gray-500 w-200 h-10 p-2 text-1xl text-black"/>
          <button className="bg-amber-700 w-40 h-10 rounded-4xl" type="submit">Search</button>
        </form>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 m-5">
        {
          products.map((p, idx) => <div key={idx} onClick={() => gotoProduct(p)} className="shadow flex flex-col align-middle justify-center text-center rounded-2xl p-5 cursor-pointer">
            <img src={p.image} alt="Product Image" className="h-55 object-contain" />
            <p>{p.title}</p>
          </div>)
        }
      </div>
    </div>
  )
}

export default Products
