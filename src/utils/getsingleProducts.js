import axios from "axios";

export const getsingleProducts = async (productID) => {
    try {
        const res = await axios(`http://localhost:3000/api/products/${productID}`);
        return res?.data;
    } catch (error) {
        console.error('Error fetching all product:', error);
        return [];
    }
}