"use client"
import Lottie from "lottie-react";
import loginJson from "@/../public/login.json";
import { useForm } from "react-hook-form"
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/Authprovider";

const Registration = () => {
    const { createUser, updateUserProfile, users } = useContext(AuthContext)
    const [ErrorMSG, setErrorMSG] = useState("");

    const router = useRouter()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const postUserDb = (email, user) => {
        axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${email}`, user)
        .then((res) => {
            console.log("🚀 ~ file: Registration.jsx:37 ~ .then ~ result:", res)
            if (res?.data?.upsertedCount) {
                toast.success("Users Registration Complete")
                setErrorMSG("")
                router.push("/", { replace: true })
            }
        }).catch((err) => {
            console.log(err)
            setErrorMSG(err.message)
        })
    }


    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(async (userResult) => {
                console.log("🚀 ~ file: Registration.jsx:52 ~ .then ~ userResult:", userResult)
                setErrorMSG("")
                try {
                    const result1 = await updateUserProfile("profileName", data?.fullName);
                    console.log("🚀 ~ file: Registration.jsx:36 ~ .then ~ result1:", result1)
                    const user = {
                        displayName: userResult?.user?.displayName,
                        email: userResult?.user?.email,
                        emailVerified: userResult?.user?.emailVerified,
                        uid: userResult?.user?.uid,
                    }
                    postUserDb(userResult?.user?.email, user)

                } catch (error) {
                    console.log(error)
                    setErrorMSG(error.message)
                }
            })
            .catch((err) => {
                console.log(err)
                setErrorMSG(err.message)
            })
    }



    if (users) {
        return router.push("/", { replace: true })
    };
    return (
        <div className="grid grid-cols-2 place-items-center">
            <div className=" px-5 md:px-40 py-10 shadow-sm ">
                <div className="flex items-center flex-col gap-3 justify-center">
                    <p className="text-xl text-center"><span className="text-2xl text-primaryColor">Welcome, </span> to our Tech Commerce</p>
                    <p className="text-xl border-b-2 pb-2 border-primaryColor">Please Registration Here</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="">
                    <div className="my-8 relative">
                        <label htmlFor="fullName" className="border px-2 py-1 bg-primaryColor text-white rounded-e-md absolute  -right-10 top-0 bottom-0 text-center w-24">Full Name</label>
                        <input id="fullName" placeholder="Enter Your Full Name" {...register("fullName", { required: true })} className="inputStyle rounded-md" />
                        {errors.fullName && <span className="text-sm text-red-600  absolute left-0 -bottom-6">Enter your Full Name.</span>}
                    </div>
                    <div className="my-8 relative">
                        <label htmlFor="email" className="border px-2 py-1 bg-primaryColor text-white rounded-e-md absolute  -right-10 top-0 bottom-0 text-center w-24">Email</label>
                        <input id="email" placeholder="Enter Your Email" {...register("email", { required: true })} className="inputStyle rounded-md" />
                        {errors.email && <span className="text-sm text-red-600 absolute left-0 -bottom-6">Enter your Email Properly.</span>}
                    </div>

                    <div className="my-8 relative">
                        <label htmlFor="password" className="border px-2 py-1 bg-primaryColor text-white rounded-e-md absolute  -right-10 top-0 bottom-0 text-center w-24">Password</label>
                        <input id="password" placeholder="must have special char & number" {...register("password", { required: true, pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])(.{6,})$/ })} className="inputStyle rounded-md" />
                        {errors.password && <span className="text-sm text-red-600 absolute left-0 -bottom-6">Enter your Password Properly.</span>}
                    </div>
                    <div className="my-8 relative">
                        <label htmlFor="confirmPassword" className="border px-2 py-1 bg-primaryColor text-white rounded-e-md absolute  -right-10 top-0 bottom-0 text-center w-24">Confirm</label>
                        <input id="confirmPassword" placeholder="Confirm Your Password" {...register("confirmPassword", { required: true, validate: (value) => value === watch('password') })} className="inputStyle rounded-md" />
                        {errors.confirmPassword && <span className="text-sm text-red-600 absolute left-0 -bottom-6">Your Password Does not match</span>}
                    </div>
                    <div className="my-2">
                        <p className="text-sm text-red-600 text-center">{ErrorMSG}</p>
                    </div>
                    <input type="submit" value="Registration" className="buttonStyle bg-primaryColor rounded-md w-full py-2 cursor-pointer" />
                </form>
                <div className="my-3">
                    <p>Already have an Account ? <Link href="/login" className="text-primaryColor">Please login</Link></p>
                </div>
            </div>
            <div>
                <Lottie animationData={loginJson} loop={true} />
            </div>
        </div>
    );
};

export default Registration;