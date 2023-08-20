import { AuthContext } from "@/context/Authprovider";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

const useAdminProducts = () => {
    const {users, userLoading} = useContext(AuthContext);
    const [adminProducts, setAdminProducts] = useState([])
    const [adminProductsLoading, setAdminProductsLoading] = useState(true)

    useEffect(() => {
        if(!userLoading){
            axios(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/products/${users?.email}`)
            .then((result) => {
                setAdminProducts(result?.data)
                setAdminProductsLoading(false)
            }).catch((error) => {
                console.log(error)
                setAdminProductsLoading(false)
            })
        }
      
    },[users,userLoading])

    
    return [adminProducts, adminProductsLoading]
};

export default useAdminProducts;