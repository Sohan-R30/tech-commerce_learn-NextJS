import { connectDB } from "@/utils/ConnectDB";
import { NextResponse } from "next/server";

const client = await connectDB();

const db = client.db("techCommerce");

const productsCollection = db.collection("products");


export const GET = async (req) => {
    const product = req.nextUrl.searchParams.get("product");

    const options = {
        projection: { employeEmail: 0, employeeName: 0, productState: 0 },
    };

    try {
        if(product === "all"){
            const result = await productsCollection.find({},options).toArray();
            return NextResponse.json(result)
        }else{
            const query = {category: product}
            const result = await productsCollection.find(query,options).toArray();
            return NextResponse.json(result)
        }
    } catch (error) {
        return NextResponse.json({ message: 'An error occurred while fetching data.' });
    }
}