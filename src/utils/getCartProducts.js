import axios from "axios";

export const getCartProducts = async (email) => {
    try {
        if (email) {
            const res = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/cartProducts/${email}`);
            return res?.data;
        }
        return [];
    } catch (error) {
        console.error('Error fetching all product:', error);
        return [];
    }
}