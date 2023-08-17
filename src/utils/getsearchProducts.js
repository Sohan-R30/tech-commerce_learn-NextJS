import axios from "axios";

export const getsearchProducts = async (searchText) => {
    try {
        const res = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/searchProducts?searchText=${searchText}`);
        return res?.data;
    } catch (error) {
        console.error('Error fetching all product:', error);
        return [];
    }
}