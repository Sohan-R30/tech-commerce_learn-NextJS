import { connectDB } from "@/utils/ConnectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

const client = await connectDB();

const db = client.db("techCommerce");

const usersCollection = db.collection("users");
const productsCollection = db.collection("products");




export const GET = async (req, { params }) => {
    const { userEmail } = params;

    const query = { email: userEmail }
    const options = {
        projection: { addedCartProduct: 1 },
    };
    const ProductOptions = {
        projection: { employeEmail: 0, employeeName: 0, productState: 0 },
    };

    const cartProducts = [];

    try {
        const result = await usersCollection.findOne(query, options);
        
        for (const productId of result?.addedCartProduct) {
            if (productId) {
                const singleProduct = await productsCollection.findOne({ _id: new ObjectId(productId) },ProductOptions)
                cartProducts.push(singleProduct)
            }
        }
        return NextResponse.json(cartProducts)
    }
    catch (error) {
        return NextResponse.json({ message: 'An error occurred while fetching data.' });

    }
}