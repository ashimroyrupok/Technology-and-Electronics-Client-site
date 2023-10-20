import swal from 'sweetalert';


const AddProduct = () => {

    const handleForm = e => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value
        const img = form.img.value

        const select = document.getElementById("brandSelect");
        const selectedOption = select.options[select.selectedIndex];
        const selectedBrand = selectedOption.value;

        const type = document.getElementById("typeSelect");
        const selectedOptionType = type.options[type.selectedIndex];
        const selectedType = selectedOptionType.value;

        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const products = { name, img, selectedBrand, selectedType, price, rating, description }



        fetch('http://localhost:5000/products', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {

                    swal("Good job!", "Product added Successful!", "success")
                    
                    form.reset()

                }
            })






    }

    return (
        <div className="max-w-[1240px] mx-auto mt-10 bg-[#1B2141]  my-7 ">
            <h3 className="text-5xl text-center items-center font-bold text-white">Add Your Product</h3>
            <div className="border-rose-100  border mt-6 p-4">
                <form onSubmit={handleForm} >
                    <div className="flex justify-around items-center ">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-white font-semibold">Product Name</span>
                            </label>
                            <input type="text" placeholder="Type here  product name" className="input  input-bordered w-[90%] " name="name" />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-white font-semibold">Product Image</span>
                            </label>
                            <input required type="text" placeholder="Type here image url" className="input input-bordered w-[90%]" name="img" />
                        </div>
                    </div>
                    <div className="flex  my-4 items-center justify-center">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-white font-semibold">Select Brand</span>
                            </label>
                            <select required id="brandSelect" className="select border-gray-400 w-[90%] ">
                                <option disabled selected>Pick up the Brand</option>
                                <option >Samsung</option>
                                <option>Apple</option>
                                <option>Google</option>
                                <option>Realme</option>
                                <option>OnePlus</option>
                                <option>Xiaomi</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-white font-semibold">Select Product Type</span>
                            </label>
                            <select required id="typeSelect" className="select border-gray-400 w-[90%] ">
                                <option disabled selected>Pick up the product type</option>
                                <option>Laptop</option>
                                <option>Phone</option>
                                <option>Watch</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-around items-center ">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold text-white">Price</span>
                            </label>
                            <input required type="text" placeholder="Type here Price" className="input  w-[90%] input-bordered " name="price" />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-white font-semibold">Rating</span>
                            </label>
                            <input required type="number" placeholder="Type here Short Description" className="input input-bordered w-[90%]" name="rating" />
                        </div>
                    </div>
                    <div className="flex justify-around items-center ">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-white font-semibold">Description</span>
                            </label>
                            <div className="w-[40%]">
                                <textarea required className=" w-full border-2 border-gray-400" name="description" id="" cols="20" rows="4" ></textarea>
                            </div>
                        </div>

                    </div>
                    <div className="flex justify-center items-center w-full">
                        <input className="btn mt-2 border-cyan-500 bg-[#1b2141] text-white hover:bg-cyan-500 w-full mt-6" type="submit" value="Submit Now" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddProduct;