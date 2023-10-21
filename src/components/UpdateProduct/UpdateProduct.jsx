import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const UpdateProduct = () => {
    const { _id, name, img, selectedBrand, selectedType, price, rating, description } =useLoaderData()

    const handleSubmit = e => {
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



        fetch(`https://technology-and-electronics-server-blond.vercel.app/products/${_id}` , {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {

                    swal("Good job!", "Product updated Successful!", "success")
                    
                    

                }
            })






    }

    return (
        <div>
            <div className="max-w-[1240px] mx-auto mt-10 bg-[#1B2141]  my-7 ">
                <h3 className="text-5xl text-center items-center font-bold text-white">Update Your Product</h3>
                <div className="border-rose-100  border mt-6 p-4">
                    <form onSubmit={handleSubmit} >
                        <div className="flex justify-around items-center ">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-white font-semibold">Product Name</span>
                                </label>
                                <input defaultValue={name} type="text" placeholder="Type here  product name" className="input  input-bordered w-[90%] " name="name" />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-white font-semibold">Product Image</span>
                                </label>
                                <input defaultValue={img} required type="text" placeholder="Type here image url" className="input input-bordered w-[90%]" name="img" />
                            </div>
                        </div>
                        <div className="flex  my-4 items-center justify-center">
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text text-white font-semibold">Select Brand</span>
                                </label>
                                <select defaultValue={selectedBrand} required id="brandSelect" className="select border-gray-400 w-[90%] ">
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
                                <select defaultValue={selectedType} required id="typeSelect" className="select border-gray-400 w-[90%] ">
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
                                <input defaultValue={price} required type="text" placeholder="Type here Price" className="input  w-[90%] input-bordered " name="price" />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-white font-semibold">Rating</span>
                                </label>
                                <input defaultValue={rating} required type="number" placeholder="Type here Short Description" className="input input-bordered w-[90%]" name="rating" />
                            </div>
                        </div>
                        <div className="flex justify-around items-center ">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-white font-semibold">Description</span>
                                </label>
                                <div className="w-[40%]">
                                    <textarea defaultValue={description} required className=" w-full border-2 border-gray-400" name="description" id="" cols="20" rows="4" ></textarea>
                                </div>
                            </div>

                        </div>
                        <div className="flex justify-center items-center w-full">
                            <input className="btn mt-2 border-cyan-500 bg-[#1b2141] text-white hover:bg-cyan-500 w-full mt-6" type="submit" value="Update Now" />
                        </div>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default UpdateProduct;