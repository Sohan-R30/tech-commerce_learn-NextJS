"use client"
import { AuthContext } from "@/context/Authprovider";
import { getCartProducts } from "@/utils/getCartProducts";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import {AiFillStar} from "react-icons/ai"
import CartProducts from "./CartProducts";

const Cart =  () => {

    const {users} = useContext(AuthContext);
      
    return (
        <div>
            <CartProducts email={users?.email}></CartProducts>
        </div>
    );
};

export default Cart;