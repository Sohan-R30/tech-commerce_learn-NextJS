"use client"
import { toast } from "react-toastify";
import {FaCartPlus} from "react-icons/fa"
import dynamic from "next/dynamic";
import { useContext } from "react";
import { AuthContext } from "@/context/Authprovider";
import axios from "axios";
import useUsers from "@/hooks/useUsers";



const AddToCart =  ({productId}) => {

    const {users} = useContext(AuthContext)
    const [loggedUser, logUserLoading] = useUsers();
    
    const handleAddToCart = () => {
        if(loggedUser?.role === "admin"){
            toast.success("You Can't add cart Admin")
            return 
        } 
        if(loggedUser?.role === "employee") {
            toast.success("You Can't add cart Employee")
            return 
        } 

        
        if(!users) return toast.warn("not a valid user")
        axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/addtocart/${users?.email}`, { addedCartProduct:  productId})
        .then((data) => {
            console.log("🚀 ~ file: ManageUsers.jsx:21 ~ .then ~ data:", data)
            if (data?.data?.modifiedCount) {
                toast.success("Added to Cart Successfully")
            }
            else{
                if(data?.data?.matchedCount){
                    toast.info("Cart already exists!")
                
                }
            }
        })
        .catch((err) => { console.log(err) })
    }
    return (
        <>
            <p onClick={handleAddToCart} className="text-2xl text-primaryColor"><FaCartPlus /></p>
        </>
    );
};

export default dynamic(() => Promise.resolve(AddToCart), { ssr: false })