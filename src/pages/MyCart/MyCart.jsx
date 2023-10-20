import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../components/Authentication/AuthProvider";
import Swal from "sweetalert2";

const MyCart = () => {
    const { user } = useContext(AuthContext)
    const carts = useLoaderData()
    const [allCart, SetAllCart] = useState(carts)

    // console.log(carts);

    useEffect(() => {

        const filter = carts?.filter(cart => cart.email == user.email)
        SetAllCart(filter);



    }, [])
    const handleDelete = (id) => {



        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://technology-and-electronics-server-f402miekl-ashim-roys-projects.vercel.app/carts/${id}`, {
                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const currentData = allCart.filter(cart => cart._id !== id)
                            SetAllCart(currentData)
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                        }
                    })


            }
        })



    }


    return (
        <div className="overflow-x-auto bg-[#1B2141] h-[60vh] my-10 max-w-6xl mx-auto text-white">
            <table className="table text-white">
                {/* head */}
                <thead>
                    <tr>
                        <th className="text-white" >Name</th>
                        <th className="text-white">Brand</th>
                        <th className="text-white">Price</th>
                        <th className="text-white"> Delete </th>
                    </tr>
                </thead>
                {
                    allCart?.map(item => <tbody key={item._id}>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item?.img} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold"> {item?.name} </div>
                                        <div className="text-sm opacity-50"> {item?.selectedType} </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item?.selectedBrand}

                            </td>
                            <td> $ {item?.price} </td>
                            <th>
                                <Link onClick={() => handleDelete(item._id)}><button className="btn btn-primary btn-xs">X</button></Link>
                            </th>
                        </tr>
                    </tbody>)
                }


            </table>
        </div>
    );
};

export default MyCart;