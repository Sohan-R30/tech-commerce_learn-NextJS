

import { connectDB } from "@/utils/ConnectDB";
import { NextResponse } from "next/server";

const client = await connectDB();

const db = client.db("techCommerce");

const productsCollection = db.collection("products");


export const GET = async (req,) => {
    const searchText = req.nextUrl.searchParams.get("searchText");;
    const regexSearch = { $regex: searchText, $options: 'i', };
    const search = {
        $or: [
            { productFullName: regexSearch },
            { productBrand: regexSearch },
            { productColor: regexSearch },
            { productDisplay: regexSearch },
            { productProccesor: regexSearch },
            { productRam: regexSearch },
            { productStorage: regexSearch },
            { productBattery: regexSearch },
        ],
    }
    const options = {
        projection: { productImage: 1, productModel: 1, productAvailableQuantity: 1 },
    }
    try {
        const result = await productsCollection.find(search, options).toArray();
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json({ message: 'An error occurred while fetching data.' });
    }
}


