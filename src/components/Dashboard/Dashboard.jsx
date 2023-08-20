"use client"
import { AuthContext } from "@/context/Authprovider";
import useUsers from "@/hooks/useUsers";
import Link from "next/link";
import { useContext } from "react";
import loadingGIF from "@/../public/loadingGIF.gif"
import Image from "next/image";

const Dashboard = () => {
    const [loggedUser, logUserLoading] = useUsers();
    const { users, userLoading } = useContext(AuthContext);

    return (

        <>
            {
                logUserLoading || userLoading ? (

                    <div className=" h-[50vh] flex items-center justify-center">
                        <Image src={loadingGIF} width={80} height={80} alt="loading gif" />
                    </div>

                ) : (
                    <>

                        <div className='flex justify-center items-center mt-20'>
                            <div>
                                <div className="flex items-center flex-col gap-3 justify-center">
                                    <p className="text-xl text-center"><span className="text-2xl text-primaryColor">Welcome, </span> <span className="border-b-2 font-bold pb-1 uppercase">{loggedUser?.displayName}</span> to our Tech Commerce</p>
                                    <p className="text-xl border-b-2 pb-2 border-primaryColor">DashBoard</p>

                                    <p className=" tracking-widest">You Can Explore Below of the </p>
                                </div>
                                {
                                    loggedUser && loggedUser?.role === "user" && (
                                        <div className="flex gap-10 flex-wrap justify-center mt-10">
                                            <div className="w-[400px] h-[200px] bg-[#ccfbee] rounded-md flex justify-center items-center text-center shadow-md group hover:bg-[#94e7cf] hover:transition-all">
                                                <div>
                                                    <h3 className="mb-4 text-2xl uppercase font-bold text-rose-500 group-hover:text-rose-800">Your Buying History</h3>
                                                    <button className="buttonStyle bg-rose-500 rounded-md">See History</button>
                                                </div>
                                            </div>
                                            <Link href="/">
                                                <div className="w-[400px] h-[200px] bg-[#afe7a5] rounded-md flex justify-center items-center text-center shadow-md group hover:bg-[#95d48a] hover:transition-all">
                                                    <div>
                                                        <h3 className="mb-4 text-2xl uppercase font-bold text-rose-500 group-hover:text-rose-800">Go To Home page</h3>
                                                        <button className="buttonStyle bg-rose-500 rounded-md">Home Page</button>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                }
                                {
                                    loggedUser && loggedUser?.role === "employee" && (
                                        <div className="flex gap-10 flex-wrap justify-center mt-10">
                                            <Link href="/dashboard/add-product">
                                                <div className="w-[400px] h-[200px] bg-[#e7ccfb] rounded-md flex justify-center items-center text-center shadow-md group hover:bg-[#c689eb] hover:transition-all">
                                                    <div>
                                                        <h3 className="mb-4 text-2xl uppercase font-bold text-rose-500 group-hover:text-rose-800">Add Your Product</h3>
                                                        <button className="buttonStyle bg-rose-500 rounded-md">Add Product</button>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link href="/dashboard/see-product">
                                                <div className="w-[400px] h-[200px] bg-[#ccebfb] rounded-md flex justify-center items-center text-center shadow-md group hover:bg-[#8ad8f3] hover:transition-all">
                                                    <div>
                                                        <h3 className="mb-4 text-2xl uppercase font-bold text-rose-500 group-hover:text-rose-800">See Your Products</h3>
                                                        <button className="buttonStyle bg-rose-500 rounded-md">See Products</button>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link href="/">
                                                <div className="w-[400px] h-[200px] bg-[#afe7a5] rounded-md flex justify-center items-center text-center shadow-md group hover:bg-[#95d48a] hover:transition-all">
                                                    <div>
                                                        <h3 className="mb-4 text-2xl uppercase font-bold text-rose-500 group-hover:text-rose-800">Go To Home page</h3>
                                                        <button className="buttonStyle bg-rose-500 rounded-md">Home Page</button>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                }
                                {
                                    loggedUser && loggedUser?.role === "admin" && (
                                        <div className="flex gap-10 flex-wrap justify-center mt-10">
                                            <Link href="/dashboard/manage-users" >

                                                <div className="w-[400px] h-[200px] bg-[#e7fbcc] rounded-md flex justify-center items-center text-center shadow-md group hover:bg-[#c2e695] hover:transition-all">
                                                    <div>
                                                        <h3 className="mb-4 text-2xl uppercase font-bold text-rose-500 group-hover:text-rose-800">Manage All Users</h3>
                                                        <button className="buttonStyle bg-rose-500 rounded-md">See Users</button>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link href="/dashboard/manage-products" >
                                                <div className="w-[400px] h-[200px] bg-[#fbcccc] rounded-md flex justify-center items-center text-center shadow-md group hover:bg-[#ecacac] hover:transition-all">
                                                    <div>
                                                        <h3 className="mb-4 text-2xl uppercase font-bold text-rose-500 group-hover:text-rose-800">Manage All Products</h3>
                                                        <button className="buttonStyle bg-rose-500 rounded-md">See Products</button>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link href="/">
                                                <div className="w-[400px] h-[200px] bg-[#afe7a5] rounded-md flex justify-center items-center text-center shadow-md group hover:bg-[#95d48a] hover:transition-all">
                                                    <div>
                                                        <h3 className="mb-4 text-2xl uppercase font-bold text-rose-500 group-hover:text-rose-800">Go To Home page</h3>
                                                        <button className="buttonStyle bg-rose-500 rounded-md">Home Page</button>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </>
                )
            }

        </>
    );
};

export default Dashboard;