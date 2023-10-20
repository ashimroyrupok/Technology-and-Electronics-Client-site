import { Link } from "react-router-dom";

import { Rating } from "@mui/material";


const Products = ({ product }) => {
    // console.log(product);
    const { _id, name, img, selectedBrand, selectedType, price, rating, description } = product
    return (



        <div className="relative flex max-w-[24rem] flex-col rounded-xl text-white bg-[#1B2141] bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                <img className="w-full h-[200px]"
                    src={img}
                    alt="ui/ux review check"
                />
            </div>
            <div className="p-6">
                <h4 className="block font-sans font-bold text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-cyan-400">
                    {selectedBrand}
                </h4>
                <h2 className="text-slate-400 font-semibold"> {name} </h2>

                <div className="flex justify-between ">
                    <p className="text-slate-400 font-semibold"> {selectedType} </p>

                     <Rating name="size-large" defaultValue={rating} size="large" /> 
                    
                </div>
                <h2 className="text-slate-400 font-semibold"> Price: <span className="text-white font-bold">{price} $ </span> </h2>

            </div>
            <div className="flex items-center justify-between p-6">
                <div className="flex items-center -space-x-3">

                    <div
                        data-tooltip="author-2"
                        className="absolute z-50 whitespace-normal btn text-white bg-[#050E2D] hover:bg-cyan-400 border-cyan-400 break-words font-semibold rounded-lg  py-1.5 px-3 font-sans  focus:outline-none"
                    >
                        <Link to={`/product/${_id}`}> Details</Link>
                    </div>
                </div>
                <button className="block font-sans btn text-white bg-[#050E2D] hover:bg-cyan-400 border-cyan-400 antialiased font-semibold ">
                    <Link to={`/products/${_id}`}>Update button</Link>
                </button>
            </div>
        </div>
    );
};

export default Products;