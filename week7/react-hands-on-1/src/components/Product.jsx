function Product(products) {
    const {image, name, brand, description, price} = products.data;
    return (
        <div className="bg-white m-2 w-100 shrink-0 border-2 p-2">
            <img src={image} alt="Image" className="w-100 h-60"/>
            <h1 className="text-2xl text-black">{name}</h1>
            <p>Price : {price}$</p>
            <h3>Brand : {brand}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Product;