"use client"
import { AuthContext } from "@/context/Authprovider";
import useAdminProducts from "@/hooks/useAdminProducts";
import axios from "axios";
import Image from "next/image";
import { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { toast } from "react-toastify";


const ManageProducts = () => {
    const { users } = useContext(AuthContext)
    const [adminProducts, adminProductsLoading] = useAdminProducts();
    console.log("🚀 ~ file: ManageProducts.jsx:9 ~ ManageProducts ~ adminProducts:", adminProducts)



    const handleCencel = (id) => {
        axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/products/${users?.email}?productID=${id}`, { productState: "cencel" })
        .then((data) => {
            console.log("🚀 ~ file: ManageUsers.jsx:33 ~ .then ~ data:", data)
            if (data?.data?.modifiedCount) {
                toast.success("Product state updated successfully")
            }
        })
        .catch((err) => { console.log(err) })
    }
    const handleApproved = (id) => {
        axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/products/${users?.email}?productID=${id}`, { productState: "approved" })
        .then((data) => {
            console.log("🚀 ~ file: ManageUsers.jsx:33 ~ .then ~ data:", data)
            if (data?.data?.modifiedCount) {
                toast.success("Product state updated successfully")
            }
        })
        .catch((err) => { console.log(err) })
    }

    return (
        <div className="w-full flex flex-col gap-8">

            {
                adminProducts && adminProducts?.map(singleProducts => <div key={singleProducts?._id} className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-5 border shadow-sm rounded-md mx-5">
                    <Image className="w-32 border-r shadow-md rounded-md" width={150} height={100} src={singleProducts?.productImage} alt={singleProducts?.productFullName} />
                    <table className="w-full">
                        <thead >
                            <tr className="bg-white text-[#727b8f] hidden md:table-row">
                                <th className="border">Name</th>
                                <th className="border">Price</th>
                                <th className="border">ratings</th>
                                <th className="border">quantity</th>
                                <th className="border">State</th>
                                <th className="border">Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr className="flex flex-col md:table-row">
                                <th className="border py-2">{singleProducts?.productFullName}</th>
                                <th className="border py-2">&#2547; {singleProducts?.productPrice}</th>
                                <th className="border py-2 flex items-center justify-center gap-2">{singleProducts?.ratings} <span className="text-primaryColor"><AiFillStar /></span></th>
                                <th className="border py-2">{singleProducts?.productAvailableQuantity}</th>
                                <th className={`border py-2 
                                ${singleProducts?.productState === "approved" ? "text-green-500" : singleProducts?.productState === "cencel" ? "text-red-500" : singleProducts?.productState === "pending" ? "text-orange-400" : " "}
                                `}>{singleProducts?.productState}</th>
                                <th className="border py-2 px-3">
                                    <button
                                        disabled={singleProducts?.productState === "approved" || singleProducts?.productState === "cencel"}
                                        onClick={() => handleApproved(singleProducts?._id)} className={`px-3 py-1  ${singleProducts?.productState === "approved" || singleProducts?.productState === "cencel" ? "bg-gray-400" : "bg-primaryColor hover:bg-[#744972]"} text-white rounded-md  hover:transition-all`}>Approved</button>
                                </th>
                            </tr>
                        </tbody>
                        <tbody className="h-8">
                            <tr>
                                <td className=" py-3 break-all"><span className="font-bold">Employee Email</span> : {singleProducts?.employeEmail}</td>
                            </tr>
                        </tbody>
                        <thead >
                            <tr className="bg-white text-[#727b8f] hidden md:table-row">
                                <th className="border">Warranty</th>
                                <th className="border">Color</th>
                                <th className="border">Ram</th>
                                <th className="border">Storage</th>
                                <th className="border">Category</th>
                                <th className="border">Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr className="flex flex-col md:table-row">
                                <th className="border py-2">{singleProducts?.productWarranty}</th>
                                <th className="border py-2">{singleProducts?.productColor}</th>
                                <th className="border py-2 flex items-center justify-center gap-2">{singleProducts?.productRam}</th>
                                <th className="border py-2">{singleProducts?.productStorage}</th>
                                <th className={`border py-2`}>{singleProducts?.category}</th>
                                <th className="border py-2 px-3"><button
                                    disabled={singleProducts?.productState === "approved" || singleProducts?.productState === "cencel"}
                                    onClick={() => handleCencel(singleProducts?._id)}
                                    className={`px-3 py-1  ${singleProducts?.productState === "approved" || singleProducts?.productState === "cencel" ? "bg-gray-400" : "bg-primaryColor hover:bg-[#744972]"} text-white rounded-md  hover:transition-all`}>Cencel</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>)
            }
        </div>

    );
};

export default ManageProducts;