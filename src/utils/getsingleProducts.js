import axios from "axios";

export const getsingleProducts = async (productID) => {
    try {
        const res = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${productID}`);
        return res?.data;
    } catch (error) {
        console.error('Error fetching all product:', error);
        return [];
    }
}