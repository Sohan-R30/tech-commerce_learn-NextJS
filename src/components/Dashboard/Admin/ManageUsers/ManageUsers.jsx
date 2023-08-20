"use client"
import { AuthContext } from "@/context/Authprovider";
import useAdminAllUsers from "@/hooks/useAdminAllUsers";
import axios from "axios";
import Image from "next/image";
import { useContext } from "react";
import { toast } from "react-toastify";

const ManageUsers = () => {

    const { users } = useContext(AuthContext)

    const [adminUsers, adminUsersLoading] = useAdminAllUsers();
    console.log("🚀 ~ file: ManageUsers.jsx:9 ~ ManageUsers ~ adminUsers:", adminUsers)


    const handleMakeAdmin = (email) => {
        axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/users/${users?.email}?email=${email}`, { role: "admin" })
            .then((data) => {
                console.log("🚀 ~ file: ManageUsers.jsx:21 ~ .then ~ data:", data)
                if (data?.data?.modifiedCount) {
                    toast.success("make admin successfully")
                }
            })
            .catch((err) => { console.log(err) })
    }

    const handleMakeEmployee = (email) => {
        axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/users/${users?.email}?email=${email}`, { role: "admin" })
            .then((data) => {
                console.log("🚀 ~ file: ManageUsers.jsx:33 ~ .then ~ data:", data)
                if (data?.data?.modifiedCount) {
                    toast.success("make employee successfully")
                }
            })
            .catch((err) => { console.log(err) })
    }




    return (
        <div className="w-full flex flex-col gap-8">

            {

                adminUsers && adminUsers?.map(singleUser => <div key={singleUser?._id} className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-5 border shadow-sm rounded-md mx-5">
                    <Image className="w-32 border-r shadow-md rounded-md" width={150} height={100} src={singleUser?.photoURL} alt={singleUser?.displayName} />
                    <table className="w-full">
                        <thead >
                            <tr className="bg-white text-[#727b8f] hidden md:table-row">
                                <th className="border">Name</th>
                                <th className="border">Email</th>
                                <th className="border">Role</th>
                                <th className="border row-span-2">Action</th>
                                <th className="border row-span-2">Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr className="flex flex-col md:table-row">
                                <th className="border py-2">{singleUser?.displayName}</th>
                                <th className="border py-2">{singleUser?.email}</th>
                                <th className="border py-2">{singleUser?.role}</th>
                                <th className="border py-2 px-3">
                                    <button
                                        disabled={singleUser?.role === "admin" || singleUser?.role === "employee"}
                                        onClick={() => handleMakeAdmin(singleUser?.email)} className={`px-3 py-1  ${singleUser?.role === "admin" || singleUser?.role === "employee" ? "bg-gray-400  cursor-not-allowed" : "bg-primaryColor hover:bg-[#744972]"} text-white rounded-md  hover:transition-all`}>Admin</button>
                                </th>
                                <th className="border py-2 px-3">
                                    <button
                                        disabled={singleUser?.role === "admin" || singleUser?.role === "employee"}
                                        onClick={() => handleMakeEmployee(singleUser?.email)} className={`px-3 py-1  ${singleUser?.role === "admin" || singleUser?.role === "employee" ? "bg-gray-400  cursor-not-allowed" : "bg-primaryColor hover:bg-[#744972]"} text-white rounded-md  hover:transition-all`}>Employee</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )
            }
        </div>
    );
};

export default ManageUsers;