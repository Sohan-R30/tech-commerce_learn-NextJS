import { connectDB } from "@/utils/ConnectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

const client = await connectDB();

const db = client.db("techCommerce");

const usersCollection = db.collection("users");


export const PUT = async (req,{ params }) => {

    const user = await req.json();
    const { userEmail } = params;
    const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;


    const token = jwt.sign(user,ACCESS_TOKEN_SECRET,{ expiresIn: "90d", });

    try {
        const query = { email: userEmail }
        const findUserRole = await usersCollection.findOne(query)
        if (!findUserRole) {
            user.role = "user"
        }
        const options = { upsert: true }
        const updateDoc = {
            $set: { ...user },
        }
        const result = await usersCollection.updateOne(query, updateDoc, options)
        
        const response = NextResponse.json({
            status: 200,
            success: true,
            message: "login success",
            data: result,
        })
    
        response.cookies.set("token", token, {
            expiresIn: "90d",
            httpOnly: true,
            secure: true
        })  

        return response;

    } catch (error) {
        return NextResponse.json({ error: true, message: 'An error occurred while fetching data.' });
    }
}




export const DELETE = async () => {
    const response = NextResponse.json({
        status: 200,
        success: true,
        message: "log out success",
    })

    response.cookies.delete("token")  
    return response;
}


export const GET = async (req, { params }) => {
    const { userEmail } = params;
    const query = { email: userEmail }
    console.log("🚀 ~ file: route.js:72 ~ GET ~ userEmail:", userEmail)
    const result = await usersCollection.findOne(query)
    console.log("🚀 ~ file: route.js:74 ~ GET ~ result:", result)
   return  NextResponse.json({result});
}