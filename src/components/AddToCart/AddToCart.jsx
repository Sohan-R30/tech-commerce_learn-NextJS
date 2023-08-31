"use client"
import { toast } from "react-toastify";
import {FaCartPlus} from "react-icons/fa"
import dynamic from "next/dynamic";
const AddToCart = () => {
    return (
        <>
            <p onClick={() => toast.warning("Not Valid User")} className="text-2xl text-primaryColor"><FaCartPlus /></p>
        </>
    );
};

export default dynamic(() => Promise.resolve(AddToCart), { ssr: false })