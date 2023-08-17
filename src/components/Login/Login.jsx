"use client"
import Lottie from "lottie-react";
import Link from "next/link";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import loginJson from "@/../public/login.json"
import { AuthContext } from "@/context/Authprovider";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import axios from "axios";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { emailPasswordSignIn, users, googleSignIn } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const router = useRouter();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                const user = {
                    displayName: result?.user?.displayName,
                    email: result?.user?.email,
                    emailVerified: result?.user?.emailVerified,
                    uid: result?.user?.uid,
                    photoURL: result?.user?.photoURL,
                }
                axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${result?.user?.email}`, user)
                    .then(() => {
                        setLoginError("")
                        router.push("/", { replace: true })
                    }).catch((error) => {
                        console.log(error)
                        setLoginError(error.message)
                    })
            })
            .catch((error) => {
                console.log(error)
                setLoginError(error.message)
            })
    }

    const onSubmit = (data) => {
        emailPasswordSignIn(data.email, data.password)
            .then((result) => {
                const user = {
                    displayName: result?.user?.displayName,
                    email: result?.user?.email,
                    emailVerified: result?.user?.emailVerified,
                    uid: result?.user?.uid,
                    photoURL: result?.user?.photoURL,
                }
                axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${result?.user?.email}`, user)
                    .then(() => {
                        setLoginError("")
                        router.push("/", { replace: true })
                    }).catch((error) => {
                        console.log(error)
                        setLoginError(error.message)
                    })
            })
            .catch((error) => {
                setLoginError(error.message)
                console.log(error)
            })
    }


    if (users) {
        return router.push("/", { replace: true })
    };

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
                    <div className="my-2">
                        <p className="text-sm text-red-600 text-center">{loginError}</p>
                    </div>

                    <input type="submit" value="Login" className="buttonStyle bg-primaryColor rounded-md w-full py-2 cursor-pointer" />
                </form>
                <div className="my-3">
                    <p>Have no account ? <Link href="/registration" className="text-primaryColor">Please Registration</Link></p>
                </div>

                <div>
                    <button onClick={handleGoogleLogin} className="border justify-center hover:bg-gray-100 transition-colors delay-100 duration-500  rounded-md w-full py-2 cursor-pointer flex items-center gap-3"><span className="text-2xl"><FcGoogle /></span> Login with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;