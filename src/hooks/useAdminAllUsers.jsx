import { AuthContext } from "@/context/Authprovider";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

const useAdminAllUsers = () => {
    const {users, userLoading} = useContext(AuthContext);
    const [adminUsers, setAdminUsers] = useState([])
    const [adminUsersLoading, setAdminUsersLoading] = useState(true)

    useEffect(() => {
        if(!userLoading){
            axios(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/users/${users?.email}`)
            .then((result) => {
                setAdminUsers(result?.data)
                setAdminUsersLoading(false)
            }).catch((error) => {
                console.log(error)
                setAdminUsersLoading(false)
            })
        }
      
    },[users,userLoading])

    
    return [adminUsers, adminUsersLoading]
};

export default useAdminAllUsers;