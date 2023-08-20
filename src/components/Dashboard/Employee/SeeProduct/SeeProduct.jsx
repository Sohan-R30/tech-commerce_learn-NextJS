"use client"
import { AuthContext } from '@/context/Authprovider';
import axios from 'axios';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const SeeProduct = () => {

    const [employeeProducts, setEmployeeProducts] = useState([]);

    const { users, userLoading } = useContext(AuthContext);
    useEffect(() => {
        if (!userLoading) {
            axios(`${process.env.NEXT_PUBLIC_API_URL}/api/products/addedProducts/${users?.email}`,)
                .then((resutl) => {
                    console.log("🚀 ~ file: SeeProduct.jsx:17 ~ .then ~ resutl:", resutl)
                    setEmployeeProducts(resutl?.data);
                })
                .catch((error) => {
                    console.error('Error fetching all product:', error);
                    setEmployeeProducts([]);
                })
        }
    }, [users, userLoading])

    return (
        <div>
            <p className="sm:text-2xl text-center font-bold uppercase my-20">My Products</p>
            <div className="w-full flex flex-col gap-8">
                {
                    employeeProducts && employeeProducts?.map(singleProducts => <div key={singleProducts?._id} className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-5 border shadow-sm rounded-md mx-5">
                     <Image className="w-32 border-r shadow-md rounded-md" width={150} height={100} src={singleProducts?.productImage} alt={singleProducts?.productFullName} />
                    <table className="w-full">
                        <thead className="">
                            <tr className="bg-white text-[#727b8f] hidden md:table-row">
                                <th className="border">Name</th>
                                <th className="border">Price</th>
                                <th className="border">ratings</th>
                                <th className="border">quantity</th>
                                <th className="border">State</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="flex flex-col md:table-row">
                                <th className="border py-2">{singleProducts?.productFullName}</th>
                                <th className="border py-2">&#2547; {singleProducts?.productPrice}</th>
                                <th className="border py-2 flex items-center justify-center gap-2">{singleProducts?.ratings} <span className="text-primaryColor"><AiFillStar/></span></th>
                                <th className="border py-2">{singleProducts?.productAvailableQuantity}</th>
                                <th className={`border py-2 
                                ${singleProducts?.productState === "approved" ? "text-green-500" :  singleProducts?.productState === "cencel" ? "text-red-500" : singleProducts?.productState === "pending" ? "text-orange-400" : " "}
                                `}>{singleProducts?.productState}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>)
                }
            </div>
        </div>

    );
};

export default SeeProduct;