import { connectDB } from "@/utils/ConnectDB";
import { NextResponse } from "next/server";

const client = await connectDB();

const db = client.db("techCommerce");

const usersCollection = db.collection("users");


export const GET = async (req, { params }) => {
    const { email } = params;
    const adminQuery = { email: email }
    try {
        const users = await usersCollection.findOne(adminQuery);

        if (users?.role === "admin") {
            const result = await usersCollection.find({}).toArray();
            return NextResponse.json(result)
        }
        return NextResponse.json({ admin: false, message: 'An error occurred not admin.' })
    } catch (error) {
        return NextResponse.json({ message: 'An error occurred while fetching data.' });
    }
}

export const PUT = async (req, { params }) => {
    const { email } = params;

    const adminUser = await usersCollection.findOne({ email: email })

    if (adminUser?.role === "admin") {
        const userRole = await req.json();
        const userEmail = req.nextUrl.searchParams.get("email");
        const query = { email: userEmail }

        const options = { upsert: true }
        const updateDoc = {
            $set: { ...userRole },
        }
        try {
            const result = await usersCollection.updateOne(query, updateDoc, options)

            return NextResponse.json(result)
        }
        catch (error) {
            return NextResponse.json({ message: 'An error occurred while fetching data.' });

        }
    }

    return NextResponse.json({ message: 'An error occurred not admin' });



}