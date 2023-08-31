import AddToCart from "@/components/AddToCart/AddToCart";
import ProductRatings from "@/components/ProductRatings/ProductRatings";
import { getsingleProducts } from "@/utils/getsingleProducts";
import Image from "next/image";
import Link from "next/link";


const SingleProducts = async ({productId}) => {
    const singleProducts = await getsingleProducts(productId);
    if(singleProducts?.error){
        throw Error("Product Not Find")
    }
    return (
        <div>
        {
            singleProducts && (
                <div className="px-5">
                    <div className="flex flex-wrap md:gap-20 items-center justify-start my-5">
                        <div>
                            <Image src={singleProducts?.productImage} width={540} height={540} alt={singleProducts?.productFullName} />
                        </div>
                        <div>
                            <div className="mb-2 sm:mb-5 pt-2">
                                <p className="text-2xl font-semibold pb-3">{singleProducts?.productFullName}</p>
                                <p><span className="font-semibold text-lg">Price : </span> &#2547; {singleProducts?.productPrice}</p>
                                <ProductRatings ratings={singleProducts?.ratings}/>
                                {singleProducts?.productAvailableQuantity && <p className="pt-2"><span className="font-bold">Available Quantity</span>  : {singleProducts?.productAvailableQuantity}</p>}
                            </div>
                            <div className="mb-1 md:mb-3 flex flex-col gap-2">
                                {singleProducts?.category && <p> <span className="font-bold">Category :</span>{singleProducts?.category}</p>}
                                {singleProducts?.productDisplay && <p> <span className="font-bold">Display :</span>{singleProducts?.productDisplay}</p>}
                                {singleProducts?.productBattery && <p> <span className="font-bold">Battery :</span>{singleProducts?.productBattery}</p>}
                                {singleProducts?.productWarranty && <p> <span className="font-bold">Warranty :</span>{singleProducts?.productWarranty}</p>}
                                {singleProducts?.productModel && <p> <span className="font-bold">Model :</span>{singleProducts?.productModel}</p>}
                                {singleProducts?.productBrand && <p> <span className="font-bold">Product Brand :</span>{singleProducts?.productBrand}</p>}
                                {singleProducts?.productColor && <p> <span className="font-bold">Color :</span>{singleProducts?.productColor}</p>}
                                {singleProducts?.productAvailableQuantity && <p> <span className="font-bold">Quantity :</span>{singleProducts?.productAvailableQuantity}</p>}
                                {singleProducts?.productRam && <p> <span className="font-bold">Ram :</span>{singleProducts?.productRam}</p>}
                                {singleProducts?.productStorage && <p> <span className="font-bold">Storage :</span>{singleProducts?.productStorage}</p>}
                                {singleProducts?.productCamera && <p> <span className="font-bold">Camera :</span>{singleProducts?.productCamera}</p>}
                                {singleProducts?.productPortAndSlot && <p> <span className="font-bold">Port & Slot :</span>{singleProducts?.productPortAndSlot}</p>}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-5 justify-start mb-10 items-center">
                    <AddToCart productId={singleProducts?._id}/>
                        <Link href={`/dashboard/checkout`}>
                            <button className="bg-primaryColor px-1 sm:px-3 sm:py-2  text-white rounded-md cursor-pointer uppercase hover:bg-[#9e7ea1]">Buy Now</button>
                        </Link>
                    </div>
                    <div>
                        <h3 className="font-bold text-2xl pb-2 border-b-black border-b">Details Description</h3>
                        <p className="py-4">{singleProducts?.productDescription}</p>
                    </div>
                </div>
            )
        }
    </div>
    );
};

export default SingleProducts;