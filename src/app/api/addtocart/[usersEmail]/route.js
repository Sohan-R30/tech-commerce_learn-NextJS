import { connectDB } from "@/utils/ConnectDB";
import { NextResponse } from "next/server";

const client = await connectDB();

const db = client.db("techCommerce");

const usersCollection = db.collection("users");





export const PUT = async (req, { params }) => {
    const { usersEmail } = params;

    const addedProduct = await req.json();
    const query = { email: usersEmail }

    const options = { upsert: true }
    const updateDoc = {
        $addToSet: { ...addedProduct },
    }
    try {
        const result = await usersCollection.updateOne(query, updateDoc, options)
        console.log("🚀 ~ file: route.js:26 ~ PUT ~ result:", result)
        return NextResponse.json(result)
    }
    catch (error) {
        return NextResponse.json({ message: 'An error occurred while fetching data.' });

    }
}