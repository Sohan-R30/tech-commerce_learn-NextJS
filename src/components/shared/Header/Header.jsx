"use client"
import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/logo.png"
import userImg from "@/../public/user.png"
import { PiShoppingCartSimpleBold } from "react-icons/pi"
import SearchProducts from "@/components/SearchProducts/SearchProducts";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/Authprovider";
import { useRouter } from "next/navigation";
import axios from "axios";


const Header = () => {
    const { users, logOut } = useContext(AuthContext)
    const [profileOrDashboard, setProfileOrDashboard] = useState(false);
    const router = useRouter();
   

    const handleLogOut = () => {
        
        logOut()
            .then(() => {
                axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${users?.email}`)
                    .then(() => {
                    }).catch((error) => {
                        console.log(error)
                    })
            })
            .catch(() => {})
    }

    const handleProfile = () => {
        if (users) {
            setProfileOrDashboard(!profileOrDashboard)
        }

    }

    return (
        <div className="py-8 grid grid-cols-3  gap-4 place-content-around items-center ">
            <Link href="/">
                <div className="flex items-end h-5 mt-3">
                    <p className="textStrock">Tech </p>
                    <div className="px-2 ">
                        <Image src={logo} height={50} width={55} alt="logo image" />
                    </div>
                    <p className="textStrock">Commerce </p>
                </div>
            </Link>
            <div className="w-full flex relative">
                <SearchProducts />
            <div className={`uppercase text-sm absolute -right-32 ${profileOrDashboard ? "" : "hidden"}`}>
                <p onClick={() => {
                    router.push("/profile")
                    setProfileOrDashboard(!profileOrDashboard)
                }} className="bg-[#dbf6ff]  border-b border-b-black min-w-[100px] text-center rounded-t-md cursor-pointer py-1 hover:bg-primaryColor transition-colors duration-500 hover:text-white">Profile</p>
                <p onClick={() => {
                    router.push("/dashboard")
                    setProfileOrDashboard(!profileOrDashboard)
                }} className="bg-[#dbf6ff]  min-w-[100px] text-center rounded-b-md cursor-pointer py-1 hover:bg-primaryColor transition-colors duration-500 hover:text-white">Dashboard</p>
            </div>
            </div>
            <div className=" place-content-end flex gap-10 items-center h-5">
                <div>
                    <Link href="/cart">
                        <p className="text-3xl "><PiShoppingCartSimpleBold /></p>
                    </Link>
                </div>
                <div>

                    {
                        users ? (
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                    <Image onClick={handleProfile} className="w-full h-full object-cover" src={users?.photoURL ? users?.photoURL : userImg} height={30} width={45} alt="user image" />
                                </div>
                                <button onClick={handleLogOut} className="buttonStyle rounded-md  bg-primaryColor hover:bg-[#0065a3] w-24 hover:text-sm">Log Out</button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Image src={userImg} height={30} width={45} alt="user image" />
                                <Link href="/login">
                                    <button className="buttonStyle rounded-md  bg-primaryColor hover:bg-[#0065a3] w-20 hover:text-sm">Login</button>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;