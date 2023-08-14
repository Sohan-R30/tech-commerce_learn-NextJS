import Link from "next/link";

const Dashboard = () => {
    const name = 'Zahidul Islam Shohan'

    const user = "employee"
    return (
        <div className='flex justify-center items-center mt-20'>
        <div>
            <div className="flex items-center flex-col gap-3 justify-center">
                <p className="text-xl text-center"><span className="text-2xl text-primaryColor">Welcome, </span> <span className="border-b-2 font-bold pb-1 uppercase">{name}</span> to our Tech Commerce</p>
                <p className="text-xl border-b-2 pb-2 border-primaryColor">DashBoard</p>

                <p className=" tracking-widest">You Can Explore Below of the </p>
            </div>
            {
                user && user === "user" && (
                    <div className="flex gap-10 flex-wrap justify-center mt-10">
                        <div className="w-[400px] h-[200px] bg-[#ccfbee] rounded-md flex justify-center items-center text-center shadow-md group hover:bg-[#94e7cf] hover:transition-all">
                            <div>
                                <h3 className="mb-4 text-2xl uppercase font-bold text-rose-500 group-hover:text-rose-800">Your Buying History</h3>
                                <button className="buttonStyle bg-rose-500 rounded-md">See History</button>
                            </div>
                        </div>
                    </div>
                )
            }
             {
                user && user === "employee" && (
                    <div className="flex gap-10 flex-wrap justify-center mt-10">
                        <Link href="dashboard/add-product">
                        <div className="w-[400px] h-[200px] bg-[#e7ccfb] rounded-md flex justify-center items-center text-center shadow-md group hover:bg-[#c689eb] hover:transition-all">
                            <div>
                                <h3 className="mb-4 text-2xl uppercase font-bold text-rose-500 group-hover:text-rose-800">Add Your Product</h3>
                                <button className="buttonStyle bg-rose-500 rounded-md">Add Product</button>
                            </div>
                        </div>
                        </Link>
                        <Link href="dashboard/see-product">
                        <div className="w-[400px] h-[200px] bg-[#ccebfb] rounded-md flex justify-center items-center text-center shadow-md group hover:bg-[#8ad8f3] hover:transition-all">
                            <div>
                                <h3 className="mb-4 text-2xl uppercase font-bold text-rose-500 group-hover:text-rose-800">See Your Products</h3>
                                <button className="buttonStyle bg-rose-500 rounded-md">See Products</button>
                            </div>
                        </div>
                        </Link>
                    </div>
                )
            }
            {
                user && user === "admin" && (
                    <div className="flex gap-10 flex-wrap justify-center mt-10">
                        <div className="w-[400px] h-[200px] bg-[#e7fbcc] rounded-md flex justify-center items-center text-center shadow-md group hover:bg-[#c2e695] hover:transition-all">
                            <div>
                                <h3 className="mb-4 text-2xl uppercase font-bold text-rose-500 group-hover:text-rose-800">Manage All Users</h3>
                                <button className="buttonStyle bg-rose-500 rounded-md">See Users</button>
                            </div>
                        </div>
                        <div className="w-[400px] h-[200px] bg-[#fbcccc] rounded-md flex justify-center items-center text-center shadow-md group hover:bg-[#ecacac] hover:transition-all">
                            <div>
                                <h3 className="mb-4 text-2xl uppercase font-bold text-rose-500 group-hover:text-rose-800">Manage All Products</h3>
                                <button className="buttonStyle bg-rose-500 rounded-md">See Products</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
        </div>
    );
};

export default Dashboard;