import { useLoaderData, useParams } from "react-router-dom";
import Products from "../Products/Products";
import { useEffect, useState } from "react";
import Carusel from "./Carusel";

const AllProducts = () => {
    const [brandImg,setBrandImg] =useState([])

    const products = useLoaderData()
    // console.log(products);
    const { brand } = useParams()
    console.log(brand);
    const filter = products.filter(product => product.selectedBrand == brand)
    console.log(filter);

    useEffect(() => {
        fetch('http://localhost:5000/brands')
        .then(res => res.json())
        .then(data => setBrandImg(data))

        
    },[])
    const filterImg = brandImg.filter(img => img.brand == brand)
    console.log(filterImg);


    return (
        <div>

            <div>
                {
                    filterImg?.map(img => <Carusel key={img._id} img={img}></Carusel>)
                }
            </div>




            <div className="my-11 grid grid-cols-1 md:grid-cols-2 ml-4 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">

                {
                    filter.length > 0 ? filter?.map(product => <Products key={product._id} product={product} ></Products>) : <h2 className="text-white text-5xl text-center mt-10 w-full h-[70vh] flex items-center justify-center">Coming soon.......</h2>
                }

            </div>
        </div>
    );
};

export default AllProducts;