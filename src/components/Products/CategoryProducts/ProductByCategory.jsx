import Image from "next/image";
import Link from "next/link";
import ProductRatings from "@/components/ProductRatings/ProductRatings";
import AddToCart from "@/components/AddToCart/AddToCart";
import dynamic from "next/dynamic";
import DifferentSort from "../DifferentSort/DifferentSort";

const ProductByCategory = ({products}) => {
    return (
        <>
        <div className="mx-auto  mt-20 mb-5">
            <DifferentSort/>
        </div>
        <div className="grid grid-cols-4 gap-8 mb-20">
            {
                products && products?.map((singleProducts) => <div key={singleProducts?._id}>
                    <div className="p-5 shadow-md rounded-md relative min-h-[420px] border-t">
                        <Link href={`/product/${singleProducts?._id}`}>
                            {/* <p>ssfa</p> */}
                            <Image className="w-60 pt-5 min-h-[200px] max-h-[200px] hover:scale-110 " src={singleProducts?.productImage} width={240} height={240} alt={singleProducts?.productFullName} />
                        </Link>
                        <Link href={`/products/${singleProducts?._id}`}>
                            <p className="max-w-[250px] font-bold pt-5 hover:text-primaryColor">{singleProducts?.productFullName}</p>
                        </Link>
                        <p>	&#2547; {singleProducts?.productPrice}</p>
                        <div className="absolute bottom-14 left-3 right-3 flex items-center justify-between">
                            <ProductRatings ratings={singleProducts?.ratings}/>
                            {/* <p onClick={() => toast.warning("Not Valid User")} className="text-2xl text-primaryColor"><FaCartPlus /></p> */}
                            <AddToCart/>
                        </div>
                        <Link href={`/products/${singleProducts?._id}`}>
                            <div className="absolute bottom-0 left-0 right-0 bg-[#008ae090] hover:bg-[#6aafd990] transition-colors text-black rounded-b-md text-center py-1 uppercase cursor-pointer font-bold">
                                <p>details</p>
                            </div>
                        </Link>
                        <p className="absolute top-5 uppercase text-primaryColor font-bold">{singleProducts?.category}</p>
                        <p className="absolute right-5 top-5 uppercase text-primaryColor font-bold">{singleProducts?.productAvailableQuantity ? <p className='border px-2 rounded-md text-white bg-primaryColor text-sm'>Stock</p> : <p className='border px-2 rounded-md text-white bg-primaryColor text-sm'>Out Stock</p>}</p>
                    </div>
                </div>
                )
            }
        </div>
        </>
    );
};

export default dynamic(() => Promise.resolve(ProductByCategory), { ssr: false })