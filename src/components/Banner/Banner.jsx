import "./Banner.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Banner = () => {

    useEffect(()=>{

        AOS.init({duration:"1500"});

    },[])

    return (
        <div id="container" className="w-full h-[70vh] ">
            <div id="outer" className=" text-white  w-full mx-auto h-[70vh]"> <h3 className="absolute top-[30%] left-[10%] text-3xl lg:text-5xl font-bold"> <span> Wellcome  </span> <br /> <span className="mt-2" data-aos="fade-left" > to Mobile Shop</span> </h3>

                <div className="absolute top-[43%] left-[10%]  ">
                    <p className=" text-2xl lg:text-3xl my-2">A new experience for <span className="text-cyan-500 font-bold">Buyer</span> </p>

                    <p className="text-slate-400 text-sm">Trade-in values will vary based on the condition, year, and <br /> configuration  of your eligible trade-in device. Not all devices are eligible for credit. You must be at <br /> least 18   years old to be eligible to trade in for credit or for an Apple Gift Card. </p>

                    <button  data-aos="zoom-out-up" className="btn mt-2 border-cyan-500 bg-[#1b2141] text-white hover:bg-cyan-500 ">Buy Now</button>

                </div>

            </div>
           

        </div>
    );
};

export default Banner;