import axios from "axios";

export const getsearchProducts = async (searchText) => {
    try {
        const res = await axios(`http://localhost:3000/api/searchProducts?searchText=${searchText}`);
        return res?.data;
    } catch (error) {
        console.error('Error fetching all product:', error);
        return [];
    }
}