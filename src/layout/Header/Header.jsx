import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../provider/AuthProvider";
import "./Header.css"
import { AuthContext } from "../../components/Authentication/AuthProvider";

const Header = () => {

    const navigate = useNavigate()

    const { user, logOut } = useContext(AuthContext)
    // console.log(profileInfo);
    // console.log(user?.photoURL);

    const handleLogOut = () => {
        logOut()
            .then(() => {

                navigate('/')

            })
            .catch(() => {  })
    }

    const navlink = <>

        <li className="Home"> <NavLink to="/"> Home </NavLink> </li>
        <li className="Home"> <NavLink to="/services"> Add Product </NavLink> </li>
        <li className="Home"> <NavLink to="/services"> My Cart </NavLink> </li>
        <li className="Home"> <NavLink to="/profile"> Profile</NavLink> </li>
        <li className="Home" > <NavLink to="/contactUs"> Contact Us </NavLink> </li>

    </>

    return (
        <div className="bg-[#1b2141] ">
            <div className="navbar bg-[#1b2141] text-white flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-[#1b2141] rounded-box w-52">

                            {navlink}

                        </ul>
                    </div>
                    <a to='/' className="btn btn-ghost normal-case text-xl">
                        Tech and Gaming
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal ">

                        {navlink}

                    </ul>
                </div>

                <div className="navbar-end">




                    {
                        !user ? <Link to="/signin" id="login-btn" className="btn bg-[#1b2141] drop-shadow-2xl text-white ">Login</Link>
                            :
                            <div className="dropdown dropdown-end flex mt-1 justify-end bg-[#201D21] ">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 flex justify-end rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-4 z-[1] p-2 mt-14 shadow menu menu-sm dropdown-content bg-[#1b2141] rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            {user.displayName}

                                        </a>
                                    </li>
                                  
                                    <button className="btn border-cyan-500  hover:bg-cyan-500 text-white bg-[#1B2141] mt-1" onClick={handleLogOut}>Logout</button>

                                </ul>
                            </div>
                    }



                </div>
            </div>
        </div>
    );
};

export default Header;