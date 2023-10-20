import { BsFillSendFill } from "react-icons/bs";

const ContactUs = () => {
    return (
        <div>
            <div className='bg-[#1B2141] dark:bg-slate-300 my-14   items-center justify-center h-full  mx-auto max-w-[800px]'>
                <div>
                    <h3 className='text-4xl text-white dark:text-black font-bold text-center my-5'>Contact us</h3>
                    <div className="flex justify-center items-center">

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4  p-8'>
                            <form className='mt-8 w-full '>
                                <input className='block dark:bg-slate-100 dark:text-black rounded-sm  w-9/12 p-2  py-2 ' placeholder='your name' type="text" />
                                <input placeholder='your email' className='block dark:bg-slate-100 dark:text-black my-3 rounded-sm w-9/12 p-2  py-2 ' type="text" />
                                <textarea className='w-9/12 dark:bg-slate-100 dark:text-black p-2 mx-auto' placeholder='Your message'></textarea> <br />
                                <button className='btn border-cyan-400 bg-[#050E2D] text-white hover:bg-cyan-500 my-2 ' type='submit'> <BsFillSendFill className="text-cyan-500 "></BsFillSendFill> Send</button>
                            </form>
                            <div>

                                <img src="https://i.ibb.co/T8g9Bks/contact-us-1524408-1280.png" alt="" />

                            </div>
                        </div>
                    </div>


                </div>


            </div>

        </div>
    );
};

export default ContactUs;