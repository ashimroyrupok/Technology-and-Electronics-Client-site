import { Link } from "react-router-dom";

const Brand = ({ item }) => {
    const { brand, bannerImg } = item
    // console.log(item);
    return (
        <div className="card   shadow-xl hover:border-cyan-400 border-2 text-white hover:-translate-y-3 duration-300  ">
            <Link to={`/allProducts/${brand}`}>
                <figure><img className="w-[160px] h-[200px]" src={bannerImg} alt="Shoes" /></figure>
                <div className="card-body">

                    <h2> {brand} </h2>


                </div>
            </Link>
        </div>
    );
};

export default Brand;