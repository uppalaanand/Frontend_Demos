import { useEffect, useState } from "react"

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    async function getProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if(!res.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await res.json();
        setProducts(data);

      }catch(err) {
        setError(err);
      }finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  if(loading === true) return <p className="text-center text-2xl text-red-500">Loading....</p>
  if(error === true) return <p className="text-center text2xl text-red-400">{err}</p>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 m-5">
      {
        products.map((p, idx) => <div key={idx} className="shadow flex flex-col align-middle justify-center text-center rounded-2xl p-10">
          <img src={p.image} alt="" className="h-55 object-contain" />
          <p>{p.title}</p>
        </div>)
      }
    </div>
  )
}

export default Products
