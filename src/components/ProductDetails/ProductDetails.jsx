import { useContext, useState } from "react";
import swal from "sweetalert";
import { AuthContext } from "../Authentication/AuthProvider";

const ProductDetails = ({ item }) => {

    const { user } = useContext(AuthContext)
    // console.log(user.email);
    const email = user.email


    const { name, img, selectedBrand, selectedType, price, rating, description } = item


    const cartData = { email, name, img, selectedBrand, selectedType, price, rating, description }



    const handleCart = () => {

        // console.log(cartData);

        fetch('https://technology-and-electronics-server-blond.vercel.app/carts', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(cartData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data) {

                    swal("Good job!", "add to cart Successful!", "success")



                }
            })


    }



    return (
        <div className="flex justify-center items-center">
            <div className="relative flex w-full mx-auto max-w-7xl h-[100vh] lg:h-[70vh] my-10   flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className=" w-[60%] m-0  text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                    <img
                        src={img}
                        alt="image"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-6">
                    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                        {name}
                    </h6>
                    <div className="flex justify-between items-center">
                        <p className="font-bold ">Price: $ {price} </p>
                        <p className="font-semibold">Brand: {selectedBrand} </p>
                    </div>

                    <p className="block mb-8 mt-4 font-sans text-xs lg:text-base antialiased font-normal leading-relaxed text-gray-400">

                        {description}

                    </p>
                    <a className="inline-block" onClick={handleCart} >
                        <button
                            className="flex items-center gap-2 bg-[#1B2141] border-cyan-400 px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none hover:bg-cyan-400  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Add to Cart

                        </button>
                    </a>
                </div>
            </div>
        </div>

    );
};

export default ProductDetails;