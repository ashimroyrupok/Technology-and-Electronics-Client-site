import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useContext, useState } from "react";
import swal from 'sweetalert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../components/Authentication/AuthProvider";

const SignIn = () => {

    const [seePassword, setSeePassword] = useState(false)

    const navigate = useNavigate()

    const { logIn } = useContext(AuthContext)

    const handleForm = (e) => {

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value
        // console.log(email, password);


        logIn(email, password)
            .then((res) => {
                console.log(res);
                swal("Good job!", "Sign up Successful!", "success")
                navigate('/')

            })
            .catch(err => {
                console.log(err.message)
                toast(err.message)
            })




    }





    return (

        <div className="">

            <div className="hero min-h-screen bg-[#050e2d]  ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-white  font-bold mb-4">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleForm} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <span onClick={() => setSeePassword(!seePassword)} className="absolute bottom-[50%] right-10"> {
                                    seePassword === true ? <AiFillEye className="text-2xl"></AiFillEye> : <AiFillEyeInvisible className="text-2xl "></AiFillEyeInvisible>
                                } </span>
                                <input type={seePassword === true ? "password" : "text"} name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-cyan-400 ">Login</button>
                            </div>
                        </form>

                        <div className="flex flex-row justify-center items-center mb-3">
                            <p>To crate  new account?                     <Link to="/signup"
                                className="font-medium text-pink-500 transition-colors hover:text-blue-700"
                                href="#"
                            >
                                Register
                            </Link> </p>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer></ToastContainer>

        </div>
    );
};

export default SignIn;