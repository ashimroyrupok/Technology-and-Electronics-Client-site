import { useLoaderData, useParams } from "react-router-dom";
import ProductDetails from "../../ProductDetails/ProductDetails";

const Product = () => {
    const product = useLoaderData()
    // console.log(products);
    const { id } = useParams()
    console.log(id);
    const find = product.filter(item => item._id == id )
    // console.log(find);

    return (
        <div>

            {
                find?.map(item => <ProductDetails key={item._id} item={item}></ProductDetails>)
            }
            
        </div>
    );
};

export default Product;