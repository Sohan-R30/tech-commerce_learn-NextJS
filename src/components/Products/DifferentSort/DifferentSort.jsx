"use client"

import { useState } from "react";
import { toast } from "react-toastify";

const DifferentSort = () => {
    const [selectedPrice, setSelectedPrice] = useState("ascending")
    console.log("🚀 ~ file: DifferentSort.jsx:7 ~ DifferentSort ~ selectedPrice:", selectedPrice)
    const [selectedRatings, setSelectedRatings] = useState("descending")
    console.log("🚀 ~ file: DifferentSort.jsx:9 ~ DifferentSort ~ selectedRatings:", selectedRatings)
    // setSelectedPrice(e.target.value)
    // setSelectedRatings(e.target.value)
    return (
        <div className="border py-2 rounded-md flex justify-between px-10">
            <div className="flex  gap-5 items-center">   
                <p>Sort By Price</p>
                <select onChange={(e) => toast.info("temporary disabled")} name="price" id="price" className="border px-2 py-1">
                    <option defaultChecked value="ascending">Low to High</option>
                    <option value="descending">High to Low</option>
                </select>
            </div>
            <div className="flex gap-5 items-center">   
                <p>Sort By Ratings</p>
                <select onChange={(e) => toast.info("temporary disabled")} name="price" id="price" className="border px-2 py-1">
                    <option  value="ascending">Low to High</option>
                    <option defaultChecked value="descending">High to Low</option>
                </select>
            </div>
        </div>
    );
};

export default DifferentSort;