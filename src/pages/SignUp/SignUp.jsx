import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye, AiFillGoogleCircle, AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { useContext, useState } from "react";
import swal from 'sweetalert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../components/Authentication/AuthProvider";




const SignUp = () => {

    const [seePassword, setSeePassword] = useState(false)
    const navigate = useNavigate()


    const { signIn, signInWithGoogle, profileInfo } = useContext(AuthContext)



    // google sign in

    const handleGoogle = () => {

        signInWithGoogle()
            .then(() => {
                navigate('/')
                toast("log in successful🤩")
            })
            .catch(err => {
                console.log(err.message);
            })
    }



    const handleForm = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const imgUrl = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value
        console.log(name, imgUrl, email, password);

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()-_=+{};:,<.>]{6,}$/.test(password)) {

            return toast("Password should be uppercase,lowercase an spacial character!");


        }

        signIn(email, password)
            .then(() => {
                profileInfo(name, imgUrl)
                    .then(() => { })
                    .catch(err => {
                        console.log(err.message);
                    })
                // console.log(res)
                swal("Good job!", "Sign up Successful!", "success")

                navigate('/signin')
            })
            .catch(err => toast(err.message))
    }





    return (
        <div className="hero bg-[#050E2D]  min-h-screen ">
            <div className="hero-content  flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-white my-4 font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" required name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image url</span>
                            </label>
                            <input type="text" required name="image" placeholder="Image url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" required name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password  </span>
                            </label>

                            <span onClick={() => setSeePassword(!seePassword)} className="absolute bottom-3 right-2"> {
                                seePassword === true ? <AiFillEye className="text-2xl"></AiFillEye> : <AiFillEyeInvisible className="text-2xl "></AiFillEyeInvisible>
                            } </span>

                            <input type={seePassword === true ? "password" : "text"} required name="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-cyan-400">Register</button>
                        </div>
                    </form>

                    <div className="flex flex-row justify-center items-center mb-3">
                        <Link to="/signin"
                            className="font-medium text-pink-500 transition-colors hover:text-blue-700"
                            href="#"
                        >
                            Login
                        </Link>
                    </div>

                    <div className="flex justify-around mb-2 mx-1  gap-1  ">
                        <div className=""> <button onClick={handleGoogle} className="btn  rounded-md" > <AiFillGoogleCircle className="text-2xl "></AiFillGoogleCircle>  <p>Google</p> </button> </div>

                        <div>

                            <button type="button" className="btn btn-outline-primary">
                                <AiFillGithub> </AiFillGithub>Github
                            </button>

                        </div>

                        <div>
                            <button className="btn"> <AiFillFacebook className="text-2xl"></AiFillFacebook> Facebook </button>
                        </div>
                    </div>

                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SignUp;