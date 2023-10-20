import { useEffect, useState } from "react";
import Brand from "../Brand/Brand";

const Brands = () => {

    const [brands, setBrands] = useState([])

    useEffect(() => {


        fetch('http://localhost:5000/brands')
            .then(res => res.json())
            .then(data => setBrands(data))

    }, [])

    // console.log(brands);

    return (

        <div className="max-w-[1240px] mx-auto my-11 dark:bg-slate-300 bg-[#1B2141] p-4 rounded-md">
            <h2 className="text-5xl font-bold text-center dark:text-black text-white">Our Brands</h2>
            <div   className="grid lg:grid-cols-6  gap-4 mt-8 my-2">

                {
                    brands.map((item) => <Brand key={item._id} item={item}></Brand>)
                }

            </div>
        </div>




    );
};

export default Brands;