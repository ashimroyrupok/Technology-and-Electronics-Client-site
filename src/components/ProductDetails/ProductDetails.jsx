
const ProductDetails = ({ item }) => {
    // console.log(item);
    const { name, img, selectedBrand, selectedType, price, rating, description } = item

    return (
        <div className="flex justify-center items-center">
            <div className="relative flex w-full h-[70vh] my-10  max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative w-[40%] m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
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

                    <p className="block mb-8 font-sans text-xs lg:text-base antialiased font-normal leading-relaxed text-gray-400">

                        {description}

                    </p>
                    <a className="inline-block" >
                        <button
                            className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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