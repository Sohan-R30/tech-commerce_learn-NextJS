import Image from "next/image";
import Link from "next/link";
import {AiFillStar} from "react-icons/ai"

const Cart = () => {
    const cartProduct = [
        {
          _id: "64c76871b87721705d2f0c98",
          employeEmail: "sohan@gmail.com",
          employeeName: "Shohan",
          productFullName: "Kieslect Lora 2 Lady Calling Smart Watch",
          productModel: "Kieslect Lora 2",
          productBrand: "Kieslect",
          productColor: "Gold & Black",
          productAvailableQuantity: "500",
          productWarranty: "1 year warranty",
          productDisplay: "1.3’’ HD AMOLED Display",
          productPrice: "6300",
          ratings: 4,
          productState: "approved",
          productImage: "https://firebasestorage.googleapis.com/v0/b/techcommerce-58277.appspot.com/o/profile%2Fimages%2FKieslect-Lady-Watch-Lora-2-Gold-1669.jpg?alt=media&token=6b315e20-43bb-4a49-9fd9-8f9f7413f2ef",
          category: "watch",
          productDescription: "The Kieslect Lora Lady Smart Watch offers a 3D full-view colorful display...",
        },
      ];
      
      
    return (
        <div>
            <p className="sm:text-2xl text-center font-bold uppercase mt-20 mb-5">My Products In Cart</p>
            <p className=" text-center mb-20 tracking-widest">Total Products {cartProduct?.length}</p>
            <div className="w-full flex flex-col gap-8">
                {
                    cartProduct && cartProduct?.map(singleProducts => <div key={singleProducts?._id}>
                        <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-5 border shadow-sm rounded-md mx-5">
                            <Image className="w-32 border-r shadow-md rounded-md" width={150} height={100} src={singleProducts?.productImage} alt={singleProducts?.productFullName} />
                            <table className="w-full">
                                <thead className="">
                                    <tr className="bg-white text-[#727b8f] hidden md:table-row">
                                        <th className="border">Name</th>
                                        <th className="border">Price</th>
                                        <th className="border">ratings</th>
                                        <th className="border">quantity</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="flex flex-col md:table-row">
                                        <th className="border py-2">{singleProducts?.productFullName}</th>
                                        <th className="border py-2">&#2547; {singleProducts?.productPrice}</th>
                                        <th className="border py-2 flex items-center justify-center gap-2">{singleProducts?.ratings} <span className="text-primaryColor"><AiFillStar /></span></th>
                                        <th className="border py-2">{singleProducts?.productAvailableQuantity}</th>
                                    </tr>
                                    <tr className="flex flex-col md:table-row">
                                        <th className="border py-2"></th>
                                        <th className="border py-2"></th>
                                        <th className="border py-2"><Link href={`/detailsProduct/${singleProducts?._id}`}><button className="px-2 py-1 bg-primaryColor text-white rounded-md">View Details</button></Link></th>
                                        <th className="border py-2">
                                            <Link href={`/user/dashboard/payment/${singleProducts?._id}`}>
                                                <button className="px-2 py-1 bg-orange-400 text-white rounded-md">Buy Now</button>
                                            </Link>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Cart;