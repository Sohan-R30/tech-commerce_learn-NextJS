"use client"
import Lottie from "lottie-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import loginJson from "@/../public/login.json"

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <div className="grid grid-cols-2 place-items-center">
            <div>
                <Lottie animationData={loginJson} loop={true} />
            </div>
            <div className=" px-5 md:px-40 py-10 shadow-sm ">
                <div className="flex items-center flex-col gap-3 justify-center">
                    <p className="text-xl text-center"><span className="text-2xl text-primaryColor">Welcome, </span> to our Tech Commerce</p>
                    <p className="text-xl border-b-2 pb-2 border-primaryColor">Please Login Here</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="">
                    <div className="my-8 relative">
                        <label htmlFor="email" className="border px-2 py-1 bg-primaryColor text-white rounded-md absolute left-0 -top-6  text-center w-24">Email</label>
                        <input id="email" placeholder="Enter Your Email" {...register("email", { required: true })} className="inputStyle rounded-md" />
                        {errors.email && <span className="text-sm text-red-600 absolute right-0 -top-5">Enter your Email Properly.</span>}
                    </div>
                    <div className="my-8 relative">
                        <label htmlFor="password" className="border px-2 py-1 bg-primaryColor text-white rounded-md absolute left-0 -top-6  text-center w-24">Password</label>
                        {
                            showPassword ? <p
                                onClick={() => setShowPassword(false)}
                                className="absolute right-5 cursor-pointer text-2xl text-primaryColor font-bold top-2">
                                <AiOutlineEye />
                            </p> : <p
                                onClick={() => setShowPassword(true)}
                                className="absolute right-5 cursor-pointer text-2xl text-primaryColor font-bold top-2">
                                <AiOutlineEyeInvisible />
                            </p>
                        }
                        <input id="password" type={`${showPassword ? "text" : "password"}`} placeholder="Enter Your Password" {...register("password", { required: true, pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])(.{6,})$/ })} className="inputStyle rounded-md" />
                        {errors.password && <span className="text-sm text-red-600 absolute right-0 -top-5">Enter your Password Properly.</span>}
                    </div>

                    <input type="submit" value="Login" className="buttonStyle bg-primaryColor rounded-md w-full py-2 cursor-pointer" />
                </form>
                <div className="my-3">
                    <p>Have no account ? <Link href="/registration" className="text-primaryColor">Please Registration</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;