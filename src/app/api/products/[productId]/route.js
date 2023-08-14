import { connectDB } from "@/utils/ConnectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

const client = await connectDB();

const db = client.db("techCommerce");

const productsCollection = db.collection("products");


export const GET = async (req, {params}) => {

const {productId} = params;
const options = {
    projection: { employeEmail: 0, employeeName: 0, productState: 0 },
};

    try {
        const result = await productsCollection.findOne({_id: new ObjectId(productId)},options);
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json({ error: true, message: 'An error occurred while fetching data.' });
    }
}