"use client";

import { getsearchProducts } from "@/utils/getsearchProducts";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SearchProducts = () => {
    const [searchText, setSearchText] = useState();
    const [searchProducts, setSearchProducts] = useState([]);

    const handleSearch = async () => {
        if(!searchText) return;
        const search = await getsearchProducts(searchText);
        setSearchProducts(search)
    }
    console.log("🚀 ~ file: SearchProducts.jsx:7 ~ SearchProducts ~ searchProducts:", searchProducts)
    return (
        <>
            <input onChange={(e) => setSearchText(e.target.value)} className="inputStyle rounded-s-md" type="search" name="searchProduct" id="searchProduct" placeholder="Search Product" />
            <button onClick={handleSearch} className="buttonStyle bg-primaryColor rounded-e-md hover:text-xs">Search</button>

            <div onBlur={() => setSearchProducts([])} className={`absolute top-52 sm:top-44 md:top-36 lg:top-28 xl:top-20 bg-[#fff] z-50 rounded-md shadow-2xl`}>
                <div onClick={() => setSearchProducts([])}>
                    {
                        searchProducts && searchProducts?.map(product => <Link href={`/products/${product?._id}`} key={product?._id}>
                            <div className="flex gap-3 items-center justify-between border-b-2  py-3 px-5 sm:px-10 md:px-20 hover:bg-[#a1d5f6] hover:transition-colors rounded-md">
                                <Image width={80} height={40} src={product?.productImage} alt="product" />
                                <div className="flex flex-col gap-2 mt-2">
                                    <p>Model : {product?.productModel} </p>
                                    <p>Available : {product?.productAvailableQuantity} </p>
                                </div>
                            </div>
                        </Link>)
                    }
                </div>
            </div>
        </>
    );
};

export default SearchProducts;