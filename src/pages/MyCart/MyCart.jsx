import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../components/Authentication/AuthProvider";

const MyCart = () => {
    const {user} =useContext(AuthContext)
    const carts = useLoaderData()
    console.log(carts);
    const filter = carts?.filter(cart => cart.email == user.email)
    console.log(filter);
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
                    filter.map(item =>                 <tbody key={item._id}>
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
                                <button className="btn btn-primary btn-xs">X</button>
                            </th>
                        </tr>
                    </tbody>)
                }

 
            </table>
        </div>
    );
};

export default MyCart;