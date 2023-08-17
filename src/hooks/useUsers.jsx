import { AuthContext } from "@/context/Authprovider";
import axios from "axios";
import { useContext, useEffect, useState } from "react";


const useUsers = () => {
    const {users, userLoading} = useContext(AuthContext);
    const [logUserLoading, setLogUserLoading] = useState(true)
    const [loggedUser, setLoggedUser] = useState({})

    useEffect(() => {
        if(!userLoading){
            axios(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${users?.email}`)
            .then((result) => {
                setLoggedUser(result?.data?.result)
                setLogUserLoading(false)
            }).catch((error) => {
                console.log(error)
            })
        }
      
    },[users,userLoading])

    
    return [loggedUser, logUserLoading]


};

export default useUsers;