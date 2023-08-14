import axios from "axios";

export const getAllProducts = async (product) => {
    try {
        const res = await axios(`http://localhost:3000/api/products?product=${product}`,)
        return res?.data;
    } catch (error) {
        console.error('Error fetching all product:', error);
        return [];
    }
}