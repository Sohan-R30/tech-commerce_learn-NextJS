import { connectDB } from "@/utils/ConnectDB";
import { NextResponse } from "next/server";

const client = await connectDB();

const db = client.db("techCommerce");

const productsCollection = db.collection("products");


export const GET = async (req, { params }) => {

    const { userEmail } = params;
    const query = { employeEmail: userEmail }
    try {
        const result = await productsCollection.find(query).toArray();
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ message: error.message });
    }
}