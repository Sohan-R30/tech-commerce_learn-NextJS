import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/logo.png"
import {PiShoppingCartSimpleBold} from "react-icons/pi"

const Header = () => {
    return (
        <div className="py-8 grid grid-cols-3  gap-4 place-content-around items-center">
            <Link href="/">
                <div className="flex items-end h-5 mt-3">
                    <p className="textStrock">Tech </p>
                    <div className="px-2 ">
                        <Image src={logo} height={50} width={55} alt="logo image" />
                    </div>
                    <p className="textStrock">Commerce </p>
                </div>
            </Link>
            <div className="w-full flex">
               <input className="inputStyle rounded-s-md" type="search" name="searchProduct" id="searchProduct" placeholder="Search Product" />
               <button className="buttonStyle bg-primaryColor rounded-e-md hover:text-xs">Search</button>
            </div>
            <div className=" place-content-end flex gap-10 items-center h-5">
                <div>
                <Link href="/cart">
                    <p className="text-3xl "><PiShoppingCartSimpleBold /></p>
                </Link>
                </div>
                <div>
                    <Link href="/login">
                        <button className="buttonStyle rounded-md  bg-primaryColor hover:bg-[#0065a3] w-20 hover:text-sm">Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;